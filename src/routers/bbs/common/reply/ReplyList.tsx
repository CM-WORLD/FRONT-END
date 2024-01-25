import ReplyForm from "./ReplyForm";

import { ReplyDetail } from "../../../../defines/api";
import { getMlByVal } from "../../../../components/tailwind/margin";

interface ReplyListProps {
  replyList: ReplyDetail[];
  formIdx: number;
  setFormIdx: (formIdx: number) => void;
}

const ReplyList = (props: ReplyListProps) => {

  const deleteReply = (id: number) => {
    confirm("삭제 후에는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?");
    // if (confirm("삭제 후에는 되돌릴 수 없습니다. 정말 삭제하시겠습니까?")) {
    //   axios
    //     .delete(HOST_URL + `/reply/${id}`, { data: { replyId: id } })
    //     .then((resp) => {
    //       if (resp.data.status === 200) {
    //         alert("댓글이 삭제되었습니다");
    //         fetchReplyList();
    //       }
    //     });
    // }
  };

  if (props.replyList.length < 1)
    return <div className="py-4">댓글이 존재하지 않습니다.</div>;
  return props.replyList.map((item: ReplyDetail, idx) => {
    return (
      <>
        <div
          key={`inq-reply-${idx}`}
          className={
            "border-b border-gray-200 py-3" +
            ` ${getMlByVal(item.levelId -1 )}`
          }
        >
          <div className="flex items-center gap-3">
            <div className="">
              <img
                className="w-10 h-10 rounded-full"
                src={
                  "https://jvk-world.s3.ap-northeast-2.amazonaws.com/apply/1705024099133_test_01.jpg"
                }
              />
            </div>
            <div className="font-bold text-gray-900">
              {item.boardDto.memberDto.nickName}
            </div>
          </div>
          <div className="pt-3">{item.content}</div>
          <div className="flex gap-3 pt-1 text-gray-500 text-sm">
            <div>{item.regDate}</div>
            <button onClick={() => props.setFormIdx(item.id)}>답글 쓰기</button>
            <div>
              <button className="text-blue-600">수정</button>
              <button
                className="ml-2 text-rose-600"
                onClick={() => deleteReply(item.id)}
              >
                삭제
              </button>
            </div>
          </div>
          {props.formIdx === item.id && (
            <div className="pt-5">
              <ReplyForm bbsId={"idx"} type=""/>
            </div>
          )}
          {/* 수정을 할 경우에  */}
        </div>
      </>
    );
  });
};

export default ReplyList;
