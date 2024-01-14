import Button from "../../../components/button";

const ReplyForm = () => {
  return (
    <div>
      <div className="border-t border-gray-200 py-5">
        <div className="pb-4 font-bold">댓글 작성</div>
        <div className="flex items-center border border-gray-200 rounded p-3">
          <textarea
            className="w-full outline-none resize-none"
            placeholder="댓글을 작성해주세요."
          ></textarea>
          <Button className="w-20" color="Rose" value="등록" />
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
