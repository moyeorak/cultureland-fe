"use client";

import api from "@/api/index.api";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import { MouseEventHandler, useState } from "react";
import Rating from "../Rating";
import Textarea from "../Textarea";

interface ReviewFormProps {
  eventId: number;
}

function ReviewForm({ eventId }: ReviewFormProps) {
  //useMutation으로 create하기

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreateReview: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    if (rating === 0) return alert("평점을 평가해 주세요");
    if (!content.trim()) return alert("리뷰 내용을 작성해 주세요");

    const formData = new FormData();
    formData.append("eventId", eventId.toString());
    formData.append("rating", rating.toString());
    formData.append("content", content);

    if (image) {
      formData.append("image", image);
    }

    try {
      await api.reviews.createReview(formData);
      setContent("");
      //setRating(0);
    } catch (e) {
      alert("리뷰 작성에 실패하였습니다");
    }
  };

  return (
    <div className=" py-10 px-10 shadow-primary rounded-lg">
      <h4 className="font-bold text-fs-28 mb-4 text-center">후기작성</h4>
      <div className="flex gap-x-2">
        <Rating value={rating} onChange={(value) => setRating(value)} />
      </div>
      <p className="text-fs-12 text-font-70 mt-1 mb-14">별점을 선택해 주세요</p>
      <Textarea
        placeholder="관람 일정, 관람 시간, 관람 후기 등을 작성해주세요"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
      />
      <div className="mb-4"></div>
      <FileInput
        label="사진 업로드"
        onChange={(e: any) => setImage(e.target.files?.[0] || null)}
      />
      <div className="mb-12"></div>
      <div className="w-[400px] mx-auto">
        <Button onClick={handleClickCreateReview}>등록</Button>
      </div>
    </div>
  );
}

export default ReviewForm;
