"use client";

import Heading from "@/components/Heading/Heading";
import { Event } from "@/types/Event.type";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { NextArrow, PrevArrow } from "./_components/Icon";

type InterestingEvent = Pick<Event, "id" | "poster" | "title">;

interface InterestingEventsProps {
  events: InterestingEvent[];
}

function InterestingEvents({ events }: InterestingEventsProps) {
  const swiperRef = useRef<SwiperRef>(null);

  const handleClickPrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };
  const handleClickNext = () => {
    if (!swiperRef.current) return;

    swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="mb-20">
      <Heading label="관심목록" position="start" />

      <div className="px-[44px] py-2">
        <div className="flex items-center gap-x-5">
          <button onClick={handleClickPrev}>
            <PrevArrow />
          </button>

          <Swiper
            modules={[Autoplay]}
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => {}}
            className="w-full rounded-lg"
            autoplay={{ delay: 1000 }}
          >
            {events.map((event) => (
              <SwiperSlide
                key={event.id}
                className="relative aspect-[3/4] w-full"
              >
                <Image
                  fill
                  src={event.poster}
                  alt={event.title}
                  className="rounded-lg"
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button onClick={handleClickNext}>
            <NextArrow />
          </button>
        </div>
      </div>
    </section>
  );
}

export default InterestingEvents;

const mockEvents: InterestingEvent[] = [
  {
    id: 1,
    title: "A",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236577_240304_151238.png",
  },
  {
    id: 2,
    title: "B",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236574_240304_151046.png",
  },
  {
    id: 3,
    title: "C",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236560_240304_144219.gif",
  },
  {
    id: 4,
    title: "D",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236577_240304_151238.png",
  },
  {
    id: 5,
    title: "E",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236574_240304_151046.png",
  },
  {
    id: 6,
    title: "F",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236560_240304_144219.gif",
  },
  {
    id: 7,
    title: "G",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236577_240304_151238.png",
  },
  {
    id: 8,
    title: "H",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236574_240304_151046.png",
  },
  {
    id: 9,
    title: "I",
    poster:
      "http://www.kopis.or.kr/upload/pfmPoster/PF_PF236560_240304_144219.gif",
  },
];
