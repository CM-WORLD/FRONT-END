import Locale from "../../components/locale";
import Modal from "../../components/modal";
import { ImgDetail } from "../../defines/api";
import { MyCmsDetailType } from "../myPage/myCms/MyCmsDetail";

interface ApplyInfoModalProps {
  data: MyCmsDetailType;
  display: boolean;
  onClose: () => void;
}

/**
 * 
 *  appliedImageList: ImgDetail[];
  applyDto: CmsApplyDetail;
  completeImageList: ImgDetail[];
  paymentList: any[];
  stepperList: any[];
 */
const ApplyInfoModal = (props: ApplyInfoModalProps) => {
  const { appliedImageList, completeImageList, applyDto } = props.data;

  const renderImgList = (imgList) => {
    if (imgList === null || imgList.length < 1) return <></>;
    return imgList.map((item: ImgDetail, idx) => {
      return (
        <a href={item.imgUrl} target="_blank" className="w-1/3">
          <div key={`cms-apply-img-${idx}`}>
            <img src={item.imgUrl} alt="img" />
          </div>
        </a>
      );
    });
  };

  return (
    <>
      <Modal
        display={props.display}
        content={
          <>
            <div className="min-w-96">
              <div className="pb-3 font-bold text-md">
                <Locale k="content" />
              </div>
              <div className="px-4 py-8 bg-gray-100 rounded-sm">
                <div className="pb-8">{applyDto.content}</div>
                <div className="flex gap-3">
                  {renderImgList(appliedImageList)}
                </div>
              </div>
              <div className="pt-3 pb-3 font-bold text-md">
                <Locale k="account_holder" />
              </div>
              <div className="px-4 py-4 bg-gray-100 rounded-sm">
                <div className="">{applyDto.bankOwner}</div>
              </div>
            </div>
          </>
        }
        onClose={props.onClose}
        onSubmit={props.onClose}
        title={<Locale k="cms_apply_history" />}
      />
    </>
  );
};

export default ApplyInfoModal;
