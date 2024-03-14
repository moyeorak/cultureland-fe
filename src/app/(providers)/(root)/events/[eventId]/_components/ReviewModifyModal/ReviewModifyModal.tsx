"use client";

import SignInModal from "@/app/(providers)/(root)/_components/Header/_components/Modals/SignInModal";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationUpdateReview from "@/react-query/reviews/useMutationUpdateReview";
import Image from "next/image";
import { useState } from "react";
import Rating from "../Rating";
import Textarea from "../Textarea";

interface ReviewModifyModalProps {
  eventId?: number;
  reviewId: number;
}

function ReviewModifyModal({ eventId, reviewId }: ReviewModifyModalProps) {
  const { mutate: updateReview } = useMutationUpdateReview();
  const modal = useModal();
  const auth = useAuth();
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const isButtonDisabled = rating === 0 || !content.trim();
  const isDisplayRatingGuide = rating === 0;

  if (!eventId) return null;

  // useEffect(() => {
  //   if (image) {
  //     const url = URL.createObjectURL(image);
  //     setPreviewImageUrl(url);
  //     return () => URL.revokeObjectURL(url);
  //   } else {
  //     setPreviewImageUrl(null);
  //   }
  // }, [image]);

  const handleClickUpdate = () => {
    if (!auth.isLoggedIn) {
      modal.open(<SignInModal />);
      return;
    }
    if (rating === 0) {
      alert("평점을 평가해 주세요");
      return;
    }
    if (!content.trim()) {
      alert("리뷰 내용을 작성해 주세요");
      return;
    }

    const formData = new FormData();
    formData.append("eventId", eventId.toString());
    formData.append("rating", rating.toString());
    formData.append("content", content);
    if (image) formData.append("image", image);

    updateReview(
      { reviewId, formData },
      {
        onSuccess: () => {
          alert("리뷰가 성공적으로 수정되었습니다.");
          modal.close();
        },
        onError: () => {
          alert("리뷰 수정에 실패하였습니다.");
        },
      }
    );
  };

  return (
    <Modal>
      <div className="w-[800px]">
        <div className="py-10 px-10 shadow-primary rounded-lg">
          <h4 className="font-bold text-fs-28 mb-4 text-center">리뷰 수정</h4>
          <div className="flex gap-x-2">
            <Rating value={rating} onChange={setRating} size={24} />
          </div>
          {isDisplayRatingGuide && (
            <p className="text-fs-12 text-font-70 mt-1 mb-4 px-2">
              별점을 선택해 주세요
            </p>
          )}
          <Textarea
            placeholder="관람 일정, 관람 시간, 관람 후기 등을 작성해주세요\n(사진 1장 첨부 가능)"
            value={content}
            onChange={(e: any) => setContent(e.target.value)}
          />
          <div className="mb-4"></div>
          {image && previewImageUrl ? (
            <div className="overflow-hidden rounded-lg w-[120px] h-[120px] relative">
              <Image
                src={previewImageUrl}
                alt="미리보기 이미지"
                fill
                objectFit="cover"
              />
            </div>
          ) : (
            <FileInput
              label="사진 업로드"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          )}
          <div className="mb-12"></div>
          <div className="w-full flex justify-center gap-x-7">
            <Button onClick={modal.close} color="secondary" outline>
              취소
            </Button>
            <Button onClick={handleClickUpdate} disabled={isButtonDisabled}>
              등록
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ReviewModifyModal;
