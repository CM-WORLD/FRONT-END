import { useParams } from "react-router-dom";
import BbsDetailComponent from "../common/BbsDetailComponent";

const NoticeDetail = () => {
    const idx = useParams().noticeId;
    return <><BbsDetailComponent isPublic={true} bbsCode="BS01" bbsId={idx} breadCrumb="신청 공지" /></>;
}

export default NoticeDetail;