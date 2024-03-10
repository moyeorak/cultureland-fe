"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationPartnersSignIn from "@/react-query/auth/partners/useMutationPartnersSignIn";
import useMutationUserSignIn from "@/react-query/auth/users/useMutationUsersSignIn";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import TermsAgreementModal from "../TermsAgreementModal";
import Checkbox from "../TermsAgreementModal/_components/Checkbox";

function SignInModal() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();
  const { mutateAsync: usersSignIn, isPending } = useMutationUserSignIn();
  const { mutateAsync: partnersSignIn } = useMutationPartnersSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAccountType, setSelectedAccountType] = useState("");

  const handleChangeAccountType: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedAccountType(e.target.id);
  };

  const handleClickSignIn = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");

    try {
      if (selectedAccountType === "user") {
        await usersSignIn({ email, password });
        auth.signIn();
        router.push("/");
        modal.close();
      } else if (selectedAccountType === "partner") {
        await partnersSignIn({ email, password });
        auth.signIn();
        router.push("/");
        modal.close();
      }

      console.log();
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <Modal>
      <section className="text-center mb-6 w-[400px]">
        <h2 className="font-bold text-2xl mb-[17px]">로그인</h2>
        <p>안녕하세요 컬처랜드입니다</p>
      </section>

      <div className="flex flex-col gap-y-4 mb-3">
        <Input
          type="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요."
          disabled={isPending}
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
          disabled={isPending}
        />
        <Button onClick={handleClickSignIn}>로그인</Button>
      </div>

      <div className="flex gap-x-2 justify-end text-xs mb-8">
        <Checkbox
          type="radio"
          id="partner"
          name="accounts"
          onChange={handleChangeAccountType}
        />{" "}
        <label htmlFor="partner">파트너 로그인</label>
        <Checkbox
          type="radio"
          id="user"
          name="accounts"
          onChange={handleChangeAccountType}
        />{" "}
        <label htmlFor="user">유저 로그인</label>
      </div>

      <div className="flex items-center justify-center mb-3">
        <div className="border-t border-gray-300 flex-grow mr-3"></div>
        <span className="text-sm text-gray-600 bg-white px-2">또는</span>
        <div className="border-t border-gray-300 flex-grow ml-3"></div>
      </div>

      <div className="flex flex-col gap-y-3">
        <Button
          onClick={() => {
            alert("아직 준비중입니다.");
          }}
        >
          Google 계정 로그인
        </Button>
        <Button
          onClick={() => {
            alert("아직 준비중입니다.");
          }}
        >
          Kakao 계정 로그인
        </Button>
        <Button
          onClick={() => {
            alert("아직 준비중입니다.");
          }}
        >
          Naver 계정 로그인
        </Button>

        <div className="flex justify-between text-sm">
          <div>아직 회원이 아니신가요?</div>
          <button
            className="underline"
            onClick={() => {
              modal.open(<TermsAgreementModal />);
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SignInModal;