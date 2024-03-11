import Heading from "@/components/Heading/Heading";
import KakaoMap from "@/components/KakaoMap";

import Page from "@/components/Page";

const dummyLocations = [
  { title: "카카오", latlng: { lat: 33.450705, lng: 126.570677 } },
  { title: "생태연못", latlng: { lat: 33.450936, lng: 126.569477 } },
  { title: "텃밭", latlng: { lat: 33.450879, lng: 126.56994 } },
  { title: "근린공원", latlng: { lat: 33.451393, lng: 126.570738 } },
  // { title: "포항공대", latlng: { lat: 36.0139, lng: 129.3232 } },
  // {
  //   title: "가온로 205",
  //   latlng: { lat: 37.721927180771, lng: 126.75378021529 },
  // },
];

function MapPage() {
  return (
    <Page>
      <Heading label="MapPage" />
      <KakaoMap locations={dummyLocations} />
      {/* <Map location={{ lat: 33.450705, lng: 126.570677 }} /> */}
    </Page>
  );
}

export default MapPage;
