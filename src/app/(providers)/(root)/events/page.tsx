import CategoryList from "@/components/CategoryList";
import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import { Category } from "@/types/Category.type";
import { Event } from "@/types/Event.type";

const dummyData: Array<Event> = [
  {
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
  {
    eventId: 5,
    partnerId: 5,
    title: "햅삐햅삐 휘성이의 하루!",
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
    rating: 6,
  },
  {
    eventId: 6,
    partnerId: 6,
    title: "귀욤귀욤 멍멍이 쫄리의 하루!",
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
    rating: 1,
  },
  {
    eventId: 7,
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
    eventId: 8,
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
    eventId: 9,
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
    eventId: 10,
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
  {
    eventId: 11,
    partnerId: 5,
    title: "햅삐햅삐 휘성이의 하루!",
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
    rating: 6,
  },
  {
    eventId: 12,
    partnerId: 6,
    title: "귀욤귀욤 멍멍이 쫄리의 하루!",
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
    rating: 1,
  },
  {
    eventId: 13,
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
    eventId: 14,
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
    eventId: 15,
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
    eventId: 16,
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
    id: 1,
    name: "전체",
  },
  {
    id: 2,
    name: "연극",
  },
  {
    id: 3,
    name: "무용",
  },
  {
    id: 4,
    name: "대중무용",
  },
  {
    id: 5,
    name: "클래식",
  },
  {
    id: 6,
    name: "국악",
  },
  {
    id: 7,
    name: "치킨",
  },
  {
    id: 8,
    name: "피자",
  },
  {
    id: 9,
    name: "햄버거",
  },
  {
    id: 10,
    name: "이종환",
  },
];

async function EventsPage() {
  // const events = await api.events.getAllEvents();

  return (
    <Page>
      <Heading label="이벤트 목록" />
      {/* 카테고리 영역입니다. */}
      <CategoryList categories={dummyCategory} />
      {/* <EventList events={dummyData} /> */}
      <Pagination events={dummyData} eventsPerPage={12} />
    </Page>
  );
}

export default EventsPage;
