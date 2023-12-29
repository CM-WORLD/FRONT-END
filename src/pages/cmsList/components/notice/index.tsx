const ApplyNoticeBbs = () => {
  return (
    <>
      <h1>커미션 필독 공지</h1>
      <table className="bbs-table">
        <colgroup>
          <col width="15%" />
          <col width="*" />
          <col width="15%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">등록 날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="contents">겨울철 포장용 테이프 사용 변경 안내 </td>
            <td>2023-12-08</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="contents">
              전자증권 전환대상 주권 등의 권리자 보호 안내
            </td>
            <td>2023-12-08</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ApplyNoticeBbs;
