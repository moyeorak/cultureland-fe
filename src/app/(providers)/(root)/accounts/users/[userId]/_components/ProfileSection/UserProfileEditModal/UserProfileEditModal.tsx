import api from "@/api/index.api";
import CloseButton from "@/app/(providers)/(root)/(home)/_components/Header/_components/Modals/CloseButton";
import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useProfile } from "@/zustand";
import { ChangeEventHandler, useState } from "react";

function UserProfileEditModal() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const user = useProfile();

  const handleChangeProfileImage: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage(null);
    }
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

    try {
      await api.users.updateProfile(user.id, formData);
      alert("프로필이 성공적으로 업데이트되었습니다.");
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
          label="닉네임"
          autoFocus
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요."
        />

        <div className="mt-7">
          <Input
            type="password"
            id="password"
            label="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="새 비밀번호를 입력해주세요."
          />
        </div>

        <div className="mt-7">
          <Input
            type="file"
            id="profileImage"
            label="프로필이미지"
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
