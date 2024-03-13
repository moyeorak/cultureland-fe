import SignInModal from "@/app/(providers)/(root)/_components/Header/_components/Modals/SignInModal";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationCreateReview from "@/react-query/reviews/useMutationCreateReview";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  const [rating, setRating] = useState(
    existingReview ? existingReview.rating : 0
  );
  const [content, setContent] = useState(
    existingReview ? existingReview.content : ""
  );
  const [image, setImage] = useState<File | null>(
    existingReview ? existingReview.image : null
  );
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  const isButtonDisabled = rating === 0 || !content.trim();
  const auth = useAuth();
  const modal = useModal();

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewImageUrl(null);
  }, [image]);

  const handleClickCreateReview = async () => {
    if (!auth.isLoggedIn) {
      modal.open(<SignInModal />);
      return;
    }
    if (rating === 0 || !content.trim()) {
      alert("Please ensure all required fields are filled out.");
      return;
    }

    const formData = new FormData();
    formData.append("eventId", eventId.toString());
    formData.append("rating", rating.toString());
    formData.append("content", content);
    if (image) formData.append("image", image);

    createReview(formData, {
      onSuccess: () => {
        setContent("");
        setRating(0);
        setImage(null);
        alert("리뷰가 성공적으로 등록되었습니다");
      },
      onError: () => {
        alert("리뷰 등록에 실패하였습니다");
      },
    });
  };

  return (
    <div className="py-10 px-10 shadow-primary rounded-lg">
      <h4 className="font-bold text-fs-28 mb-4 text-center">리뷰 작성</h4>
      <div className="flex gap-x-2">
        <Rating value={rating} onChange={setRating} size={24} />
      </div>
      <Textarea
        placeholder="관람 일정, 관람 시간, 관람 후기 등을 작성해주세요\n(사진 1장 첨부 가능)"
        value={content}
        // onChange={(e) => {
        //   const inputContent = e.target.value;
        //   if (inputContent.length <= 200) {
        //     setContent(inputContent);
        //   } else {
        //     alert("200글자 이내로 작성해주세요.");
        //   }
        // }}
      />
      <div className="mb-4" />
      {image && previewImageUrl ? (
        <div className="overflow-hidden rounded-lg w-[120px] h-[120px] relative">
          <Image
            src={previewImageUrl}
            alt="Preview image"
            layout="fill"
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
      <div className="mb-12" />
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
}

export default ReviewForm;
