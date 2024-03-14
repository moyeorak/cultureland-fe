"use client";

import useResponsive from "@/hooks/useResponsive";
import { Event } from "@/types/Event.type";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface EventsSlideProps {
  events: Required<Event>[];
}

function EventsSlide({ events }: EventsSlideProps) {
  const { isDesktop } = useResponsive();
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={isDesktop ? 20 : 10}
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
              className="rounded-lg object-cover"
              sizes="100%"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default EventsSlide;
