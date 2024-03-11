import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";

function HomePage() {
  return (
    <Page>
      <Heading label="HomePage" />
      <div>
        회원 - 인기 이벤트 정보, 카테고리별 이벤트 리스트, 지역별 이벤트 리스트,
        + 팔로우한 유저의 관심 이벤트 목록 (최대 10개 / 정렬 방식은
        정해지는대로), + 인기 리뷰 목록 (10개)
      </div>
      <div>
        비회원 - 인기 이벤트 정보, 카테고리별 이벤트 리스트, 지역별 이벤트
        리스트, + 인기 리뷰 목록 (10개)
      </div>
      <h2>좋아요</h2>
    </Page>
  );
}

export const revalidate = 5;

export default HomePage;
