import SignInModal from "@/app/(providers)/(root)/_components/Header/_components/Modals/SignInModal";
import Button from "@/components/Button";
import FileInput from "@/components/FileInput";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationUpdateReview from "@/react-query/reviews/useMutationUpdateReview";
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
  scrollbars;
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const isDisplayRatingGuide = rating === 0;

  if (!eventId) return;

  const handleClickUpdate = () => {
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

    console.log(image);

    if (image) {
      formData.append("image", image);
    }
    updateReview(
      { reviewId, formData },
      {
        onSuccess: () => {
          setContent("");
          setRating(0);
          setImage(null);
          modal.close();
        },
        onError: (error) => {
          alert("리뷰 작성에 실패하였습니다");
        },
      }
    );
    console.log("수정 api");
  };
  const handleClickCancel = () => {
    modal.close();
  };
  console.log("eventId", eventId);
  console.log("reviewId", reviewId);

  return (
    <Modal>
      <div className="w-[800px]">
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
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContent(e.target.value)
            }
          />
          <div className="mb-4"></div>
          {image ? null : (
            <FileInput
              label="사진 업로드"
              onChange={(e: any) => setImage(e.target.files?.[0] || null)}
            />
          )}

          <div className="mb-12"></div>
          <div className="w-[400px] mx-auto">
            <div className="w-full flex gap-x-7">
              <Button onClick={handleClickCancel} color="neutral">
                취소
              </Button>
              <Button onClick={handleClickUpdate}>등록</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ReviewModifyModal;
