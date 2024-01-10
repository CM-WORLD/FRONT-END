import { useEffect, useState } from "react";
import "./BlogList.scss";
import axios from "axios";
import { HOST_URL } from "../../common/Request";

interface Post {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  type: string; //커미션 종류
  isNotBg: string; //배경 유무
  regDate: string; //등록 날짜
}

/* 커미션 일러스트 블로그 */
const BlogList = () => {
  const [data, setData] = useState([]);
  const [currentTab, setCurrentTab] = useState("TY01");

  useEffect(() => {
    fetchPostList(currentTab);
  }, []);

  const fetchPostList = (type: string) => {
    axios.get(HOST_URL + "/post/list", { params: { type: type } }).then((resp) => {
      if (resp.data) setData(resp.data);
    });
  };

  const renderList = () => {
    return data.map((post: Post, idx) => {
      return (
        <div key={idx} className="post-item">
          <img src={post.imgUrl} />
          <div className="title">{post.title}</div>
          <div className="content">{post.content}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="gallery">
        <div className="header">COMMISSIONS</div>
        <div className="tabList">
          <div
            className={"tab" + (currentTab === "TY01" ? " active" : "")}
            onClick={() => {
              fetchPostList("TY01");
              setCurrentTab("TY01");
            }}
          >
            {"1인"}
          </div>
          <div
            className={"tab" + (currentTab === "TY03" ? " active" : "")}
            onClick={() => {
              fetchPostList("TY03");
              setCurrentTab("TY03");
            }}
          >
            {"2인"}
          </div>
          <div
            className={"tab" + (currentTab === "TY05" ? " active" : "")}
            onClick={() => {
              fetchPostList("TY05");
              setCurrentTab("TY05");
            }}
          >
            {"단체"}
          </div>
        </div>
        <div className="works">{renderList()}</div>
      </div>
    </>
  );
};

export default BlogList;
