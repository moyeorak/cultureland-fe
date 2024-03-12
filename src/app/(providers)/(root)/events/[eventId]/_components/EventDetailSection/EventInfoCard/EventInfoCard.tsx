import StarRating from "@/components/ReviewCard/_components/StarRating";
import { Event } from "@/types/Event.type";
import Image from "next/image";

const event: Event = {
  id: 1,
  eventId: 1,
  partnerId: 1,
  title: "테스트 콘서트",
  poster: "/event1.jpg",
  startDate: "2024-03-05",
  endDate: "2024-03-05",
  venue: {
    venueName: "공연장",
    address: "공연장 주소",
    latitude: 127,
    longitude: 34,
  },
  category: {
    id: 1,
    name: "콘서트",
  },
  rating: 3.2,
  eventDetail: {
    description: "콘서트 이벤트",
    bookingLink:
      "https://tickets.interpark.com/contents/search?keyword=이벤트제목",
    event_description_image: [
      "/event1_description1.jpg",
      "/event1_description2.jpg",
    ],
    runtime: "120분",
    targetAudience: "12세 이상",
    price: "120000",
    genre: "대중 가요",
    status: "진행 중인 이벤트",
    startTime: "18:00",
    endTime: "20:00",
  },
};

function EventInfoCard() {
  return null;
  return (
    <div className=" shadow-primary rounded-lg py-11 px-10 flex-grow relative">
      <div className="flex border-b pb-9 ">
        <div>
          <h2 className="text-font-primary-90 text-fs-20 font-bold mb-8">
            {event.title}
          </h2>
          <StarRating rate={event.rating} />
          <div className="text-fs-14 flex flex-col gap-y-2 mt-4">
            <p>{`${event.startDate} ~ ${event.endDate}`}</p>
            <p>{event.venue.venueName}</p>
            <div className="flex gap-x-5">
              <p>{`약 ${event.eventDetail?.runtime}`}</p>
              <p>{`만 ${event.eventDetail?.targetAudience}`}</p>
            </div>
          </div>

          <div className="mt-8 border border-user-theme-100 rounded text-center text-fs-14 w-16 flex items-center justify-center h-8 text-user-theme-100">
            {event.eventDetail?.status}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg w-[150px] h-[200px] absolute right-10 top-20">
          <Image
            src={"/images/poster.jpeg"}
            alt="event-poster"
            width={150}
            height={200}
          />
        </div>
      </div>
      <div className="pt-9">
        <ul>
          <li>{event.eventDetail?.price}</li>
        </ul>
      </div>
    </div>
  );
}

export default EventInfoCard;
