"use client";

import api from "@/api/index.api";
import Button from "@/components/Button";
import AuthInitialized from "@/contexts/auth.context/Authenticated";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import { useProfile } from "@/zustand";
import { useRouter } from "next/navigation";
import SearchInput from "../../../../../../components/SearchInput";
import HeaderLogo from "./_components/HeaderLogo";
import HeaderNavItem from "./_components/HeaderNavItem";
import SignInModal from "./_components/Modals/SignInModal";
import TermsAgreementModal from "./_components/Modals/TermsAgreementModal";

function Header() {
  const modal = useModal();
  const auth = useAuth();
  const router = useRouter();
  const userId = useProfile((state) => state.id);

  const handleClickSignOut = async () => {
    await api.users.signOut();

    auth.signOut();

    router.push("/");
  };

  return (
    <header className="flex items-center gap-10 min-h-16 border-b bg-white text-nowrap transition-all">
      <div className="max-w-[960px] w-full flex items-center mx-auto gap-10 px-10">
        <HeaderLogo />

        <nav className="flex gap-4 items-center">
          <HeaderNavItem href="/events">모든 이벤트</HeaderNavItem>
          <HeaderNavItem href="/map">지도로 찾아보기</HeaderNavItem>
        </nav>

        {/* HeaderMenu */}
        <div className="ml-auto flex gap-10 items-center">
          <AuthInitialized>
            <SearchInput
              clearAfterSearch
              placeholder="이벤트를 검색해 보세요"
            />

            {auth.isLoggedIn ? (
              <div className="grid grid-cols-2 gap-x-2 items-center">
                <HeaderNavItem href={`/accounts/users/${userId}`}>
                  마이페이지
                </HeaderNavItem>
                <Button
                  size="sm"
                  color="secondary"
                  outline
                  onClick={handleClickSignOut}
                >
                  로그아웃
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-2 items-center">
                <Button
                  size="sm"
                  outline
                  onClick={() => modal.open(<SignInModal />)}
                >
                  로그인
                </Button>
                <Button
                  size="sm"
                  onClick={() => modal.open(<TermsAgreementModal />)}
                >
                  회원가입
                </Button>
              </div>
            )}
          </AuthInitialized>
        </div>
      </div>
    </header>
  );
}

export default Header;
