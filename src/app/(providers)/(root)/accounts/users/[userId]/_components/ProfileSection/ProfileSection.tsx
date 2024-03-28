"use client";
import { GetUserData } from "@/api/accounts/users/users.data";
import SignInModal from "@/app/(providers)/(root)/(home)/_components/Header/_components/Modals/SignInModal";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationAddFollow from "@/react-query/follows/useMutationAddFollow";
import useQueryGetFollowings from "@/react-query/follows/useQueryGetFollowings";
import { profileImgPrifix } from "@/utils/profileImgPrifix";
import { useProfile, useTabStore } from "@/zustand";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MouseEventHandler } from "react";
import FollowSelector from "./FollowSelector";
import UserProfileEditModal from "./UserProfileEditModal";

interface ProfileSectionProps {
  user: GetUserData;
}

function ProfileSection({ user }: ProfileSectionProps) {
  const profile = useProfile();
  const { isLoggedIn } = useAuth();
  const modal = useModal();
  const { setShowFollows, setActiveTab } = useTabStore();
  const { mutateAsync: addFollow } = useMutationAddFollow();

  const { data: myFollowings } = useQueryGetFollowings(profile.id!, isLoggedIn);
  const amIFollowing = (userIdToCheck: number) => {
    return myFollowings?.some(
      (myFollowing) => myFollowing.following.id === userIdToCheck
    );
  };

  const profileImg = `${profileImgPrifix}/${user.userProfile.profileImage}`;
  const defaultProfileImg = `${profileImgPrifix}/cultureland/profile/default_profile.jpeg`;

  const handleClickAddFollow: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!isLoggedIn) return modal.open(<SignInModal />);
    if (amIFollowing(user.id)) return alert("이미 팔로우 중입니다.");
    await addFollow(user.id);
    alert("팔로잉 목록에 추가했습니다.");
  };

  const { userId } = useParams();
  const isMyProfile = Number(userId) === profile.id;

  return (
    <div>
      <div className="w-60 pr-4 border-r">
        <section className="flex flex-col gap-y-4">
          <div className="w-60 p-5 shadow-primary">
            <div>
              <div className="mt-3 h-[204px] overflow-hidden relative">
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
                  objectFit="cover"
                />
              </div>

              <div>
                <h3 className="font-bold text-fs-16">
                  {user.userProfile.nickname}
                </h3>
                <div className="mt-2 h-10.5 ">
                  {user.userProfile.description}
                </div>
              </div>

              <div className="mt-6">
                <FollowSelector follows={user._count} />
              </div>
              {isLoggedIn && user.isMe && (
                <button
                  className="mt-6 rounded-md border border-user-theme-30 py-2 w-full"
                  onClick={() => {
                    modal.open(<UserProfileEditModal />);
                  }}
                >
                  <div className="text-user-theme-90 text-fs-14">
                    프로필수정
                  </div>
                  {/**프로필 수정 모달 띄워야함 */}
                </button>
              )}
            </div>
            <div className="mt-6">
              {!isMyProfile && (
                <Button fullWidth onClick={handleClickAddFollow}>
                  팔로우하기
                </Button>
              )}
            </div>
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
        </div>
        <div className="mt-6 grid gap-y-4">
          <h3 className="font-bold text-fs-16">작성한 리뷰</h3>
        </div>
        <div className="flex justify-between mt-2">
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

        <div className="flex justify-between mt-2">
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
  );
}
export default ProfileSection;
