import "./style.scss";

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
        <div className="info">
            <p>*ID는 페이지를 나가면 다시 볼 수 없으니 기록해 주세요.</p>
            <p>*비회원은 커미션 ID를 통해서만 커미션 상태를 조회할 수 있습니다.</p>
        </div>

        <div className="link-box">
            <a href="/">메인으로 이동</a>
        </div>
    </div>
    </>;
}

export default CmsApplyComplete;