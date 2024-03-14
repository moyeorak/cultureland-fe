"use client";
import { GetUserData } from "@/api/accounts/users/users.data";
import Button from "@/components/Button";
import useMutationAddFollow from "@/react-query/follows/useMutationAddFollow";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import { useProfile, useTabStore } from "@/zustand";
import Image from "next/image";
import { MouseEventHandler } from "react";
import FollowSelector from "./FollowSelector";

interface ProfileSectionProps {
  user: GetUserData;
}

function ProfileSection({ user }: ProfileSectionProps) {
  const profile = useProfile();
function ProfileSection({ user }: ProfileSectionProps) {
  const { isLoggedIn } = useAuth();
  const { setShowFollows, setActiveTab } = useTabStore();
  const { mutateAsync: addFollow } = useMutationAddFollow();

  const profileImg = `${profileImgPrifix}/${user.userProfile.profileImage}`;
  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  const handleClickAddFollow: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    await addFollow(user.id);
    alert("팔로잉 목록에 추가했습니다.");
  };

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
      <div className="w-60 p-5 shadow-primary">
        <div>
          <div className="flex justify-end">
            <button
              onClick={handleClickAddFollow}
              className="text-[10px] text-user-theme-90 rounded-md border px-[18px] h-6 border-user-theme-30"
              disabled={user.isMe}
            >
              팔로우
            </button>
          </div>

          <div className="mt-3 h-[204px]">
            <Image
              src={
                user.userProfile.profileImage === null
                  ? defaultProfileImg
                  : profileImg
              }
              alt={user.userProfile.nickname}
              width={200}
              height={200}
              unoptimized
            />
          </div>

          <div>
            <h3 className="font-bold text-fs-16">
              {user.userProfile.nickname}
            </h3>
            <div className="mt-2 h-10.5 ">{user.userProfile.description}</div>
          </div>

          <div className="mt-6">
            <FollowSelector follows={user._count} />
          </div>
          {isLoggedIn && user.isMe && (
            <button className="mt-6 rounded-md border border-user-theme-30 py-2 w-full">
              <div className="text-user-theme-90 text-fs-14">프로필수정</div>
              {/**프로필 수정 모달 띄워야함 */}
            </button>
          )}
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
          <div className="mt-4 grid gap-y-4">
            <div className="min-h-10 border">작성리뷰 컴포넌트</div>
            <div className="min-h-10 border">작성리뷰 컴포넌트</div>
            <div className="min-h-10 border">작성리뷰 컴포넌트</div>
          </div>
        </div>

        <div className="mt-6 border border-b-neutral-30"></div>
        <div className="mt-6 border border-b-neutral-30"></div>

        <div className="mt-6 grid gap-y-4">
          <h3 className="font-bold text-fs-16">작성한 리뷰</h3>
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
