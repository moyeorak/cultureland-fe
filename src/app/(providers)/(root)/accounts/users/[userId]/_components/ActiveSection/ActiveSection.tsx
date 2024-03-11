"use client";
import { useTabStore } from "@/zustand";

function ActiveSection() {
  const { activeTab } = useTabStore();

  return (
    <div>
      {activeTab === "작성한 리뷰" && <div>리뷰 보여줘</div>}
      {activeTab === "관심 컬처랜드" && <div>관심 목록 보여줘</div>}
      {activeTab === "관람 목록" && <div>관람 목록 보여줘</div>}
    </div>
  );
}

export default ActiveSection;
