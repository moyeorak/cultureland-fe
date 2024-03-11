"use client";

import useKakaoLoader from "@/hooks/kakaoMap/useKakaoLoader";
import { Location } from "@/types/Locations.type";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ReSettingMapBounds from "./ReSettingMapBounds";

interface KakaoMapProps {
  locations: Array<Location>;
}

function KakaoMap({ locations }: KakaoMapProps) {
  useKakaoLoader();

  const [data, setData] = useState<{
    level: number;
    position: { lat: number; lng: number };
  }>();

  return (
    <div className="w-[100%] h-[450px] overflow-hidden bg-user-theme-40">
      <Map
        id="map"
        center={{ lat: 36.0139, lng: 129.3232 }}
        level={3}
        style={{ width: "100%", height: "90%" }}
        onCenterChanged={(map) => {
          const level = map.getLevel();
          const latlng = map.getCenter();

          setData({
            level,
            position: { lat: latlng.getLat(), lng: latlng.getLng() },
          });
        }}
        className="border-4 border-user-theme-30"
      >
        {locations.map((location) => (
          <MapMarker
            key={`${location.title}-${location.latlng}`}
            position={location.latlng}
          />
        ))}

        <ReSettingMapBounds locations={locations} />
      </Map>
      <p className="bg-user-theme-50 flex gap-5">
        {data && (
          <>
            <p>{`지도 레벨은: ${data.level}`}</p>
            <p>{`중심 좌표는 위도: ${data.position.lat}, 경도: ${data.position.lng}`}</p>
          </>
        )}
      </p>
    </div>
  );
}

export default KakaoMap;
