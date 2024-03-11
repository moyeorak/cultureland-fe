import { Location } from "@/types/Locations.type";
import { useEffect, useMemo } from "react";
import { useMap } from "react-kakao-maps-sdk";

interface useReSettingMapBoundsProps {
  locations: Array<Location>;
}

const ReSettingMapBounds = ({ locations }: useReSettingMapBoundsProps) => {
  const points = locations.map((location) => location.latlng);
  const map = useMap();
  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();

    points.forEach((point) => {
      bounds.extend(new kakao.maps.LatLng(point.lat, point.lng));
    });
    return bounds;
  }, [points]);

  useEffect(() => {
    map.setBounds(bounds);
  }, []); // 마운트시 실행되도록 하고 이동 버튼도 일단은 생성

  return (
    <p>
      <button onClick={() => map.setBounds(bounds)}>눌러봐유~</button>
    </p>
  );
};

export default ReSettingMapBounds;
