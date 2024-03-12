"use client";

import { Location } from "@/types/Locations.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  locations: Array<Location>;
}

function KakaoMap({ locations }: KakaoMapProps) {
  const [{ lat, lng }, setLatLng] = useState({ lat: 33.5563, lng: 126.79581 });
  const { isLoading } = useQuery({
    queryKey: ["events", { map: true, center: { lat, lng } }],
  });

  // // 현재 위치
  // const [userLocation, setUserLocation] = useState<{
  //   center: { lat: number; lng: number };
  //   errMsg: string | null;
  //   isLoading: boolean;
  // }>({
  //   center: {
  //     lat: 37.721927180771,
  //     lng: 126.75378021529,
  //   },
  //   errMsg: null,
  //   isLoading: true,
  // });

  // 사용자 현재 위치
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setUserLocation((prev) => ({
  //           ...prev,
  //           center: {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           },
  //           isLoading: false,
  //         }));
  //       },
  //       (err) => {
  //         setUserLocation((prev) => ({
  //           ...prev,
  //           errMsg: err.message,
  //           isLoading: false,
  //         }));
  //       }
  //     );
  //   } else {
  //     setUserLocation((prev) => ({
  //       ...prev,
  //       errMsg: "geolocation을 사용할 수 없어요...",
  //       isLoading: false,
  //     }));
  //   }
  // }, []);

  // if (center) {
  //   console.log(
  //     `[이동했을 때]\n지도 레벨은: ${
  //       center.level
  //     }\n중심 좌표는 위도: ${center.position.lat.toFixed(
  //       6
  //     )}, 경도: ${center.position.lng.toFixed(6)}`
  //   );
  // }

  return (
    <div className="w-[50%] h-[550px] overflow-hidden ">
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        level={3}
        style={{ width: "100%", height: "95%" }}
        onIdle={(map) => {
          setLatLng({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
          });
          // centerRef.current = {
          //   lat: map.getCenter().getLat(),
          //   lng: map.getCenter().getLng(),
          // };
        }}
      >
        {/* {locations.map((location) => (
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
        )} */}

        {/* <ReSettingMapBounds locations={locations} /> */}
      </Map>
    </div>
  );
}

export default KakaoMap;
