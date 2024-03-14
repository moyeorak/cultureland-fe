import StarRating from "@/components/ReviewCard/_components/StarRating";
import { Event } from "@/types/Event.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";

interface EventInfoCardProps {
  event: Event;
  avgRating: string;
}

function EventInfoCard({ event, avgRating }: EventInfoCardProps) {
  const status = event.eventDetail.eventStatus.value === "공연중";
  const priceArray = event.eventDetail.price.split(", ");

  return (
    <div className="bg-orange-200 xs:mx-auto w-full">
      <h2 className="text-font-primary-90 text-fs-20 font-bold text-center xs:block hidden mb-5 ">
        {event.title}
      </h2>
      <div className="flex gap-x-[75px] xs:gap-x-[20px] w-[660px] xs:w-[325px] xs:min-w-[325px] min-w-[620px] mx-auto  pb-7 border-b border-black justify-center">
        <div className="relative overflow-hidden rounded-lg min-w-60 min-h-80 w-60 h-80 xs:w-[150px] xs:h-[200px] xs:min-w-[150px] xs:min-h-[200px] bg-black">
          <Image src={event.poster} alt="event-poster" fill unoptimized />
        </div>
        <div className="flex pb-9 xs:pb- min-w-[300px] w-full overflow-hidden bg-red-300 xs: xs:w-[175px] xs:min-w-[175px] xs:max-w-[175px] xs:text-[10px] ">
          <div className="text-font-70">
            <h2 className="text-font-primary-90 text-fs-24 font-bold mb-8 xs:hidden block">
              {event.title}
            </h2>
            <div className="text-fs-14  xs:text-[10px] flex flex-col gap-y-2 mt-4 mb-6 xs:mb-4">
              <div className="flex">
                <p className="text-fs-14  w-16 font-medium ">장소</p>
                <p className="text-fs-14 font-medium flex-grow">
                  {event.venue.name}
                </p>
              </div>
              <div className="flex">
                <p className="text-fs-14 w-16  font-medium ">관람연령</p>
                <p className="text-fs-14 font-medium flex-grow">
                  {event.eventDetail.targetAudience}
                </p>
              </div>
              <div className="flex">
                <p className="text-fs-14 w-16  font-medium ">공연시간</p>
                <p className="text-fs-14 font-medium flex-grow">
                  {event.eventDetail.runtime}
                </p>
              </div>
              <div className="flex">
                <p className="text-fs-14 w-16 font-medium ">공연기간</p>
                <p className="text-fs-14 font-medium flex-grow">
                  {`${formatDate(event.startDate)} - ${formatDate(
                    event.endDate
                  )}`}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center xs:text-[10px]">
              <StarRating rate={Number(avgRating)} />
              <span className="text-fs-14 font-medium text-">{`(${avgRating})`}</span>
            </div>

            <div
              className={`mt-8 xs:mt-4 xs:w-12 xs:text-[10px] xs:h-6 border rounded text-center text-fs-14 w-16 flex items-center justify-center px-1 h-8 ${
                status
                  ? "border-user-theme-100 text-user-theme-100"
                  : "border-neutral-80 text-font-70"
              }`}
            >
              {event.eventDetail.eventStatus.value}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[620px] max-w-[620px] mx-auto  pt-7 flex ">
        <span className=" w-[60px] min-w-[60px] text-font-70 font-bold mr-[30px] mb-10 xs:text-fs-12">
          전체가격
        </span>
        <ul className="flex gap-x-4 list-disc list-inside xs:text-[10px] xs:grid grid-cols-2">
          {/* {priceArray?.map((price, index) => (
            <li key={index}>{price}</li>
          ))} */}
          <li>R석 2000000</li>
          <li>R석 2000000</li>
          <li>R석 2000000</li>

          <li>R석 2000000</li>
        </ul>
      </div>
    </div>
  );
}

export default EventInfoCard;
