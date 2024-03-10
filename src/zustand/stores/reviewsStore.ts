import { Review } from "@/types/Review.type";
import { create } from "zustand";

interface ReviewsState {
  reviews: Review[];
  fetchReviews: (eventId: string) => Promise<void>;
  addReview: (review: Review) => Promise<void>;
  editReview: (reviewId: string, content: string) => Promise<void>;
  deleteReview: (reviewId: string) => Promise<void>;
}

const useReviewsStore = create<ReviewsState>((set) => ({
  reviews: [],
  fetchReviews: async (eventId) => {
    // 특정 이벤트에 대한 리뷰 목록 가져오기
  },
  addReview: async (review) => {
    // 리뷰 추가하기
  },
  editReview: async (reviewId, content) => {
    // 리뷰 수정하기
  },
  deleteReview: async (reviewId) => {
    // 리뷰 삭제하기
  },
}));

export default useReviewsStore;
