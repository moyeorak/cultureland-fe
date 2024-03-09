import Modal from "@/components/Modal";
import { useModal } from "@/contexts/modal/modal.context";
import React from "react";
import TermsAgreementModal from "../..";

function FinancialAgreedDetail() {
  const modal = useModal();

  const termsText =
    "제1조 (목적)\n 본 약관은 컬처랜드(이하 '당사'라 합니다)가 제공하는 전자금융거래 서비스(이하 '서비스'라 합니다)의 이용과 관련하여, 당사와 고객 간의 권리, 의무 및 책임사항, 서비스의 이용조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.\n\n제2조 (정의)\n 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.\n 1. '전자금융거래'라 함은 당사가 전자적 장치를 통하여 제공하는 금융거래 서비스로서, 고객이 당사와 체결한 계약에 따라 금융상품의 매매, 이체, 대출, 결제 등 금융거래를 전자적 방법으로 이용하는 것을 말합니다. \n2. '이용자'라 함은 본 약관에 따라 당사가 제공하는 서비스를 이용하는 고객을 말합니다.\n\n제3조 (서비스의 종류)\n 당사가 제공하는 전자금융거래 서비스의 종류와 내용은 다음과 같습니다. \n1. 계좌이체 서비스 \n2. 결제대행 서비스 \n3. 전자화폐 충전 및 결제 서비스\n 4. 기타 당사가 정하는 전자금융거래 서비스\n\n제4조 (이용시간) \n당사의 전자금융거래 서비스 이용시간은 연중무휴, 1일 24시간을 원칙으로 합니다. 단, 당사의 업무처리나 시스템 정비 등의 필요에 따라 서비스 이용시간을 달리 정할 수 있으며, 이 경우 그 사실을 사전에 공지합니다.\n\n제5조 (수수료 및 이용조건) \n1. 당사가 제공하는 전자금융거래 서비스의 수수료 및 기타 이용조건은 당사의 정책에 따라 정해집니다. \n2. 당사는 필요시 서비스의 수수료 및 이용조건을 변경할 수 있으며, 변경사항은 서비스를 통해 사전에 공지합니다.\n\n제6조 (거래내용의 확인 및 오류정정)\n 1. 이용자는 당사의 서비스를 통해 자신의 거래내용을 언제든지 확인할 수 있습니다.\n 2. 이용자가 전자금융거래 서비스 이용과정에서 오류를 발견한 경우, 당사에 그 정정을 요청할 수 있으며, 당사는 이에 대해 신속하게 조치를 취합니다.\n\n제7조 (비밀번호 및 보안) \n1. 이용자는 서비스 이용을 위해 설정한 비밀번호의 관리에 최선을 다해야 하며, 이를 제3자가 알지 못하도록 해야 합니다.\n 2. 비밀번호의 도용이나 유출이 의심될 경우 즉시 당사에 그 사실을 통보하고 당사의 안내에 따라야 합니다.\n\n제8조 (이용자의 의무) 이용자는 전자금융거래의 안전성 확보를 위해 당사가 정한 이용조건에 따라 서비스를 이용해야 하며, 이를 위반하여 발생한 모든 책임은 이용자에게 있습니다.\n\n제9조 (당사의 의무) \n당사는 안정적인 전자금융거래 서비스 제공을 위하여 최선을 다하며, 서비스와 관련한 이용자의 문의사항이나 불만사항을 신속하게 처리하기 위해 노력합니다.\n\n제10조 (약관의 변경) \n당사는 법률이나 서비스의 변경사항을 반영하기 위해 약관을 변경할 수 있으며, 변경된 약관은 당사의 서비스를 통해 사전에 공지합니다.\n\n제11조 (분쟁해결) \n본 약관으로 인해 발생한 분쟁에 대해 당사와 이용자는 상호 협의 하에 해결을 모색합니다. 협의로 해결되지 않은 경우, 관련 법률에 따른 소송 절차를 진행할 수 있습니다.";

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
            <h2 className="text-fs-28 font-bold">전자금융거래 이용약관</h2>
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
          <div className="flex items-center justify-center h-5/6 pt-20">
            <div className="text-fs-16 font-normal max-w-[1200px] max-h-[580px] p-5 overflow-auto scrollbar-hide">
              {paragraphs}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default FinancialAgreedDetail;
