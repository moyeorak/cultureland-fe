"use client";

import StarRating from "./_components/StarRating";

function ReviewContainer() {
  //review api
  const rate = 3;

  return (
    <div className="w-3/4 bg-slate-100 ">
      <div className="flex">
        <div className="w-1/3">
          {/* <Image
          src={
            "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside"
          }
          alt="사진"
          fill
        /> */}
          <img
            src={
              "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside"
            }
            alt="사진"
          />
        </div>
        <div>
          <p>작성자</p>
          <StarRating rate={3} />
          <p>content</p>
          <p>관람 날짜</p>
          <div>좋아요, 싫어요 버튼 container</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewContainer;
