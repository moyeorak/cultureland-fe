function EventInfoCard() {
  return (
    <div className=" shadow-primary rounded-lg py-11 px-10 flex-grow relative">
      {/* <div className="flex border-b pb-9 ">
        <div>
          <h2 className="text-font-primary-90 text-fs-20 font-bold mb-8">
            {event.title}
          </h2>
          <StarRating rate={event.rating} size="" />
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
      </div> */}
    </div>
  );
}

export default EventInfoCard;
