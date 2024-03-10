import { Review } from "@/types/Review.type";
import { create } from "zustand";

interface ReviewsState {
  likedReviews: Review[];
  addLikeReview: (review: Review) => void;
  removeLikeReview: (reviewId: Review) => void;

  myReviews: Review[];
  addMyReview: (review: Review) => void;
  removeMyReview: (review: Review) => void;
}

const useReviewsStore = create<ReviewsState>((set) => ({
  likedReviews: [],
  addLikeReview: (newReview) =>
    set((state) => {
      const isAlreadyLiked = state.likedReviews.some(
        (review) => review.id === newReview.id
      );
      if (!isAlreadyLiked) {
        return { likedReviews: [...state.likedReviews, newReview] };
      } else {
        return state;
      }
    }),
  removeLikeReview: (review) =>
    set((state) => ({
      likedReviews: state.likedReviews.filter(
        (likedReview) => likedReview.id !== review.id
      ),
    })),

  myReviews: [],
  addMyReview: (review) =>
    set((state) => ({
      myReviews: [...state.myReviews, review],
    })),
  removeMyReview: (review) =>
    set((state) => ({
      myReviews: state.myReviews.filter(
        (myReview) => myReview.id !== review.id
      ),
    })),
}));

export default useReviewsStore;
