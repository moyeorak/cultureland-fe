function MapCard() {
  const event: any = {
    //dummy
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

  return (
    <div className="shadow-primary w-[400px] h-80 px-5 py-6 flex flex-col gap-y-8 rounded-lg overflow-hidden">
      <div className="bg-neutral-30 w-[360px h-[195px] rounded-lg overflow-y-hidden">
        kakao Map
      </div>
      <div className="text-center text-fs-12">
        <p>{`장소 : ${0}`}</p>
        <p>{`주소 : ${0}`}</p>
      </div>
    </div>
  );
}

export default MapCard;
