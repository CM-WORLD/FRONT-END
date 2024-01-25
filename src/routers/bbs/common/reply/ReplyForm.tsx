import { useState } from "react";

import Button from "../../../../components/button";
import Locale from "../../../../components/locale";
import TextArea from "../../../../components/textarea";
import { globalCode } from "../../../../libs/Const";

interface ReplyFormProps {
  bbsId: string;
  type: string;
}

const ReplyForm = (props: ReplyFormProps) => {
  const [form, setForm] = useState({
    bbsId: props.bbsId,
    content: "",
    sequenceId: 0,
    levelId: 0,
  });

  const submitForm = () => {
    const formData = new FormData();
    formData.append("bbsId", form.bbsId);
    formData.append("content", form.content);
  };

  // 등록인지 수정인지 분기처리가 필요

  return (
    <div>
      <div className="border-t border-gray-200 py-5">
        {props.type === globalCode.reply.new && (
          <div className="pb-4 font-bold">댓글 작성</div>
        )}
        <div className="flex items-center border border-gray-200 rounded p-3">
          <TextArea
            placeholder={"댓글을 작성해주세요"}
            className="w-full min-h-20 border-none focus:outline-none"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
          <Button className="w-20" color="Primary" onClick={submitForm}>
            <Locale k="register" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
