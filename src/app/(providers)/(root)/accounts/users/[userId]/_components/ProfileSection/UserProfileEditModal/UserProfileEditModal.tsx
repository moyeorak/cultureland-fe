import api from "@/api/index.api";
import CloseButton from "@/app/(providers)/(root)/(home)/_components/Header/_components/Modals/CloseButton";
import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal/modal.context";
import { useProfile } from "@/zustand";
import { ChangeEventHandler, useState } from "react";

function UserProfileEditModal() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const user = useProfile();
  const { close } = useModal();

  const handleChangeProfileImage: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage(null);
    }
  };

  // 비밀번호 유효성 검사 함수
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

  const handleClickUserUpdate = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("password", password);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }
    formData.append("description", description);

    if (user.id === null) return;
    if (!isValidPassword(password)) {
      return alert(
        "비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 10자에서 16자 사이로 설정해주세요."
      );
    }
    try {
      await api.users.updateProfile(user.id, formData);
      alert("프로필이 성공적으로 업데이트되었습니다.");
      close();
    } catch (error) {
      console.error("프로필 업데이트 중 오류가 발생했습니다.", error);
      alert("프로필 업데이트에 실패했습니다.");
    }
  };

  return (
    <Modal>
      <CloseButton />
      <Heading label="프로필 수정" />
      <div className="sm:w-[520px] xs:w-[375px] m-auto py-0 sm:p-10 sm:h-auto h-screen transition-all">
        <Input
          type="text"
          id="nickname"
          label={`닉네임 : ${user.nickname}`}
          autoFocus
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요."
        />

        <div className="mt-7">
          <Input
            id="password"
            label="비밀번호 수정"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="새 비밀번호를 입력해주세요."
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
          />
        </div>
        <div className="mt-2 text-fs-14 text-gray-400">
          (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
        </div>

        <div className="mt-7">
          <Input
            id="passwordConfirm"
            label="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            iconShowPath="/utils/icons/passwordShow.png"
            iconHidePath="/utils/icons/passwordHide.png"
          />
        </div>

        <div className="mt-7">
          <label className="block mb-3 text-sm font-medium w-full">
            프로필 이미지
          </label>
          <input
            type="file"
            id="profileImage"
            className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-user-theme-90 file:text-white hover:file:bg-user-theme-80"
            onChange={handleChangeProfileImage}
          />
        </div>

        <div className="mt-7">
          <Input
            type="text"
            id="description"
            label="한줄 소개"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="한줄 소개를 입력해주세요."
          />
        </div>

        <div className="mt-7">
          <Button fullWidth onClick={handleClickUserUpdate}>
            수정 완료
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default UserProfileEditModal;
