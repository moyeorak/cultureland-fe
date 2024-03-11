import Image from "next/image";
import { useState } from "react";

type ButtonState = "follow" | "following" | "unFollow";

function FollowButton() {
  const [buttonState, setButtonState] = useState<ButtonState>("follow");

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

  const handleFollowClick = () => {
    setButtonState(buttonState === "follow" ? "following" : "follow");
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
      {src && <Image src={src} alt="icon" width={16} height={16} />}
      <div className="text-fs-12 font-medium py-[10px]">{text}</div>
    </button>
  );
}

export default FollowButton;
