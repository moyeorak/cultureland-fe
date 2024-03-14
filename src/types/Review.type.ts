export type Review = {
  id: number;
  reviewerId: number;
  reviewer: {
    id: number;
    userProfile: {
      nickname: string;
      profileImage: string | null;
    };
  };
  eventId: number;
  image: string | null;
  isVerified: boolean;
  rating: number;
  content: string;

  likes: number;
  hates: number;
  reviewReactions: ReviewReaction[];

  event: {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    poster: string;
    category: { name: string };
    venue: { id: number; name: string };
  };
  isMe: false;
  createdAt: string;

  updatedAt?: string;
  deletedAt?: string | null;
};

export type ReviewReaction = {
  userId: number;
  reviewId: number;
  reactionValue: number;
};
