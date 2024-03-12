import api from "@/api/index.api";
import EventList from "@/components/EventList";
import Page from "@/components/Page";

import SelectOption from "@/components/SelectOption";

import InterestingEvents from "./_components/InterestingEvents";

import { Category } from "@/types/Category.type";
import BestEvents from "./_components/BestEvents";

const dummyCategory: Array<Category> = [
  {
    code: 1,
    value: "전체",
  },
  {
    code: 2,
    value: "연극",
  },
  {
    code: 3,
    value: "무용",
  },
  {
    code: 4,
    value: "대중무용",
  },
  {
    code: 5,
    value: "클래식",
  },
  {
    code: 6,
    value: "국악",
  },
  {
    code: 7,
    value: "치킨",
  },
  {
    code: 8,
    value: "피자",
  },
  {
    code: 9,
    value: "햄버거",
  },
  {
    code: 10,
    value: "이종환",
  },
]; // 테스트를 위한 더미 데이터입니다.

async function HomePage() {
  const { eventsData, totalEventsCnt } = await api.events.getAllEvents(1);

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
        <SelectOption type="review" />
        <div className="w-20 bg-red-50"></div>
      </div>

      <EventList events={eventsData} />
    </Page>
  );
}

export const revalidate = 5;

export default HomePage;
