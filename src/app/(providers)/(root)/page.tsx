import api from "@/api/index.api";
import EventList from "@/components/EventList";
import Page from "@/components/Page";
import BestEvents from "./_components/BestEvents";
import BestReviews from "./_components/BestRevies/BestReviews";
import InterestingEvents from "./_components/InterestingEvents";

async function HomePage() {
  const { events: eventsData } = await api.events.getEvents({
    page: 1,
  });

  return (
    <Page>
      <BestEvents events={eventsData} />
      <InterestingEvents events={eventsData} />

      <div>
        회원 - 인기 이벤트 정보, 카테고리별 이벤트 리스트, 지역별 이벤트 리스트,
        + 팔로우한 유저의 관심 이벤트 목록 (최대 10개 / 정렬 방식은
        정해지는대로), + 인기 리뷰 목록 (10개)
      </div>
      <div>
        비회원 - 인기 이벤트 정보, 카테고리별 이벤트 리스트, 지역별 이벤트
        리스트, + 인기 리뷰 목록 (10개)
      </div>

      <div className="px-10">
        {/* FIXME: 아래 컴포넌트 아직 미완의 컴포넌트인 것 같아요.. 타입 에러나서
        빌드 실패시킴.. (young) */}
        {/* <SelectOption type="review" /> */}
        <div className="w-20 bg-red-50"></div>
      </div>

      <EventList events={eventsData} />
      <BestReviews />
    </Page>
  );
}

export const revalidate = 5;

export default HomePage;
