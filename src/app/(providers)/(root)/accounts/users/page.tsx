"use client";

import Page from "@/components/Page";
import { useTabStore } from "@/zustand";
import ActiveSection from "./[userId]/_components/ActiveSection";
import FollowSection from "./[userId]/_components/FollowSection";
import FollowTab from "./[userId]/_components/FollowTab";
import InfoTabs from "./[userId]/_components/InfoTabs";
import ProfileSection from "./[userId]/_components/ProfileSection";

function UserPage(props: { params: { userId: number } }) {
  const userId = props.params.userId;
  // const user = await api.users.getUser(userId);
  const { showFollows } = useTabStore();

  return (
    <Page>
      {showFollows ? <FollowTab /> : <InfoTabs />}
      <div className="flex space-x-4 m-4">
        <ProfileSection isLoggedUser={true} />
        {showFollows ? <FollowSection /> : <ActiveSection />}
      </div>
    </Page>
  );
}

export default UserPage;
