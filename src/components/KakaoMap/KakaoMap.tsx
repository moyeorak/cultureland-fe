"use client";

import useQueryGetEventsOnMap from "@/react-query/reviews/useQueryGetEventsOnMap";
import { Event } from "@/types/Event.type";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import MapItemList from "../MapItemList";

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
    <div className="flex w-svw">
      <div className="w-[50%] h-[550px] overflow-hidden border-blue-700">
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
        >
          {data?.map((event) => (
            <MapMarker
              key={event.id}
              position={{
                lat: event.venue?.latitude as number,
                lng: event.venue?.longitude as number,
              }}
            />
          ))}
        </Map>
      </div>
      <div className="w-[50%] h-[550px]">
        <MapItemList events={data as Event[]} />
      </div>
    </div>
  );
}

export default KakaoMap;
