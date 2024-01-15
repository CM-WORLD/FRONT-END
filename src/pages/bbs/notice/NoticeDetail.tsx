import { useParams } from "react-router-dom";
import BbsDetailComponent from "../common/BbsDetailComponent";

const NoticeDetail = () => {
    const idx = useParams().noticeId;
    return <><BbsDetailComponent bbsCode="BS01" bbsId={idx} /></>;
}

export default NoticeDetail;