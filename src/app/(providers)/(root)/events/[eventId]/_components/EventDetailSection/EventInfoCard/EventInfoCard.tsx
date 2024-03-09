import Image from "next/image";

function EventInfoCard() {
  const date = "2024.03.22";
  const location = "군포문화예술";
  const age = 12;
  const time = 100;
  const state = "진행중";
  return (
    <div className=" shadow-primary rounded-lg py-11 px-10 flex-grow relative">
      <div className="flex border-b pb-9 ">
        <div>
          <h2 className="text-font-primary-90 text-fs-20 font-bold mb-8">
            2024 최현우
          </h2>
          <div>별점</div>
          <div className="text-fs-14 flex flex-col gap-y-2 mt-4">
            <p>{`${date} ~ ${date}`}</p>
            <p>{location}</p>
            <div className="flex gap-x-5">
              <p>{`약 ${time}분`}</p>
              <p>{`만 ${age}세 이상`}</p>
            </div>
          </div>

          <div className="mt-8 border border-user-theme-100 rounded text-center text-fs-14 w-16 flex items-center justify-center h-8 text-user-theme-100">
            {state}
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
          <li>{99000}</li>
        </ul>
      </div>
    </div>
  );
}

export default EventInfoCard;
