import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";
import ReviewForm from "./_components/ReviewForm";

function EventDetailPage() {
  return (
    <Page>
      <Heading label="EventDetailPage" />
      타이틀, 공연 기간, 공연 장소, 출연진, 공연 런타임, 관람 연령, 티켓 가격,
      장르, 공연 상태, 썸네일 포스터, 지도 (주소 텍스트), 상세 이미지들, + 리뷰
      전체 정보
      <ReviewForm />
    </Page>
  );
}

export default EventDetailPage;
