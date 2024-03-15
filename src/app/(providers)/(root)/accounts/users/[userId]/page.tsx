"use client";

import { GetUserData } from "@/api/accounts/users/users.data";
import api from "@/api/index.api";
import Page from "@/components/Page";
import { useTabStore } from "@/zustand";
import { useEffect, useState } from "react";
import ActiveSection from "./_components/ActiveSection";
import FollowSection from "./_components/FollowSection";
import FollowTab from "./_components/FollowTab";
import InfoTabs from "./_components/InfoTabs";
import ProfileSection from "./_components/ProfileSection";

function UserPage(props: { params: { userId: number } }) {
  const userId = props.params.userId;
  const { showFollows } = useTabStore();
  const [user, setUser] = useState<GetUserData>();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await api.users.getUser(userId);
      setUser(userInfo);
    };
    fetchUser();
  }, [userId]);

  if (!user) return;
  return (
    <Page>
      {showFollows ? <FollowTab follows={user._count} /> : <InfoTabs />}
      <div className="flex space-x-4 m-4">
        <ProfileSection user={user} />
        {showFollows ? <FollowSection userId={user.id} /> : <ActiveSection />}
      </div>
    </Page>
  );
}

export default UserPage;
