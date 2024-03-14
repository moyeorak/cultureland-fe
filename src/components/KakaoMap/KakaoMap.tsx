"use client";

import useQueryGetEventsOnMap from "@/react-query/reviews/useQueryGetEventsOnMap";
import { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";

function KakaoMap() {
  const [center, setCenter] = useState({ lat: 37.568683, lng: 126.980279 });
  const { isLoading, data } = useQueryGetEventsOnMap(center, "연극");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div className="w-[50%] h-[550px] overflow-hidden ">
      <Map
        center={center}
        level={3}
        style={{ width: "100%", height: "95%" }}
        onIdle={(map) => {
          setCenter({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          });
        }}
      />
    </div>
  );
}

export default KakaoMap;
