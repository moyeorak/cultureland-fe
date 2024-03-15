"use client";
import { useTabStore } from "@/zustand";
import TabButton from "./TabButton";

interface InfoTabsProps {
  nickname: string;
}

function InfoTabs({ nickname }: InfoTabsProps) {
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div className="mt-4 ml-72 mb-5">
      <h1 className="text-fs-28 font-medium">{nickname}님의 활동</h1>
      <div className="flex space-x-6 mt-4">
        <TabButton
          title="작성한 리뷰"
          active={activeTab === "작성한 리뷰"}
          onClick={() => setActiveTab("작성한 리뷰")}
        />
        <TabButton
          title="관심 컬처랜드"
          active={activeTab === "관심 컬처랜드"}
          onClick={() => setActiveTab("관심 컬처랜드")}
        />
        <TabButton
          title="관람 목록"
          active={activeTab === "관람 목록"}
          onClick={() => setActiveTab("관람 목록")}
        />
        <TabButton
          title="좋아요한 리뷰"
          active={activeTab === "좋아요한 리뷰"}
          onClick={() => setActiveTab("좋아요한 리뷰")}
        />
      </div>
    </div>
  );
}

export default InfoTabs;
