import { useParams } from "react-router-dom";
import BbsDetailComponent from "../common/BbsDetailComponent";
import MyCommonContent from "../../myPage/common";
import { globalCode } from "../../../libs/Const";

const InquiryDetail = () => {
  const idx = useParams().inqId;
  return (
    <MyCommonContent
      content={
        <BbsDetailComponent
          isPublic={false}
          bbsCode={globalCode.bbs.inquiry}
          bbsId={idx}
          breadCrumb="문의 상세"
        />
      }
    ></MyCommonContent>
  );
};

export default InquiryDetail;
