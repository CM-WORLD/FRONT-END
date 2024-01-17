
interface ApplyCompleteProps {
    cmsId: string;
}

const CmsApplyComplete = (props: ApplyCompleteProps) => {
    return <>
    <div className="apply-cms-complete">
        <h1 className="title">커미션 신청이 완료되었습니다!</h1>
        <h4>커미션 ID : 
            <span className="id-active">{props.cmsId}</span>
        </h4>
        <div className="link-box">
            <a href="/mypage/cms">마이페이지로 이동</a>
        </div>
    </div>
    </>;
}

export default CmsApplyComplete;