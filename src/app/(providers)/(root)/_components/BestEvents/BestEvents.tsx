"use client";

import StarRating from "@/components/ReviewCard/_components/StarRating";
import { Event } from "@/types/Event.type";
import { formatDate } from "@/utils/formatDate.utils";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type bestEvents = Pick<
  Event,
  | "id"
  | "title"
  | "poster"
  | "category"
  | "startDate"
  | "endDate"
  | "venue"
  | "avgRating"
>;

interface bestEventsProps {
  events: bestEvents[];
}

function BestEvents({ events }: bestEventsProps) {
  return (
    <section className="mb-[70px]">
      <div className="shadow-lg rounded-lg w-full h-[360px] p-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 3000 }}
        >
          {events.map((event) => (
            <Link href={`/event/${event.id}`} key={event.id}>
              <SwiperSlide>
                <div className="flex">
                  <div className="relative w-60 h-80">
                    <Image
                      src={event.poster}
                      alt={event.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1 pt-[36px] pl-12">
                    <span className="text-xs mb-1">{event.category.value}</span>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <StarRating rate={event.avgRating} />
                    <span className="block mt-4 mb-2">{`일시: ${formatDate(
                      event.startDate
                    )}~${formatDate(event.endDate)}`}</span>
                    <span className="block mb-2">{event.venue.name}</span>
                    <span className="block"></span>
                  </div>
                </div>
              </SwiperSlide>
            </Link>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BestEvents;
