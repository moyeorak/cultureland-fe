"use client";

import api from "@/api/index.api";
import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context/auth.context";
import { useModal } from "@/contexts/modal/modal.context";
import { useRouter } from "next/navigation";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";

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

  const handleClickEmailDuplicationCheck = async () => {
    const result = await api.partners.emailDuplicationCheck(formData.email);
    if (result) {
      return alert("중복된 이메일입니다.");
    } else {
      return alert("사용가능한 이메일입니다.");
    }
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

    if (formData.password.trim() !== passwordConfirm.trim()) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    try {
      await api.partners.signUp(formData);
      auth.logIn();
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
      <Heading label="파트너 회원가입" />
      <div className="w-[520px] p-10">
        <div className="flex items-center gap-2">
          <Input
            type="email"
            id="email"
            label="이메일"
            autoFocus
            value={formData.email}
            onChange={handleChangeFormData}
            placeholder="이메일을 입력해주세요."
          />
          {/* 버튼 컴포넌트 수정 후 크기 조절 */}
          <Button onClick={handleClickEmailDuplicationCheck}>중복확인</Button>
        </div>

        <div className="mt-7">
          <Input
            id="password"
            label="비밀번호"
            value={formData.password}
            onChange={handleChangeFormData}
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
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
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
          />
        </div>

        <div className="mt-7">
          <Button onClick={handleClickPartnerSignUp}>가입완료</Button>
        </div>
      </div>
    </Modal>
  );
}

export default PartnersSignUpModal;