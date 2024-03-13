import Image from "next/image";

interface NoneFollowProps {
  followType: "followings" | "followers";
}

function NoneFollow({ followType }: NoneFollowProps) {
  return (
    <div className="flex justify-center items-center align-middle w-full h-full">
      <div>
        <Image
          src={"/utils/icons/Danger.png"}
          alt="NoneFollow"
          width={240}
          height={240}
          className="m-auto"
        />
        <div className="text-fs-28 font-bold mt-7">
          현재 {followType === "followings" ? "팔로잉" : "팔로우"} 중인 사람이
          없습니다.
        </div>
      </div>
    </div>
  );
}

export default NoneFollow;
