import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal/modal.context";
import React from "react";
import TermsAgreementModal from "../..";

function PersonalInfoAgreedDetail() {
  const modal = useModal();

  const termsText =
    '제1조 (목적)\n 본 동의서는 컬처랜드(이하 "당사"라 합니다)가 제공하는 서비스(이하 "서비스"라 합니다) 이용 과정에서 이용자의 개인정보 수집, 이용, 처리에 대한 동의를 구함을 목적으로 합니다.\n\n제2조 (개인정보의 수집 및 이용)\n 1. 당사는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집합니다.\n 2. 수집 항목: 이름, 연락처(전화번호, 이메일 주소 등), 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보\n 3. 수집 목적: 회원 관리, 서비스 개발 및 향상, 안전한 인터넷 이용 환경 구축, 맞춤형 서비스 제공\n 4. 보유 및 이용 기간: 회원 탈퇴 시까지 또는 법률에 따른 의무 보유 기간까지\n\n제3조 (개인정보의 제3자 제공)\n 1. 당사는 원칙적으로 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.\n 2. 단, 다음의 경우는 예외로 합니다: - 법률에 특별한 규정이 있는 경우 - 이용자 또는 법정 대리인의 동의를 받은 경우 - 이용자 또는 제3자의 생명, 신체, 재산의 이익을 위하여 필요한 경우로서 해당 이용자의 동의를 받기 어려운 때\n\n제4조 (개인정보의 파기)\n 당사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.\n\n제5조 (동의 거부 권리 및 동의 거부 시 불이익)\n 1. 이용자는 본 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다.\n 2. 단, 동의를 거부할 경우 서비스의 일부 또는 전체 이용이 제한될 수 있습니다.\n\n제6조 (권리 및 의무)\n 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 개인정보의 수집, 이용, 제공에 대한 동의 철회를 요청할 수 있습니다. 또한, 개인정보의 오류에 대한 정정을 요청할 수 있습니다.';

  const paragraphs = termsText.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph.split("\n").map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  ));

  return (
    <Modal>
      <div className="h-screen w-screen max-w-[100vw]">
        <div className="fixed w-full h-full  top-0 left-0">
          <div className="bg-user-theme-100 h-20 flex items-center justify-center text-white">
            <h2 className="text-fs-28 font-bold">개인정보 수집 동의서</h2>
            <button
              className="fixed right-2"
              onClick={() => {
                modal.close();
                modal.open(<TermsAgreementModal />);
              }}
            >
              돌아가기
            </button>
          </div>
          <div className="flex items-center justify-center h-5/6">
            <div className="text-fs-16 font-normal max-w-[1200px] max-h-[580px] p-5 overflow-auto scrollbar-hide">
              {paragraphs}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default PersonalInfoAgreedDetail;
