import { useParams } from "react-router-dom";
import BbsDetailComponent from "../common/BbsDetailComponent";
import MyCommonContent from "../../myPage/common";

const InquiryDetail = () => {
    const idx = useParams().inqId;
    return <MyCommonContent content={<BbsDetailComponent bbsCode="BS02" bbsId={idx} />}></MyCommonContent>;
}

export default InquiryDetail;