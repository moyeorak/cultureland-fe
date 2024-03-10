import Page from "@/components/Page";
import Pagination from "@/components/Pagination";
import { Event } from "@/types/Event.type";
import SearchBar from "../_components/Header/_components/SearchBar";

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

function SearchPage({
  searchParams: { keyword },
}: {
  searchParams: { keyword: string };
}) {
  return (
    <Page>
      <div className='text-center mb-[37px]'>
        <SearchBar placeholder={keyword} />
        <h2 className='mt-6 mb-2'>{`'${keyword}'에 대한 검색 결과`}</h2>
        <span>총 {dummyData.length}개의 결과를 발견하였습니다.</span>
      </div>

      <Pagination events={dummyData} eventsPerPage={12} />
    </Page>
  );
}

export default SearchPage;
