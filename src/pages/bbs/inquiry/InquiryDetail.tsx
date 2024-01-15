import { useParams } from "react-router-dom";
import BbsDetailComponent from "../common/BbsDetailComponent";

const InquiryDetail = () => {
    const idx = useParams().inqId;
    return <><BbsDetailComponent bbsCode="BS02" bbsId={idx} /></>;
}

export default InquiryDetail;