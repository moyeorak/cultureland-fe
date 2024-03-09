"use client";

import { useModal } from "@/contexts/modal/modal.context";
import Link from "next/link";
import SignInModal from "./_components/Modals/SignInModal";
import TermsAgreementModal from "./_components/Modals/TermsAgreementModal";

function Header() {
  const modal = useModal();

  return (
    <header className="flex items-center gap-10 min-h-16 border-b bg-white xl:px-60 md:px-36 sm:px-12 px-12 text-nowrap transition-all">
      <Link href="/">로고</Link>

      {/* HeaderNav */}
      <nav className="flex gap-10">
        <Link href="/events">이벤트</Link>
        <Link href="/map">지도</Link>
        <Link href="/accounts/users/:userId">유저페이지</Link>
      </nav>

      {/* HeaderMenu */}
      <div className="ml-auto flex gap-10 items-center">
        <div className="w-4 h-4 rounded-full bg-slate-400"></div>
        <button onClick={() => modal.open(<SignInModal />)}>로그인</button>
        <button onClick={() => modal.open(<TermsAgreementModal />)}>
          회원가입
        </button>
      </div>
    </header>
  );
}

export default Header;
