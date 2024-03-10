export type Review = {
  id: number;
  reviewerId: number;
  eventId: number;
  image?: string;
  isVerified: boolean;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string | null;
  likes?: number;
  hates?: number;
  reviewReactions?: ReviewReaction[];
};

export type ReviewReaction = {
  userId?: number;
  reviewId?: number;
  reactionValue?: number;
};
