import Image from "next/image";

function EventDetailCard() {
  const date = "2024.03.22";
  const location = "군포문화예술";
  const age = 12;
  const time = 100;
  return (
    <div>
      <div className="flex border-b">
        <div>
          <h2 className="text-font-primary-90 text-fs-20 font-bold">
            2024 최현우
          </h2>
          <div>별점</div>
          <p>{`${date} ~ ${date}`}</p>
          <p>{location}</p>
          <div>
            <p>{`약 ${time}분`}</p>
            <p>{`만 ${age}세 이상`}</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg w-[150px] h-[200px]">
          <Image
            src={"/images/poster.jpeg"}
            alt="event-poster"
            width={150}
            height={200}
          />
        </div>
      </div>
      <div>
        <ul>
          <li>{}</li>
        </ul>
      </div>
    </div>
  );
}

export default EventDetailCard;
