"use client";

import StarRating from "./_components/StarRating";

function ReviewContainer() {
  //api

  const rate = 3;

  return (
    <div className="w-[960px] h-[265px] bg-slate-100 flex items-center px-8 py-9 rounded-lg">
      <div className="flex gap-x-12 w-full">
        <div className="w-[208px] h-[200px] overflow-hidden rounded-lg">
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
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-y-4 text-neutral-70  w-full">
          <div className="flex ">
            <StarRating rate={3} />
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
          <p className="pt-4 text-neutral-70 text-fs-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima
            vero eaque, corporis fugit ipsum quia doloribus odit voluptatem
            voluptates eum. Delectus harum quasi ipsa. Tempore nihil unde
            explicabo consectetur!
          </p>
          <p className="text-fs-12 ml-auto">24-03-02</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewContainer;
