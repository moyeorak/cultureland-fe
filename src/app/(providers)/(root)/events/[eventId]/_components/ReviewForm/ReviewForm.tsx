"use client";

import SignInModal from "@/app/(providers)/(root)/_components/Header/_components/Modals/SignInModal";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationCreateReview from "@/react-query/reviews/useMutationCreateReview";
import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import Rating from "../Rating";
import Textarea from "../Textarea";

interface ReviewFormProps {
  eventId: number;
  IsModify?: boolean;
  existingReview?: {
    rating: number;
    content: string;
    image: File | null;
  };
}

function ReviewForm({ eventId, IsModify, existingReview }: ReviewFormProps) {
  const { mutate: createReview } = useMutationCreateReview();

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  const isButtonDisabled = rating === 0 || !content.trim();
  const isDisplayRatingGuide = rating === 0;

  const auth = useAuth();
  const modal = useModal();

  useEffect(() => {
    if (existingReview) {
      setRating(existingReview.rating);
      setContent(existingReview.content);
      setImage(existingReview.image);
    }
  }, [existingReview]);

  const handleClickCreateReview: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (!auth.isLoggedIn) {
      modal.open(<SignInModal />);
      return;
    }
    if (rating === 0) return alert("평점을 평가해 주세요");
    if (!content.trim()) return alert("리뷰 내용을 작성해 주세요");

    const formData = new FormData();
    formData.append("eventId", eventId.toString());
    formData.append("rating", rating.toString());
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    createReview(formData, {
      onSuccess: () => {
        setContent("");
        setRating(0);
        setImage(null);
      },
      onError: (error) => {
        alert("리뷰 작성에 실패하였습니다");
      },
    });
  };

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewImageUrl(url);

      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewImageUrl(null);
    }
  }, [image]);

  const ReviewFormContent = (
    <div className=" py-10 px-10 shadow-primary rounded-lg">
      <h4 className="font-bold text-fs-28 mb-4 text-center">리뷰 작성</h4>
      <div className="flex gap-x-2">
        <Rating
          value={rating}
          onChange={(value) => setRating(value)}
          size={24}
        />
      </div>
      {isDisplayRatingGuide && (
        <p className="text-fs-12 text-font-70 mt-1 mb-4 px-2">
          별점을 선택해 주세요
        </p>
      )}

      <Textarea
        placeholder={`관람 일정, 관람 시간, 관람 후기 등을 작성해주세요   
(사진 1장 첨부 가능)`}
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const inputContent = e.target.value;
          if (inputContent.length <= 200) {
            setContent(inputContent);
          } else {
            alert("200글자 이내로 작성해주세요");
            return;
          }
        }}
      />
      <div className="mb-4"></div>
      {image && previewImageUrl ? (
        <div className="overflow-hidden rounded-lg w-[120px] h-[120px] relative">
          <Image
            src={previewImageUrl}
            alt="미리보기 이미지"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <FileInput
          label="사진 업로드"
          onChange={(e: any) => {
            const file = e.target.files?.[0] || null;
            setImage(file);
          }}
        />
      )}

      <div className="mb-12"></div>
      <div className="w-[400px] mx-auto">
        <Button
          onClick={handleClickCreateReview}
          color={isButtonDisabled ? "neutral" : "primary"}
        >
          등록
        </Button>
      </div>
    </div>
  );

  if (IsModify) {
    return (
      <Modal>
        <div className="w-[800px]">{ReviewFormContent}</div>
      </Modal>
    );
  }

  return ReviewFormContent;
}

export default ReviewForm;
