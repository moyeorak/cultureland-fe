"use client";

import api from "@/api/index.api";
import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import { useRouter } from "next/navigation";
import { KeyboardEventHandler, useEffect, useState } from "react";

function UsersSignUpModal() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleClickUserSignUp = async () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim())
      return alert("모든 값을 입력해주세요.");
    if (password.trim() !== passwordConfirm.trim())
      return alert("비밀번호가 일치하지 않습니다.");
    await api.users.signUp({ email, password });
    auth.signIn();
    modal.close();
  };

  const handleKeyDownUserSignUp: KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      handleClickUserSignUp();
    }
  };

  const handleClickEmailDuplicationCheck = async () => {
    const result = await api.users.emailDuplicationCheck(email);
    if (result) {
      return alert("중복된 이메일입니다.");
    } else {
      return alert("사용가능한 이메일입니다.");
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.replace("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <Modal>
      <Heading label="회원가입" />
      <div className="w-[520px] p-10">
        <div className="flex items-center gap-2">
          <Input
            type="email"
            id="email"
            label="이메일"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
          />
          {/* 버튼 컴포넌트 수정 후 크기 조절 */}
          <Button onClick={handleClickEmailDuplicationCheck}>중복확인</Button>
        </div>

        <div className="mt-7">
          <Input
            id="password"
            label="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
          />
          <div className="mt-2 text-fs-14 text-gray-400">
            (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
          </div>
        </div>

        <div className="mt-7">
          <Input
            id="password"
            label="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onKeyDown={handleKeyDownUserSignUp}
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
          />
        </div>

        <div className="mt-7">
          <Button onClick={handleClickUserSignUp}>가입완료</Button>
        </div>
      </div>
    </Modal>
  );
}

export default UsersSignUpModal;
