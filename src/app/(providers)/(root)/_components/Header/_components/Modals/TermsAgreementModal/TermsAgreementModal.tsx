import Button from "@/components/Button";
import Heading from "@/components/Heading/Heading";
import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal/modal.context";
import Image from "next/image";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import CloseButton from "../CloseButton";
import PartnersSignUpModal from "../SignUp/PartnersSignUpModal";
import { default as UsersSignUpModal } from "../SignUp/UsersSignUpModal";
import Checkbox from "./_components/Checkbox";
import FinancialAgreedDetail from "./_components/TermsDetail/FinancialAgreedDetail";
import PersonalInfoAgreedDetail from "./_components/TermsDetail/PersonalInfoAgreedDetail";
import TermsAgreedDetail from "./_components/TermsDetail/TermsAgreedDetail";

function TermsAgreementModal() {
  const modal = useModal();
  const [selectedAccountType, setSelectedAccountType] = useState("");

  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    financialAgreed: false,
    personalInfoAgreed: false,
  });

  const handleChangeAgreement: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, checked } = e.target;

    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
      (value) => value === true
    );

    setAllAgreed(allChecked);
  };

  const handleChangeAllAgreement: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { checked } = e.target;
    setAgreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {
          termsAgreed: false,
          financialAgreed: false,
          personalInfoAgreed: false,
        }
      )
    );

    setAllAgreed(checked);
  };

  const handleAccountTypeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedAccountType(e.target.id);
  };

  const handleClickOpenSignUpModal: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (!allAgreed) return alert("약관을 모두 동의하셔야 합니다.");
    if (selectedAccountType === "") return alert("회원가입 종류를 선택하세요.");
    modal.close();

    if (selectedAccountType === "user") {
      modal.open(<UsersSignUpModal />);
    } else if (selectedAccountType === "partner") {
      modal.open(<PartnersSignUpModal />);
    }
  };

  const termsImgPath = "/utils/icons/triangle.png";

  return (
    <Modal>
      <CloseButton />
      <div className=" sm:w-[480px] xs:w-[375px] m-auto p-5 sm:p-10 sm:h-auto h-screen transition-all">
        <Heading label="약관동의" />
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-medium">필수 동의 항목</h2>
          <div className="mt-3 flex items-center">
            <Checkbox
              type="checkbox"
              id="termsAgreed"
              name="termsAgreed"
              required
              checked={agreements.termsAgreed}
              onChange={handleChangeAgreement}
            />
            <div className="ml-3 font-medium pr-2.5 max-sm:text-fs-14">
              [필수] 이용약관
            </div>
            <Image
              onClick={() => {
                modal.close();
                modal.open(<TermsAgreedDetail />);
              }}
              src={termsImgPath}
              alt="termsImg"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="mt-3 flex items-center">
            <Checkbox
              type="checkbox"
              id="financialAgreed"
              name="financialAgreed"
              required
              checked={agreements.financialAgreed}
              onChange={handleChangeAgreement}
            />
            <div className="ml-3 font-medium pr-2.5 max-sm:text-fs-14">
              [필수] 전자금융거래 이용약관
            </div>
            <Image
              onClick={() => {
                modal.close();
                modal.open(<FinancialAgreedDetail />);
              }}
              src={termsImgPath}
              alt="termsImg"
              width={20}
              height={20}
            ></Image>
          </div>
          <div className="mt-3 flex items-center">
            <Checkbox
              type="checkbox"
              id="personalInfoAgreed"
              name="personalInfoAgreed"
              required
              checked={agreements.personalInfoAgreed}
              onChange={handleChangeAgreement}
            />
            <div className="ml-3 font-medium pr-2.5 max-sm:text-fs-14">
              [필수] 개인정보 수집동의서
            </div>
            <Image
              onClick={() => {
                modal.close();
                modal.open(<PersonalInfoAgreedDetail />);
              }}
              src={termsImgPath}
              alt="termsImg"
              width={20}
              height={20}
            ></Image>
          </div>

          <div className="my-3 border-t border-gray-300"></div>
          <div className="mt-3 flex items-center">
            <Checkbox
              type="checkbox"
              id="allCheck"
              name="allCheck"
              required
              checked={allAgreed}
              onChange={handleChangeAllAgreement}
            />
            <div className="ml-3 font-medium pr-2.5 max-sm:text-fs-14">
              [필수] 약관 전체 동의
            </div>
          </div>
        </div>

        <div className="mt-4 flex text-xs text-gray-600 gap-x-1 items-center justify-end mb-8">
          <Checkbox
            type="radio"
            id="partner"
            name="accounts"
            onChange={handleAccountTypeChange}
          />
          <label htmlFor="partner">파트너</label>

          <Checkbox
            type="radio"
            id="user"
            name="accounts"
            onChange={handleAccountTypeChange}
          />
          <label htmlFor="user">일반</label>
        </div>

        <Button fullWidth onClick={handleClickOpenSignUpModal}>
          다음단계
        </Button>
      </div>
    </Modal>
  );
}

export default TermsAgreementModal;
