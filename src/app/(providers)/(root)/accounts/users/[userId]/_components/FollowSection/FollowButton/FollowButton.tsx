import { useAuth } from "@/contexts/auth.context/auth.context";
import useMutationAddFollow from "@/react-query/follows/useMutationAddFollow";
import useMutationDeleteFollow from "@/react-query/follows/useMutationDeleteFollow";
import { useAuthStore } from "@/zustand";
import Image from "next/image";
import { useState } from "react";

type ButtonState = "follow" | "following" | "unFollow";
interface FollowButtonProps {
  userId: number;
  amIFollowing: boolean | undefined;
}

function FollowButton({ userId, amIFollowing }: FollowButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(
    amIFollowing ? "following" : "follow"
  );
  const { mutateAsync: addFollow } = useMutationAddFollow();
  const { mutateAsync: deleteFollow } = useMutationDeleteFollow();
  const { isLoggedIn } = useAuth();
  const { userInfo } = useAuthStore();
  // 로그인한 유저(나)의 팔로잉 목록을 순회하여 방문한 유저의 목록에 있는 사람 중의 한 사람 id가 있는지?
  // 나의 팔로잉 목록 가져오기
  // 나의 팔로잉 목록을 순회
  // 방문한 유저의 목록도 순회
  // 둘 중 같은 타인의 id가 있는지

  const buttonDetails = {
    follow: {
      text: "팔로우",
      src: "/utils/icons/plus-black.png",
      bgClass: "bg-white border border-user-theme-30 text-user-theme-90",
    },
    following: {
      text: "팔로잉",
      src: "/utils/icons/check-black.png",
      bgClass: "bg-user-theme-100 text-white",
    },
    unFollow: {
      text: "언팔로우",
      src: null,
      bgClass: "bg-white border border-user-theme-30 text-user-theme-90",
    },
  };

  const handleFollowClick = async () => {
    if (!isLoggedIn || !userInfo) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }

    if (buttonState === "follow") {
      await addFollow(userInfo.userId);
      setButtonState("following");
      alert("팔로잉 목록에 추가했습니다.");
    } else if (buttonState === "following" || buttonState === "unFollow") {
      await deleteFollow(userInfo.userId);
      setButtonState("follow");
      alert("언팔로잉 했습니다.");
    }
  };

  const handleMouseEnter = () => {
    if (buttonState === "following") {
      setButtonState("unFollow");
    }
  };

  const handleMouseLeave = () => {
    if (buttonState === "unFollow") {
      setButtonState("following");
    }
  };

  const { text, src, bgClass } = buttonDetails[buttonState];

  return (
    <button
      className={`${bgClass} flex w-[82px] justify-center gap-x-1 rounded-lg items-center`}
      onClick={handleFollowClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {src && <Image src={src} alt="icon" width={16} height={16} unoptimized />}
      <div className="text-fs-12 font-medium py-[10px]">{text}</div>
    </button>
  );
}

export default FollowButton;
