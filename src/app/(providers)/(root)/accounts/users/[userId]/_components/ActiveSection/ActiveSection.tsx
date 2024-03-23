"use client";
import { useTabStore } from "@/zustand";
import WrittenReviews from "./WrittenReviews";
interface ActiveSectionProps {
  userId: number;
}
function ActiveSection({ userId }: ActiveSectionProps) {
  const { activeTab } = useTabStore();
  console.log("userId", userId);

  return (
    <div className="py-10 text-center">
      {activeTab === "작성한 리뷰" && (
        <div className="text-center">
          <WrittenReviews userId={userId} />
        </div>
      )}
      {activeTab === "관심 컬처랜드" && <div>아직 관심 이벤트가 없습니다.</div>}
      {activeTab === "관람 목록" && (
        <div>아직 관람한 이벤트 목록이 없습니다.</div>
      )}
    </div>
  );
}

export default ActiveSection;
