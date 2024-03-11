import FollowButton from "./../FollowButton/FollowButton";

function FollowList() {
  return (
    <>
      <div className="flex justify-between items-center b-7 border border-x-0 border-y-neutral-10 w-full">
        <div className="flex items-center my-5">
          <div className="bg-neutral-30 h-[60px] w-[60px] rounded-full">
            {/* 이미지자리 */}
          </div>
          <div className="ml-3">
            <div className="text-fs-16 font-medium">DODO332</div>
            <div className="text-fs-14 font-normal mt-1">
              재미있는 문화 리뷰어로 거듭나고 싶습니다.
            </div>
          </div>
        </div>
        <FollowButton />
      </div>
      <div className="flex justify-between items-center b-7 border border-x-0 border-y-neutral-10 w-full">
        <div className="flex items-center my-5">
          <div className="bg-neutral-30 h-[60px] w-[60px] rounded-full">
            {/* 이미지자리 */}
          </div>
          <div className="ml-3">
            <div className="text-fs-16 font-medium">DODO332</div>
            <div className="text-fs-14 font-normal mt-1">
              재미있는 문화 리뷰어로 거듭나고 싶습니다.
            </div>
          </div>
        </div>
        <FollowButton />
      </div>
    </>
  );
}

export default FollowList;
