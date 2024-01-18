import { useState } from "react";
import Button from "../../../../components/button";
import axios from "axios";
import { AUTH_ITC, getAtk, getRtk } from "../../../../libs/request";
import { HOST_URL } from "../../../../libs/Const";

interface ReplyFormProps {
  bbsId: string;
}

const ReplyForm = (props: ReplyFormProps) => {
  const [form, setForm] = useState({
    content: "reply test...",
    bbsId: props.bbsId,
    parentId: 0,
    parentPath: "",
  });

  const submitForm = () => {
    const formData = new FormData();
    formData.append("bbsId", form.bbsId);
    formData.append("content", form.content);
    formData.append("parentId", String(form.parentId));
    formData.append("parentPath", form.parentPath);

    AUTH_ITC.get(HOST_URL + "/validate/token").then((resp) => {
      console.log("token check... ", resp.data.status);
      if (resp.data.status === 200 || resp.data.staus === 205) {
        axios
          .post(HOST_URL + "/reply/", formData, {
            headers: {
              withCredentials: true,
              Authorization: `Bearer ${getAtk()}`,
              RefreshToken: getRtk(),
            },
          })
          .then((resp) => {
            console.log("post... ", resp);
          });
      } else {
        alert("로그인이 필요합니다.");
        // 로그인 페이지로 이동
      }
    });
  };

  return (
    <div>
      <div className="border-t border-gray-200 py-5">
        <div className="pb-4 font-bold">댓글 작성</div>
        <div className="flex items-center border border-gray-200 rounded p-3">
          <textarea
            className="w-full outline-none resize-none"
            placeholder="댓글을 작성해주세요."
            onChange={(e) => setForm({ ...form, content: e.target.value })}
          ></textarea>
          <Button
            className="w-20"
            color="Primary"
            value="등록"
            onClick={submitForm}
          />
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
