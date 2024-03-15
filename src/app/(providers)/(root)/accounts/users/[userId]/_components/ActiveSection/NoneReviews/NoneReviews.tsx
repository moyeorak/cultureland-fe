import Image from "next/image";

interface NoneReviewsProps {
  reviewsType: "liked" | "written";
}

function NoneReviews({ reviewsType }: NoneReviewsProps) {
  return (
    <div className="flex justify-center items-center align-middle w-full h-full">
      <div>
        <Image
          src={"/utils/icons/Danger.png"}
          alt="NoneReviews"
          width={240}
          height={240}
          className="m-auto"
        />
        <div className="text-fs-28 font-bold mt-7">
          현재 {reviewsType === "liked" ? "좋아요를 누른" : "작성한"} 리뷰가
          없습니다.
        </div>
      </div>
    </div>
  );
}

export default NoneReviews;
