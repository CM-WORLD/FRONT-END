import { useState } from "react";
import Modal from "../../../components/modal";
import TextArea from "../../../components/textarea";
import { ApiClient } from "../../../libs/ApiClient";
import { getNick } from "../../../libs/request";
import Locale from "../../../components/locale";

interface ReviewModalProps {
  cmsApplyId: string;
  display: boolean;
  onClick: () => void;
}

const WriteRvwModal = (props: ReviewModalProps) => {
  const { cmsApplyId } = props;
  const [form, setForm] = useState({ content: "", imgList: [] });

  const submitForm = () => {
    const formData = new FormData();
    formData.append("nickName", getNick());
    formData.append("content", form.content);
    formData.append("cmsApplyId", cmsApplyId);

    // for(let i = 0; i < form.imgList.length; i++){
    //   formData.append("imgList", form.imgList[i]);
    // }

    ApiClient.getInstance().post(
      "/review/create",
      formData,
      (data) => {
        console.log("success", data);
      },
      (data) => {
        console.log("error", data);
      }
    );
  };

  const content = (
    <>
      <div className="btn-box">
        <div className="input-line">
          <TextArea
            placeholder="content_placeholder"
            onChange={(e) => {setForm({...form, content: e.target.value})}}
            value={form.content}
          />
          {/* TODO:: 리뷰 이미지 리스트 고민중 */}
        </div>
      </div>
    </>
  );
  return (
    <>
      <Modal
        title={<Locale k="review_create" />}
        display={props.display}
        content={content}
        onClose={props.onClick}
        onSubmit={submitForm}
      />
    </>
  );
};

export default WriteRvwModal;
