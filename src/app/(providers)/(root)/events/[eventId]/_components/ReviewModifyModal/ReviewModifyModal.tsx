"use client";

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
  const { mutate: updateReview } = useMutationUpdateReview(eventId || 0);
  const { data: existingReview } = useQueryReviewById(reviewId);
  const modal = useModal();
  const auth = useAuth();
  const [rating, setRating] = useState<number>();
  const [content, setContent] = useState<string>();
  const [image, setImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>();
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
    const formData = new FormData();
    formData.append("eventId", eventId.toString());
    const submitRating =
      rating === undefined || rating === 0 ? existingReview?.rating : rating;
    if (submitRating !== undefined) {
      formData.append("rating", submitRating.toString());
    }

    const submitContent =
      content?.trim() === "" || content === undefined
        ? existingReview?.content
        : content;
    if (submitContent !== undefined) {
      formData.append("content", submitContent);
    }

    if (image) {
      formData.append("image", image);
    }

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
          {previewImageUrl ? (
            <div className="flex gap-x-4 relative">
              <div className="overflow-hidden rounded-lg w-[120px] h-[120px] relative">
                <Image
                  src={previewImageUrl}
                  alt="업로드 이미지"
                  layout="fill"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="translate-x-[-6px] mx-[-20px] my-[-4px] mr-1 cursor-pointer">
                <Image
                  src={"/utils/icons/Close.png"}
                  alt="close"
                  height={24}
                  width={24}
                  unoptimized
                  onClick={() => {
                    setPreviewImageUrl(null);
                    setImage(null);
                  }}
                />
              </div>
              <FileInput
                label="사진 업로드"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setImage(file);
                }}
              />
            </div>
          ) : (
            <FileInput
              label="사진 수정"
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
            <Button onClick={handleClickUpdate}>등록</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ReviewModifyModal;
