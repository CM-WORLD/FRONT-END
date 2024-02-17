import Locale from "../../../components/locale";
import Modal from "../../../components/modal";

const BankTransferModal = () => {
  const bankTransferContent = (
    <>
      <div className="text-center">하나은행 / 남궁진</div>
      <div className="text-center text-gray-500 py-2">32591038729807</div>
      <div className="pt-4 text-base">
        <div>
          <span className="text-primary mr-1">*</span>위 계좌로 결제 금액을 입금
          후, 확인 버튼을 눌러주세요.
        </div>
        <div className="font-bold text-primary">
          <span className="text-primary mr-1">*</span>
          확인 버튼 클릭 시 알림이 전송되니 신중히 진행해주세요.
        </div>
        <div>
          {" "}
          <span className="text-primary mr-1">*</span>
          1~2일 이내에 확인 처리되면, 작업이 시작됩니다.
        </div>
        <div>
          {" "}
          <span className="text-primary mr-1">*</span>꼭 신청서에 기재한
          예금주명으로 입금해주세요.
        </div>
      </div>
    </>
  );
  return (
    <>
      <Modal
        title={<Locale k="bank_transfer" />}
        display={true}
        content={bankTransferContent}
        onClose={() => {}}
        onSubmit={() => {}}
      />
    </>
  );
};

export default BankTransferModal;
