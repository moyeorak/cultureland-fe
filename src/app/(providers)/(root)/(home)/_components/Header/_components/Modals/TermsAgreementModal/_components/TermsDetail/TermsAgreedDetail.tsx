import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal/modal.context";
import React from "react";
import TermsAgreementModal from "../..";

function TermsAgreedDetail() {
  const modal = useModal();

  const termsText =
    '제1조 (목적)\n본 약관은 컬처랜드(이하 "당사"라 합니다)가 제공하는 모든 서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차, 이용자와 당사의 권리, 의무, 책임 사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.\n\n제2조 (정의)\n이용자: 본 약관에 따라 당사가 제공하는 서비스를 받는 회원 및 비회원 회원: 당사에 개인정보를 제공하여 회원등록을 한 자로서, 당사의 정보를 지속적으로 제공받으며, 당사가 제공하는 서비스를 계속적으로 이용할 수 있는 자 비회원: 회원에 가입하지 않고 당사가 제공하는 서비스를 이용하는 자\n\n제3조 (약관의 게시와 개정)\n당사는 본 약관의 내용과 상호, 영업소 소재지 주소, 대표자의 성명, 연락처(전화, 팩스, 전자우편 주소 등)등을 이용자가 쉽게 알 수 있도록 당사의 서비스 화면(전면)에 게시합니다. 당사는 약관의 규제에 관한 법률, 전자서명법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 소비자보호법 등 관련 법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다. 약관이 개정된 경우, 적용일자 및 개정사유를 명시하여 현행약관과 함께 당사의 홈페이지에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.\n\n제4조 (서비스의 제공 및 변경)\n당사는 다음과 같은 서비스를 제공합니다.페스티벌, 연극, 뮤지컬, 무용 등 각종 공연 정보 제공 공연 예약 서비스 회원 대상 프로모션 및 이벤트 정보 제공 당사는 공연 정보의 변경 사항이나 예정된 서비스의 변경 사항을 회원에게 사전에 공지합니다.\n\n제5조 (서비스의 중단)\n당사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 당사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 당사가 고의 또는 중대한 과실이 없는 한 그 책임을 지지 않습니다.';

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
        <div className="fixed w-full h-full top-0 left-0">
          <div className="bg-user-theme-100 h-20 flex items-center justify-center text-white">
            <h2 className="text-fs-28 font-bold">컬처랜드 이용약관</h2>
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

export default TermsAgreedDetail;
