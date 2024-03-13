import StarRating from "@/components/ReviewCard/_components/StarRating";

function EventInfoCard() {
  const status = "";
  return (
    <div>
      <div className="flex gap-x-[75px] w-[620px] max-w-[620px] mx-auto ustify-center pb-7 border-b border-black">
        <div className="overflow-hidden rounded-lg bg-slate-700 min-w-60 min-h-80 w-60 h-80 ">
          {/* <Image
            src={"/images/poster.jpeg"}
            alt="event-poster"
            fill
            unoptimized
          /> */}
        </div>
        <div className="flex border-b pb-9  min-w-[300px] overflow-hidden">
          <div className="text-font-70">
            <h2 className="text-font-primary-90 text-fs-24 font-bold mb-8">
              타이틀
            </h2>
            <div className="text-fs-14 flex flex-col gap-y-2 mt-4 mb-6">
              <div className="flex">
                <p className="text-fs-14 w-[52px] font-medium ">장소</p>
                <p className="text-fs-14 font-medium flex-grow">
                  location.slice(0,87)
                </p>
              </div>
              <div className="flex">
                <p className="text-fs-14 w-[52px] font-medium ">장소</p>
                <p className="text-fs-14 font-medium flex-grow">
                  location.slice(0,87)
                </p>
              </div>
              <div className="flex">
                <p className="text-fs-14 w-[52px] font-medium ">장소</p>
                <p className="text-fs-14 font-medium flex-grow">
                  location.slice(0,87)
                </p>
              </div>
              <div className="flex">
                <p className="text-fs-14 w-[52px] font-medium ">장소</p>
                <p className="text-fs-14 font-medium flex-grow">
                  location.slice(0,87)
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <StarRating rate={3.2} />
              <span className="text-fs-14 font-medium text-">{`(${0.0})`}</span>
            </div>
            
            <div className="mt-8 border border-user-theme-100 rounded text-center text-fs-14 w-16 flex items-center justify-center px-1 h-8 text-user-theme-100">
              공연상태
            </div>
          </div>
        </div>
      </div>
      <div className="w-[620px] max-w-[620px] mx-auto  pt-7 flex">
        <span className=" w-[60px] min-w-[60px] text-font-70 font-bold mr-[30px] mb-10">
          전체가격
        </span>
        <ul className="flex gap-x-4">
          <li>가격</li>
          <li>가격</li>
          <li>가격</li>
        </ul>
      </div>
    </div>
  );
}

export default EventInfoCard;
