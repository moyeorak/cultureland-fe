import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";

function MapPage() {
  return (
    <Page>
      <Heading label='MapPage' />
      현재 위치를 기준으로 주변 이벤트 정보 (10개)
    </Page>
  );
}

export default MapPage;
