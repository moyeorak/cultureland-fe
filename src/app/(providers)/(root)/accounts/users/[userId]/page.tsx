import api from "@/api/index.api";
import Heading from "@/components/Heading/Heading";
import Page from "@/components/Page";
import LikedReviews from "./_components/ActiveSection/LikedReviews";
import WrittenReviews from "./_components/ActiveSection/WrittenReviews";
import ProfileSection from "./_components/ProfileSection";

async function UserPage(props: { params: { userId: number } }) {
  const userId = props.params.userId;
  const user = await api.users.getUser(userId);

  return (
    <Page>
      <Heading label="UserPage" />
      <div className="flex">
        <ProfileSection isLoggedUser={user.isLoggendUser} />
        <div>
          <h2>작성한 리뷰</h2>
          <WrittenReviews />
          <h2>좋아요한 리뷰</h2>
          <LikedReviews />
        </div>
      </div>

      <div>
        본인인 경우 - 팔로잉 수, 팔로워 수, 팔로윙 리스트, 팔로워 리스트, 프로필
        이미지, 닉네임, 관심 이벤트 목록, 내가 쓴 리뷰, 내가 관람한 목록, 내가
        좋아요 누른 리뷰 목록, + 이메일 (프로필 수정을 위해)
      </div>

      <div>
        타인인 경우 - 팔로잉 수, 팔로워 수, 팔로윙 리스트, 팔로워 리스트, 프로필
        이미지, 닉네임, 해당 유저의 관심 이벤트 목록, 해당 유저가 쓴 리뷰, 해당
        유저가 관람한 목록,
      </div>
    </Page>
  );
}

export default UserPage;
