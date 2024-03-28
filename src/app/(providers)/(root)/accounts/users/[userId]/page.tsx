"use client";

import Page from "@/components/Page";
import useQueryGetUser from "@/react-query/auth/users/useQueryGetUsers";
import { useTabStore } from "@/zustand";
import ActiveSection from "./_components/ActiveSection";
import FollowSection from "./_components/FollowSection";
import FollowTab from "./_components/FollowTab";
import InfoTabs from "./_components/InfoTabs";
import ProfileSection from "./_components/ProfileSection";

function UserPage(props: { params: { userId: number } }) {
  const userId = props.params.userId;
  const { showFollows } = useTabStore();
  const { data: user } = useQueryGetUser(userId);

  if (!user) return;

  return (
    <Page>
      {showFollows ? (
        <FollowTab follows={user._count} />
      ) : (
        <InfoTabs nickname={user.userProfile.nickname} />
      )}
      <div className="flex space-x-4 m-4">
        <ProfileSection user={user} />
        {showFollows ? <FollowSection userId={user.id} /> : <ActiveSection />}
      </div>
    </Page>
  );
}

export default UserPage;
