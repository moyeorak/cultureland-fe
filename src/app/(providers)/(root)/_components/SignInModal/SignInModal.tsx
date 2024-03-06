"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Link from "next/link";

function SignInModal() {
  return (
    <Modal>
      <section className="text-center mb-6">
        <h2 className="font-bold text-2xl mb-[17px]">로그인</h2>
        <p>안녕하세요 컬처랜드입니다</p>
      </section>

      <div className="flex flex-col gap-y-4 mb-2">
        <Input
          type="email"
          autoFocus
          placeholder="이메일을 입력해주세요."
        ></Input>
        <Input type="password" placeholder="비밀번호를 입력해주세요."></Input>
        <Button>로그인</Button>
      </div>

      <div className="flex gap-x-2 justify-end text-xs mb-8">
        <input type="radio" name="accounts" id="partner" />
        <label htmlFor="partner">파트너 로그인</label>
        <input type="radio" name="accounts" id="user" />
        <label htmlFor="user">유저 로그인</label>
      </div>

      <div className="flex items-center justify-center mb-3">
        <div className="border-t border-gray-300 flex-grow mr-3"></div>
        <span className="text-sm text-gray-600 bg-white px-2">또는</span>
        <div className="border-t border-gray-300 flex-grow ml-3"></div>
      </div>

      <div className="flex flex-col gap-y-3">
        <Button>Google 계정 로그인</Button>
        <Button>Kakao 계정 로그인</Button>
        <Button>Naver 계정 로그인</Button>

        <div className="flex justify-between text-sm">
          <div>아직 회원이 아니신가요?</div>
          <Link href="accounts/users/sign-up">회원가입</Link>
        </div>
      </div>
    </Modal>
  );
}

export default SignInModal;
