import Page from "@/components/Page";
import BestEvents from "./_components/BestEvents";
import HomeSection from "./_components/HomeSection";

function HomePage() {
  return (
    <Page title="대한민국 모든 문화 이벤트가 이곳에">
      <div className="grid grid-cols-1 pt-10 gap-y-20">
        <HomeSection title="지금 가장 핫한 이벤트들">
          <BestEvents />
        </HomeSection>
        <HomeSection title="지금 가장 핫한 이벤트들">
          <BestEvents />
        </HomeSection>
        <HomeSection title="지금 가장 핫한 이벤트들">
          <BestEvents />
        </HomeSection>
      </div>

      {/* <EventsList events={eventsData} /> */}
      {/* <BestReviews /> */}
    </Page>
  );
}

export const revalidate = 60;

export default HomePage;

// <div>
// 회원 - 인기 이벤트 정보, 카테고리별 이벤트 리스트, 지역별 이벤트 리스트,
// + 팔로우한 유저의 관심 이벤트 목록 (최대 10개 / 정렬 방식은
// 정해지는대로), + 인기 리뷰 목록 (10개)
// </div>
// <div>
// 비회원 - 인기 이벤트 정보, 카테고리별 이벤트 리스트, 지역별 이벤트
// 리스트, + 인기 리뷰 목록 (10개)
// </div>
