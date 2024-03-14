import Page from "@/components/Page";
import BestEvents from "./_components/BestEvents";
import BestReviews from "./_components/BestReviews/BestReviews";
import HomeSection from "./_components/HomeSection";
import RecentEvents from "./_components/RecentEvents";

function HomePage() {
  return (
    <Page
      title="대한민국 모든 문화 이벤트가 이곳에"
      description="컬처랜드에서는 다양한 문화 이벤트와 관람 후기들을 모아 볼 수 있어요"
    >
      <div className="grid grid-cols-1 pt-10 gap-y-12 md:gap-y-20">
        <HomeSection
          title="지금 가장 핫한 이벤트들"
          description="컬처랜드에서 가장 많은 관심을 받은 이벤트들을 만나 보세요"
        >
          <BestEvents />
        </HomeSection>

        <HomeSection
          title="이런 이벤트들은 어떠세요?"
          description="최근에 등록된 신상 이벤트들만 모아 봤어요"
        >
          <RecentEvents />
        </HomeSection>

        <HomeSection
          title="컬처랜드의 베스트 관람 후기들"
          description="사람들이 많이 공감한 관람 후기는 어떤 내용일까요?"
        >
          <BestReviews />
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
