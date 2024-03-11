"use client";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useTabStore } from "@/zustand";
import Image from "next/image";
import FollowButtons from "./FollowButtons";

interface ProfileSectionProps {
  isLoggedUser: boolean;
}

function ProfileSection({ isLoggedUser }: ProfileSectionProps) {
  const { isLoggedIn } = useAuth();
  const { setShowFollows, setActiveTab } = useTabStore();
  return (
    <div>
      {isLoggedIn && isLoggedUser ? (
        <div>이건 나의 페이지</div>
      ) : (
        <div className="w-60 p-5 shadow-primary">
          <div>
            <div className="flex justify-between">
              <h3 className="font-bold text-fs-16">000님의 프로필</h3>
              <button className="text-[10px] text-user-theme-90 rounded-md border px-[18px] border-user-theme-30">
                팔로우
              </button>
            </div>

            <div className="mt-3">
              <div className="h-[204px] bg-slate-200">이미지 자리</div>
            </div>

            <div>
              <h3 className="font-bold text-fs-16">FindingNemo</h3>
              <div className="mt-2 h-10.5 bg-slate-100">
                여기는 한줄소개 자리
              </div>
            </div>

            <div className="mt-6">
              <FollowButtons />
            </div>
          </div>

          <div className="mt-6 border border-b-neutral-30"></div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-fs-16">작성한 리뷰</h3>
              <button
                className="font-normal text-fs-12 text-gray-400"
                onClick={() => {
                  setShowFollows(false);
                  setActiveTab("작성한 리뷰");
                }}
              >
                더보기
              </button>
            </div>

            <div className="mt-4 grid gap-y-4">
              <div className="min-h-10 border">작성리뷰 컴포넌트</div>
              <div className="min-h-10 border">작성리뷰 컴포넌트</div>
              <div className="min-h-10 border">작성리뷰 컴포넌트</div>
            </div>
          </div>

          <div className="mt-6 border border-b-neutral-30"></div>

          <div className="mt-6 grid gap-y-4">
            <h3 className="font-bold text-fs-16">작성한 리뷰</h3>

            <div className="flex justify-between">
              <div className="font-normal text-fs-14">관람 목록</div>
              <Image
                src={"/utils/icons/16.png"}
                alt="rightPointer"
                width={20}
                height={20}
                onClick={() => {
                  setShowFollows(false);
                  setActiveTab("관람 목록");
                }}
                className="cursor-pointer"
              />
            </div>

            <div className="flex justify-between">
              <div className="font-normal text-fs-14">관심 컬처랜드</div>
              <Image
                src={"/utils/icons/16.png"}
                alt="rightPointer"
                width={20}
                height={20}
                onClick={() => {
                  setShowFollows(false);
                  setActiveTab("관심 컬처랜드");
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileSection;
