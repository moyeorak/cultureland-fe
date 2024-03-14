"use client";

import SignInModal from "@/app/(providers)/(root)/(home)/_components/Header/_components/Modals/SignInModal";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationUpdateReview from "@/react-query/reviews/useMutationUpdateReview";
import useQueryReviewById from "@/react-query/reviews/useQueryReview";
import Image from "next/image";
import { useEffect, useState } from "react";
import Rating from "../Rating";
import Textarea from "../Textarea";

interface ReviewModifyModalProps {
  eventId?: number;
  reviewId: number;
}

function ReviewModifyModal({ eventId, reviewId }: ReviewModifyModalProps) {
  const { mutate: updateReview } = useMutationUpdateReview();
  const { data: existingReview } = useQueryReviewById(reviewId);
  const modal = useModal();
  const auth = useAuth();
  const [rating, setRating] = useState<number>();
  const [content, setContent] = useState<string>();
  const [image, setImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>();
  const isButtonDisabled = rating === 0 || !content?.trim();
  const isDisplayRatingGuide = rating === 0;

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewImageUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewImageUrl(null);
    }
  }, [image]);

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setPreviewImageUrl(
        existingReview.image
          ? "https://yanastudys3.s3.ap-northeast-2.amazonaws.com/" +
              existingReview.image
          : null
      );
    }
  }, [existingReview]);

  if (!eventId) return null;

  const handleClickUpdate = () => {
    if (!auth.isLoggedIn) {
      modal.open(<SignInModal />);
      return;
    }
    if (rating === undefined || rating === 0 || !content?.trim()) {
      alert("평점과 리뷰 내용을 모두 입력해주세요.");
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
        <div className="px-10 py-10 rounded-lg shadow-primary">
          <h4 className="mb-4 font-bold text-center text-fs-28">리뷰 수정</h4>
          <div className="flex gap-x-2">
            <Rating value={rating || 0} onChange={setRating} size={24} />
          </div>
          {isDisplayRatingGuide && (
            <p className="px-2 mt-1 mb-4 text-fs-12 text-font-70">
              별점을 선택해 주세요
            </p>
          )}
          <Textarea
            placeholder={existingReview?.content}
            value={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
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
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setImage(file);
              }}
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
