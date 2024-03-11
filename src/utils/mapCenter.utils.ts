interface mapCenter {
  title: string;
  latlng: { lat: number; lng: number };
}

export function mapCenter(locations: Array<mapCenter>) {
  const latArray = locations.map((location) => location.latlng.lat);
  const lngArray = locations.map((locations) => locations.latlng.lng);

  const avgLat = latArray.reduce((sum, lat) => sum + lat, 0);
  const avgLng = lngArray.reduce((sum, lng) => sum + lng, 0);

  const center = {
    lat: Number(avgLat.toFixed(6)),
    lng: Number(avgLng.toFixed(6)),
  };

  console.log(center);

  return center;
}
