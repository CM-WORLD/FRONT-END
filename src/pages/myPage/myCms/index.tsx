import MyCommonContent from "../common";
import "./style.scss";

const MyCmsList = () => {
  const content = (
    <>
      <div className="my-cms-history">
        <table className="bbs-table">
          <colgroup>
            <col width="15%" />
            <col width="*" />
            <col width="15%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">커미션 번호</th>
              <th scope="col">신청서 제목</th>
              <th scope="col">상태</th>
              <th scope="col">등록 날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="contents">겨울철 포장용 테이프 사용 변경 안내 </td>
              <td>작업중</td>
              <td>2023-12-08</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="contents">
                전자증권 전환대상 주권 등의 권리자 보호 안내
              </td>
              <td>작업완료</td>
              <td>2023-12-08</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
  return (
    <>
      <MyCommonContent title="커미션 신청 내역" content={content} />
    </>
  );
};

export default MyCmsList;
