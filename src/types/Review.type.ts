export type Review = {
  id: number;
  reviewerId: number;
  eventId: number;
  imageUrl?: string;
  isVerified: boolean;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string | null;
};

export type ReviewReaction = {
  userId?: number;
  reviewId?: number;
  reactionValue?: number;
};

export type ReactionsCount = {
  likes: number;
  hates: number;
};
