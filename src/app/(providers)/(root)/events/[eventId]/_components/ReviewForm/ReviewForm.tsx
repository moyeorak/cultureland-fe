"use client";

import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import { MouseEventHandler, useState } from "react";
import Rating from "../Rating";
import Textarea from "../Textarea";

function ReviewForm() {
  //useMutation으로 create하기

  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreateReview: MouseEventHandler<HTMLButtonElement> = () => {
    if (rating === 0) return alert("평점을 평가해 주세요");
    if (!content.trim()) return alert("리뷰 내용을 작성해 주세요");

    const formData = new FormData();
    formData.append("rating", rating.toString()); //rating type 확인하기
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    try {
      //post api
      setContent("");
    } catch (e) {
      alert("리뷰 작성에 실패하였습니다");
    }
  };

  return (
    <div>
      <div className='flex gap-x-2'>
        <Rating value={rating} onChange={(value) => setRating(value)} />
        <p>{rating} </p>
      </div>
      <Textarea
        placeholder='관람 일정, 관람 시간, 관람 후기 등을 작성해주세요'
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
      />
      <FileInput
        label='사진 업로드'
        onChange={(e: any) => setImage(e.target.files?.[0] || null)}
      />

      <Button onClick={handleClickCreateReview}>리뷰 등록</Button>
    </div>
  );
}

export default ReviewForm;
