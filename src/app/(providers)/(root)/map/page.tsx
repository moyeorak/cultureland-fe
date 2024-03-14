import Heading from "@/components/Heading/Heading";
import KakaoMap from "@/components/KakaoMap";
import Page from "@/components/Page";

function MapPage() {
  return (
    <Page>
      <Heading label="지도로 찾아보기" />
      {/* <CategoryList categories={dummyCategory} /> */}
      <KakaoMap />
    </Page>
  );
}

export default MapPage;
