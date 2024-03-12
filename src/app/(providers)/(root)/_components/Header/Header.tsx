"use client";

import api from "@/api/index.api";
import Authenticated from "@/contexts/auth.context/Authenticated";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignInModal from "./_components/Modals/SignInModal";
import TermsAgreementModal from "./_components/Modals/TermsAgreementModal";
import SearchBar from "./_components/SearchBar";

function Header() {
  const modal = useModal();
  const auth = useAuth();
  const router = useRouter();

  const handleClickSignOut = async () => {
    await api.users.signOut();
    await api.partners.signOut();

    auth.signOut();

    router.push("/");
  };

  return (
    <header className="flex items-center gap-10 min-h-16 border-b bg-white text-nowrap transition-all">
      <div className="max-w-[960px] w-full flex mx-auto gap-10">
        <Link href="/">로고</Link>

        {/* HeaderNav */}
        <nav className="flex gap-10">
          <Link href="/events">이벤트</Link>
          <Link href="/map">지도</Link>
          <Link href="/accounts/users/:userId">유저페이지</Link>
        </nav>

        {/* HeaderMenu */}
        <div className="ml-auto flex gap-10 items-center">
          {/* SearchBar */}
          <div>
            <SearchBar placeholder="검색해보세요." />
          </div>
          <Authenticated>
            {auth.isLoggedIn ? (
              <>
                <Link href="/accounts/users/:userId">마이페이지</Link>
                <button onClick={handleClickSignOut}>로그 아웃</button>
              </>
            ) : (
              <>
                <button onClick={() => modal.open(<SignInModal />)}>
                  로그인
                </button>
                <button onClick={() => modal.open(<TermsAgreementModal />)}>
                  회원 가입
                </button>
              </>
            )}
          </Authenticated>
        </div>
      </div>
    </header>
  );
}

export default Header;
