"use client";

import api from "@/api/index.api";
import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import useMutationPartnersSignUp from "@/react-query/auth/partners/useMutationPartnersSignUp";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import CloseButton from "../../CloseButton";

function PartnersSignUpModal() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    ownerName: "",
    registrationId: "",
    phoneNumber: "",
    address: "",
    bankName: "",
    bankAccount: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const { mutateAsync: partnersSignUp, isPending } =
    useMutationPartnersSignUp();

  const isValidPassword = (password: string) => {
    const minLength = 10;
    const maxLength = 16;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[\W_]/.test(password);

    const typesIncluded = [
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChars,
    ].filter(Boolean).length;

    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      typesIncluded >= 2
    );
  };

  const handleClickEmailDuplicationCheck = async () => {
    const result = await api.partners.emailDuplicationCheck(formData.email);
    setEmailChecked(!result);
    alert(result ? "중복된 이메일입니다." : "사용가능한 이메일입니다.");
  };

  const handleChangeFormData: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleClickPartnerSignUp = async () => {
    if (
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.name.trim() ||
      !formData.ownerName.trim() ||
      !formData.registrationId.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.address.trim() ||
      !formData.bankName.trim() ||
      !formData.bankAccount.trim()
    ) {
      return alert("모든 값을 입력해주세요.");
    }
    if (!isValidPassword(formData.password)) {
      return alert(
        "비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 10자에서 16자 사이로 설정해주세요."
      );
    }
    if (formData.password.trim() !== passwordConfirm.trim()) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    if (!emailChecked) {
      return alert("이메일 중복 확인을 해주세요.");
    }

    try {
      await partnersSignUp(formData);
      auth.signIn();
      modal.close();
    } catch (e) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  const handleKeyDownPartnerSignUp: KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      handleClickPartnerSignUp();
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.replace("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <Modal>
      <CloseButton />
      <Heading label="파트너 회원가입" />
      <div className=" sm:w-[520px] xs:w-[375px] m-auto py-0 sm:p-10 sm:h-auto h-screen transition-all">
        <div className="flex items-end gap-2">
          <Input
            type="email"
            id="email"
            label="이메일"
            autoFocus
            value={formData.email}
            onChange={handleChangeFormData}
            placeholder="이메일을 입력해주세요."
            disabled={isPending}
          />
          {/* 버튼 컴포넌트 수정 후 크기 조절 */}
          <Button
            size="sm"
            color="secondary"
            outline
            onClick={handleClickEmailDuplicationCheck}
          >
            중복확인
          </Button>
        </div>

        <div className="mt-7">
          <Input
            id="password"
            label="비밀번호"
            value={formData.password}
            onChange={handleChangeFormData}
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
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="name"
            label="법인명"
            value={formData.name}
            onChange={handleChangeFormData}
            placeholder="법인명을 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="ownerName"
            label="대표자명"
            value={formData.ownerName}
            onChange={handleChangeFormData}
            placeholder="대표자명을 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="registrationId"
            label="사업자 등록번호"
            value={formData.registrationId}
            onChange={handleChangeFormData}
            placeholder="사업자 등록번호를 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="phoneNumber"
            label="연락처"
            value={formData.phoneNumber}
            onChange={handleChangeFormData}
            placeholder="연락처를 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="address"
            label="회사 주소"
            value={formData.address}
            onChange={handleChangeFormData}
            placeholder="회사주소를 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="bankName"
            label="은행명"
            value={formData.bankName}
            onChange={handleChangeFormData}
            placeholder="은행명을 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="bankAccount"
            label="계좌번호"
            value={formData.bankAccount}
            onKeyDown={handleKeyDownPartnerSignUp}
            onChange={handleChangeFormData}
            placeholder="계좌번호를 입력해주세요."
            disabled={isPending}
          />
        </div>

        <div className="mt-7">
          <Button fullWidth onClick={handleClickPartnerSignUp}>
            가입완료
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default PartnersSignUpModal;
