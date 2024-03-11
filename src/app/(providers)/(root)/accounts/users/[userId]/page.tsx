"use client";

import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useTabStore } from "@/zustand";
import ActiveSection from "./_components/ActiveSection";
import FollowSection from "./_components/FollowSection";
import FollowTab from "./_components/FollowTab";
import InfoTabs from "./_components/InfoTabs";
import ProfileSection from "./_components/ProfileSection";

function UserPage(props: { params: { userId: number } }) {
  const userId = props.params.userId;
  const { isLoggedIn } = useAuth();

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
