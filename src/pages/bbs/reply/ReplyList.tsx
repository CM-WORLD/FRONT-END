import { ReplyDetail } from "../../../common/interface";
import { getMlByVal } from "../../../components/tailwind/margin";

interface ReplyListProps {
  replyList: ReplyDetail[];
}

const ReplyList = (props: ReplyListProps) => {

  const getInlineDepth = (depthPath: string) => {
    const pathLength = depthPath.split('/').length;
    return pathLength === 1 ? "" : getMlByVal(pathLength);
  };

  if (!props.replyList) return <>댓글이 존재하지 않습니다.</>;
  return props.replyList.map((item: ReplyDetail, idx) => {
    return (
      <>
      
        <div key={`inq-reply-${idx}`} className={"border-b border-gray-200 py-2" + ` ${getInlineDepth(item.depthPath) }`}>
          <div className="flex items-center gap-3">
            <div className="">
              <div>{item.id}</div>
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
          <div className="flex gap-5 pt-1 text-gray-500 text-sm">
            <div>{item.regDate}</div>
            <button>답글 쓰기</button>
          </div>
        </div>
      </>
    );
  });
};

export default ReplyList;
