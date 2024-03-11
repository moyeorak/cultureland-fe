"use client";

import useKakaoLoader from "@/hooks/kakaoMap/useKakaoLoader";
import { Location } from "@/types/Locations.type";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import ReSettingMapBounds from "./ReSettingMapBounds";

interface KakaoMapProps {
  locations: Array<Location>;
}

function KakaoMap({ locations }: KakaoMapProps) {
  useKakaoLoader();

  // 지도 위 중앙 위치
  const [center, setCenter] = useState<{
    level: number;
    position: { lat: number; lng: number };
  }>();

  // 현재 위치
  const [userLocation, setUserLocation] = useState<{
    center: { lat: number; lng: number };
    errMsg: string | null;
    isLoading: boolean;
  }>({
    center: {
      lat: 37.721927180771,
      lng: 126.75378021529,
    },
    errMsg: null,
    isLoading: true,
  });

  // 사용자 현재 위치
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setUserLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setUserLocation((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없어요...",
        isLoading: false,
      }));
    }
  }, []);

  console.log(
    `[현재 위치로 이동했을 때]\n현재 위치 위도: ${userLocation.center.lat}, 경도: ${userLocation.center.lng}`
  );

  if (center) {
    console.log(
      `[이동했을 때]\n지도 레벨은: ${
        center.level
      }\n중심 좌표는 위도: ${center.position.lat.toFixed(
        6
      )}, 경도: ${center.position.lng.toFixed(6)}`
    );
  }

  return (
    <div className="w-[50%] h-[550px] overflow-hidden bg-user-theme-40">
      <Map
        center={userLocation.center}
        level={3}
        style={{ width: "100%", height: "95%" }}
        onCenterChanged={(map) => {
          const level = map.getLevel();
          const latlng = map.getCenter();

          setCenter({
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

        {!userLocation.isLoading && (
          <MapMarker position={userLocation.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {userLocation.errMsg ? userLocation.errMsg : "여기가 현재 위치"}
            </div>
          </MapMarker>
        )}

        <ReSettingMapBounds locations={locations} />
      </Map>
    </div>
  );
}

export default KakaoMap;
