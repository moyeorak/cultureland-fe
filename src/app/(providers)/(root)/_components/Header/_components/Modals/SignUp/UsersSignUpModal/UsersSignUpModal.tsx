"use client";

import api from "@/api/index.api";
import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationUsersSignUp from "@/react-query/auth/users/useMutationUsersSignUp";
import { useRouter } from "next/navigation";
import { KeyboardEventHandler, useEffect, useState } from "react";

function UsersSignUpModal() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const { mutateAsync: usersSignUp, isPending } = useMutationUsersSignUp();

  // 비밀번호 유효성 검사 함수
  const isValidPassword = (password: string) => {
    const minLength = 10;
    const maxLength = 16;

    // 각 유형별 포함 여부 확인
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[\W_]/.test(password); // 특수문자 및 언더스코어 포함

    // 포함된 유형의 수 계산
    const typesIncluded = [
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChars,
    ].filter(Boolean).length;

    // 비밀번호 길이 확인 및 최소 2가지 유형 포함 여부
    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      typesIncluded >= 2
    );
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
    setEmailChecked(!result);
    alert(result ? "중복된 이메일입니다." : "사용가능한 이메일입니다.");
  };

  const handleClickUserSignUp = async () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      return alert("모든 값을 입력해주세요.");
    }
    if (!isValidPassword(password)) {
      return alert(
        "비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 10자에서 16자 사이로 설정해주세요."
      );
    }
    if (password.trim() !== passwordConfirm.trim()) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    if (!emailChecked) {
      return alert("이메일 중복 확인을 해주세요.");
    }

    try {
      await usersSignUp({ email, password });
      auth.signIn();
      modal.close();
    } catch (e) {
      alert("회원가입에 실패하였습니다.");
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
        <div className="flex items-end gap-2">
          <Input
            type="email"
            id="email"
            label="이메일"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요."
            disabled={isPending}
          />
          <Button
            size="small"
            color="neutral"
            onClick={handleClickEmailDuplicationCheck}
          >
            중복확인
          </Button>
        </div>

        <div className="mt-7">
          <Input
            id="password"
            label="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
            disabled={isPending}
          />
          <div className="mt-2 text-fs-14 text-gray-400">
            (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
          </div>
        </div>

        <div className="mt-7">
          <Input
            id="passwordConfirm"
            label="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onKeyDown={handleKeyDownUserSignUp}
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
            disabled={isPending}
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
