import { useState } from "react";

import Button from "../../../../components/button";
import Locale from "../../../../components/locale";
import TextArea from "../../../../components/textarea";
import { globalCode } from "../../../../libs/Const";
import { EApiStatus, ReplyDetail } from "../../../../defines/api";
import { ApiClient } from "../../../../libs/ApiClient";
import { NoAuthRedirect } from "../../../../libs/request";

interface ReplyFormProps {
  bbsId: string;
  status: string;
  reply?: ReplyDetail;
}

const ReplyForm = (props: ReplyFormProps) => {
  const [form, setForm] = useState({
    bbsId: props.bbsId,
    content: "",
    groupId: 0,
    sequenceId: 0,
    levelId: 0,
  });

  const submitForm = () => {
    const formData = new FormData();
    formData.append("bbsId", form.bbsId);
    formData.append("content", form.content);

    ApiClient.getInstance().post(
      "/reply/",
      formData,
      (data) => {
        
        
      },
      (data) => {
        if (data.status === EApiStatus.NoAuth) {
          console.log("error : 410")
          NoAuthRedirect(); // 로그인 페이지로 리다이렉트
        }
      }
    );

  };

  const localeByStatus = () => {
    if (props.status === globalCode.reply.new) return <Locale k="register" />;
    else if (props.status === globalCode.reply.update)
      return <Locale k="update" />;
    else return <Locale k="register" />;
  };

  return (
    <div>
      <div className="border-t border-gray-200 py-5">
        <div className="flex gap-1 pb-4 font-bold">
          <Locale k="reply" />
          {localeByStatus()}
        </div>
        <div className="flex items-center border border-gray-200 rounded p-3">
          <TextArea
            placeholder={"댓글 내용을 입력해 주세요"}
            className="w-full min-h-20 border-none focus:outline-none"
            value={props.reply ? props.reply.content : form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          />
          <Button className="w-20" color="Primary" onClick={submitForm}>
            {localeByStatus()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
