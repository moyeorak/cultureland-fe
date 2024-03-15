"use client";
import { useTabStore } from "@/zustand";
import LikedReviews from "./LikedReviews";
import WrittenReviews from "./WrittenReviews";

interface ActiveSectionProps {
  userId: number;
}

function ActiveSection({ userId }: ActiveSectionProps) {
  const { activeTab } = useTabStore();

  return (
    <div className="w-full">
      {activeTab === "작성한 리뷰" && <WrittenReviews userId={userId} />}
      {activeTab === "관심 컬처랜드" && <div>관심 목록 보여줘</div>}
      {activeTab === "관람 목록" && <div>관람 목록 보여줘</div>}
      {activeTab === "좋아요한 리뷰" && <LikedReviews userId={userId} />}
    </div>
  );
}

export default ActiveSection;
