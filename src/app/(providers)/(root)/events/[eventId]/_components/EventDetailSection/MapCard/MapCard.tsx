function MapCard() {
  return (
    <div className="shadow-lg w-[400px] h-80 px-5 py-6 flex flex-col gap-y-6 rounded-lg overflow-hidden">
      <div className="bg-neutral-30 w-[360px h-[195px] rounded-lg overflow-y-hidden">
        kakao Map
      </div>
      <div className="text-center">
        <p>{`장소 : `}</p>
        <p>{`주소 : `}</p>
        <p>{`대표번호 : `}</p>
      </div>
    </div>
  );
}

export default MapCard;
