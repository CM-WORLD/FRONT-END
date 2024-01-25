import { useEffect, useState } from "react";

import Button from "../../../../components/button";
import Locale from "../../../../components/locale";
import TextArea from "../../../../components/textarea";

import { globalCode } from "../../../../libs/Const";
import { EApiStatus, ReplyDetail } from "../../../../defines/api";
import { ApiClient } from "../../../../libs/ApiClient";
import { NoAuthRedirect } from "../../../../libs/request";

interface ReplyFormProps {
  bbsId: number;
  status: string;
  reply?: ReplyDetail;
  hideForm: () => void;
  callFetch: () => void;
}

const ReplyForm = (props: ReplyFormProps) => {
  const [form, setForm] = useState<ReplyDetail>();

  useEffect(() => {
    if (props.reply) {
      setForm({ ...props.reply });
    }
  }, []);

  const submitForm = () => {
    const formData = new FormData();
    formData.append("id", `${form.id}`); //댓글 id
    formData.append("bbsId", `${props.bbsId}`);
    formData.append("content", form.content);
    formData.append("groupId", `${form.groupId}`);
    formData.append("levelId", `${form.levelId}`);
    formData.append("sequenceId", `${form.sequenceId}`);

    if (props.status === globalCode.reply.update) {
      ApiClient.getInstance().put(
        "/reply/",
        formData,
        (data) => {
          alert("댓글이 성공적으로 수정되었습니다.");
          props.callFetch();
          props.hideForm();
        },
        (data) => {
          if (data.status === EApiStatus.NoAuth) {
            NoAuthRedirect();
          }
        }
      );
    }
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
            value={
              props.status === globalCode.reply.update && form
                ? form.content
                : ""
            }
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
