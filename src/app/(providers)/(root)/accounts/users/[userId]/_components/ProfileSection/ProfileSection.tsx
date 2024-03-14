"use client";
import { GetUserData } from "@/api/accounts/users/users.data";
import Button from "@/components/Button";
import { useProfile, useTabStore } from "@/zustand";
import Image from "next/image";
import { useParams } from "next/navigation";
import FollowsCount from "./FollowsCount";

interface ProfileSectionProps {
  user: GetUserData;
}

function ProfileSection({ user }: ProfileSectionProps) {
  const profile = useProfile();
  const { setShowFollows, setActiveTab } = useTabStore();
  const { userId } = useParams();
  const isMyProfile = Number(userId) === profile.id;

  return (
    <div>
      <div className="w-60 pr-4 border-r">
        <section className="flex flex-col gap-y-4">
          {user.userProfile.profileImage && (
            <div className="relative aspect-square">
              <Image
                alt={user.userProfile.nickname}
                src={user.userProfile.profileImage}
                fill
                sizes="100%"
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <div className="grid grid-cols-1 gap-y-0.5">
            <h1 className="text-lg font-bold text-neutral-90">
              {user.userProfile.nickname}
            </h1>
            <p className="text-sm text-neutral-50">
              {user.userProfile.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-4">
            {!isMyProfile && <Button fullWidth>팔로우하기</Button>}

            <FollowsCount
              followersCount={user._count.followers}
              followingsCount={user._count.followings}
            />
          </div>
        </section>

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
    </div>
  );
}

export default ProfileSection;
