"use client";

import { Event } from "@/types/Event.type";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface EventsSlideProps {
  events: Required<Event>[];
}

function EventsSlide({ events }: EventsSlideProps) {
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
    <Swiper
      modules={[Autoplay]}
      ref={swiperRef}
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{ delay: 2000 }}
      className="-mt-2 rounded"
    >
      {events.map((event) => (
        <SwiperSlide key={event.id} className="pt-2">
          <Link
            href={`/events/${event.id}`}
            className="relative aspect-[3/4] block hover:-translate-y-2 transition"
          >
            <Image
              fill
              src={event.poster}
              alt={event.title}
              className="rounded-lg border object-cover"
              sizes="100%"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default EventsSlide;
