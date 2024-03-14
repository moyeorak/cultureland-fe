"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationPartnersSignIn from "@/react-query/auth/partners/useMutationPartnersSignIn";
import useMutationUserSignIn from "@/react-query/auth/users/useMutationUsersSignIn";
import { useAuthStore } from "@/zustand";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import CloseButton from "../CloseButton";
import TermsAgreementModal from "../TermsAgreementModal";
import Checkbox from "../TermsAgreementModal/_components/Checkbox";

const KAKAO_SDK_APP_KEY = "96ff57f66003fd00397cb9e209eac07b";
const KAKAO_LOGIN_REDIRECT_URL =
  "https://port-0-culture-land-am952nltdolcl9.sel5.cloudtype.app/accounts/users/kakao-callback";

function SignInModal() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();
  const { mutateAsync: usersSignIn, isPending } = useMutationUserSignIn();
  const { mutateAsync: partnersSignIn } = useMutationPartnersSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAccountType, setSelectedAccountType] = useState("user");
  const { userInfo } = useAuthStore();

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
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.Kakao && !window.Kakao.isInitialized())
        window.Kakao.init(KAKAO_SDK_APP_KEY);
    } else {
      console.log("window undefined");
    }
  }, []);

  const kakaoLoginHandler = async () => {
    const scope = ["profile_nickname", "profile_image", "account_email"].join(
      ","
    );
    if (window.Kakao) {
      window.Kakao.Auth.authorize({
        redirectUri: KAKAO_LOGIN_REDIRECT_URL,
        scope,
      });
    }
    auth.signIn();
  };

  return (
    <Modal>
      <CloseButton />
      <div className="md:w-[400px] max-sm:h-screen m-auto">
        <section className="text-center mb-6">
          <h2 className="font-bold text-2xl mb-4">로그인</h2>
          <p className="text-fs-16">안녕하세요 컬처랜드입니다</p>
        </section>

        <div className="flex gap-x-2 justify-end items-center text-xs">
          <Checkbox
            type="radio"
            id="partner"
            name="accounts"
            onChange={handleChangeAccountType}
            checked={selectedAccountType === "partner"}
          />
          <label htmlFor="partner">파트너</label>
          <Checkbox
            type="radio"
            id="user"
            name="accounts"
            onChange={handleChangeAccountType}
            checked={selectedAccountType === "user"}
          />
          <label htmlFor="user">일반</label>
        </div>

        <div className="flex flex-col gap-y-4 mt-3 mb-3">
          <Input
            type="email"
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

        <div className="flex items-center justify-center mt-8 mb-3">
          <div className="border-t border-gray-300 flex-grow mr-3"></div>
          <span className="text-sm text-gray-600 bg-white px-2">또는</span>
          <div className="border-t border-gray-300 flex-grow ml-3"></div>
        </div>

        <div className="flex flex-col gap-y-3">
          <Image
            src={"/images/GoogleLogin.png"}
            alt={"googleSignInBtn"}
            width={400}
            height={46}
            onClick={() => {
              alert("아직 준비중입니다.");
            }}
            className="cursor-pointer"
          />
          <Image
            src={"/images/KakaoLogin.png"}
            alt={"KakaoSignInBtn"}
            width={400}
            height={46}
            onClick={kakaoLoginHandler}
            className="cursor-pointer"
          />
          <Image
            src={"/images/NaverLogin.png"}
            alt={"NaverSignInBtn"}
            width={400}
            height={46}
            onClick={() => {
              alert("아직 준비중입니다.");
            }}
            className="cursor-pointer"
          />

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
      </div>
    </Modal>
  );
}

export default SignInModal;
