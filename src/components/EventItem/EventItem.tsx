import { Event } from "@/types/Event.type";
import Image from "next/image";

interface EventItemProps {
  event: Event;
}

function EventItem({ event }: EventItemProps) {
  return (
    <div className='border border-black rounded-lg overflow-hidden w-[220px] h-[278px]'>
      <div className='w-48 h-[309px] m-auto mt-3'>
        <div className='relative w-full border h-[158px] rounded-lg overflow-hidden'>
          <Image
            alt={event.title}
            src={event.poster}
            fill
            className='object-cover group-hover:scale-105 transition-transform'
            unoptimized
          />
        </div>
        <div className='mt-3 flex flex-col'>
          <h4 className='text-base text-nowrap overflow-hidden'>
            {event.title}
          </h4>
          <span className='text-xs'>장소: {event.venue.venueName}</span>
          <span className='text-xs'>
            기간: {event.startDate} ~ {event.endDate}
          </span>
        </div>
        {/* <div className='mt-3 flex justify-end'>
          <span className='text-xs'>좋아요 / 싫어요</span>
        </div> */}
      </div>
    </div>
  );
}

export default EventItem;
