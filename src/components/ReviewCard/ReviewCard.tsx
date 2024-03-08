"use client";

import { formatDate } from "@/utils/formatDate.utils";
import StarRating from "./_components/StarRating";
interface ReviewCardProps {
  review: any; //type 정의
}
function ReviewCard({ review }: ReviewCardProps) {
  // console.log(review.imageUrl);
  //작성자(닉네임)은 getUser(userId 넣어주기?)로 얻기?
  return (
    <div className="w-[960px] h-[265px] bg-slate-100 flex items-center px-8 py-9 rounded-lg">
      <div className="flex gap-x-12 w-full">
        <div className="w-[208px] h-[200px] overflow-hidden rounded-lg">
          {/* <Image src={} alt="review-photo" width={208} height={200} /> */}
          <img
            src={
              "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside"
            }
            alt="사진"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-y-4 text-neutral-70  w-full">
          <div className="flex ">
            <StarRating rate={review.rating} />
            <span className="ml-auto text-fs-12">수정, 삭제</span>
          </div>

          <div className="flex gap-x-3  items-center">
            {/* <Image /> */}
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden text-neutral-70 ">
              <img
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=insid"
                alt="user-profile"
              />
            </div>
            <p className="text-fs-16 font-bold">닉네임</p>
          </div>
          <p className="pt-4 text-neutral-70 text-fs-14">{review.content}</p>
          <p className="text-fs-12 ml-auto">{formatDate(review.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
