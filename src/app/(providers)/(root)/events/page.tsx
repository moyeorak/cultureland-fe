import api from "@/api/index.api";
import CategoryList from "@/components/CategoryList";
import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import { Category } from "@/types/Category.type";

const dummyData: Array<any> = [
  {
    id: 1,
    eventId: 1,
    partnerId: 1,
    title: "뚱땅뚱땅 종환이의 즐거운 하루!",
    poster:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside",
    startDate: "2024-03-05",
    endDate: "2024-03-05",
    venue: {
      venueName: "공연장",
      address: "공연장 주소",
      latitude: 127,
      longitude: 34,
    },
    category: {
      id: 1,
      name: "콘서트",
    },
    rating: 3,
  },
  {
    id: 2,
    eventId: 2,
    partnerId: 2,
    title: "촐랑촐랑 유지의 재미난 하루!",
    poster:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside",
    startDate: "2024-03-05",
    endDate: "2024-03-17",
    venue: {
      venueName: "공연장",
      address: "공연장 주소",
      latitude: 127,
      longitude: 34,
    },
    category: {
      id: 2,
      name: "뮤지컬",
    },
    rating: 5,
  },
  {
    id: 3,
    eventId: 3,
    partnerId: 3,
    title: "준영이의 상상 가득한 하루!",
    poster:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside",
    startDate: "2024-03-05",
    endDate: "2024-03-07",
    venue: {
      venueName: "공연장",
      address: "공연장 주소",
      latitude: 127,
      longitude: 34,
    },
    category: {
      id: 3,
      name: "페스티벌",
    },
    rating: 4,
  },
  {
    id: 4,
    eventId: 4,
    partnerId: 4,
    title: "생생한 현아의 두근대는 하루!",
    poster:
      "https://dnvefa72aowie.cloudfront.net/origin/article/202301/a6d1b4be4f3df32bac3c14e39a4e0e59e92866bb5e5b044e24061a4943c6fa4d.webp?q=95&s=1440x1440&t=inside",
    startDate: "2024-03-05",
    endDate: "2024-03-05",
    venue: {
      venueName: "공연장",
      address: "공연장 주소",
      latitude: 127,
      longitude: 34,
    },
    category: {
      id: 1,
      name: "콘서트",
    },
    rating: 2,
  },
]; // 테스트를 위한 더미 데이터입니다.

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
];

async function EventsPage() {
  const events = await api.events.getAllEvents(1);

  return (
    <Page>
      <Heading label="이벤트 목록" />
      {/* 카테고리 영역입니다. */}
      <CategoryList categories={dummyCategory} />
      {/* <EventList events={dummyData} /> */}
      <Pagination events={events} eventsPerPage={12} />
    </Page>
  );
}

export default EventsPage;
