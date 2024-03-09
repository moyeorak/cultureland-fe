"use client";

import { useModal } from "@/contexts/modal/modal.context";
import Link from "next/link";

import SearchBar from "./_components/SearchBar";
import SignInModal from "./_components/SignInModal";

function Header() {
  const modal = useModal();

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
          <button onClick={() => modal.open(<SignInModal />)}>로그인</button>
          <Link href="accounts/sign-up">회원가입</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
