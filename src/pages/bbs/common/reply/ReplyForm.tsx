import { useState } from "react";
import Button from "../../../../components/button";
import { HOST_URL, getAtk, getRtk } from "../../../../common/Request";
import axios from "axios";

const ReplyForm = () => {
  const [form, setForm] = useState({ content: "reply test...", bbsId: 1 });

  const submitForm = () => {
    const formData = new FormData();
    formData.append("content", form.content);
    formData.append("bbsId", form.bbsId.toString());

    axios.post(HOST_URL + "/reply/insert", form, {
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${getAtk()}`,
        RefreshToken: getRtk(),
      },
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
          ></textarea>
          <Button className="w-20" color="Primary" value="등록" />
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
