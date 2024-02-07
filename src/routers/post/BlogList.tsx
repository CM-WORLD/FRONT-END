import { useEffect, useState } from "react";
import { ApiClient } from "../../libs/ApiClient";
import { globalCode } from "../../libs/Const";

interface Post {
  id: number;
  title: string;
  content: string;
  imgUrl: string;
  type: string; //커미션 종류
  isNotBg: string; //배경 유무
  regDate: string; //등록 날짜
}

const BlogList = () => {
  const [data, setData] = useState([]);
  const [currentTab, setCurrentTab] = useState(globalCode.post.all);

  useEffect(() => {
    fetchData(currentTab);
  }, [currentTab]);

  const fetchData = (type: string) => {
    ApiClient.getInstance().get(
      "/post/list",
      { params: { type: currentTab } },
      (data) => {
        setData(data.data);
      },
      (data) => {} //error
    );
  };

  const postImageList = data.map((post: Post, idx) => {
      return (
        <div key={`post-${idx}`} className="post-item">
          <img
            className="h-auto max-w-full rounded-lg shadow-sm"
            src={post.imgUrl}
          />
          {/* <div className="text-center font-bold">{post.title}</div>
          <div className="content">{post.content}</div> */}
        </div>
      );
  });

  const updateTab = (type: string) => {
    setCurrentTab(type);
  }

  const updateTabStyle = (type: string) => {
    const active = "text-blue-700 border border-blue-600 hover:bg-blue-100";
    const normal = "text-gray-900 border border-white hover:border-gray-100";
    return type === currentTab ? active : normal;
  }

  return (
    <>
      <div className="px-12 py-3 pb-16 bg-rose-50">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className={`bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${updateTabStyle(globalCode.post.all)}`}
            onClick={() => updateTab(globalCode.post.all)}
          >
            전체
          </button>
          <button
            type="button"
            className={`bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${updateTabStyle(globalCode.post.single)}`}
            onClick={() => updateTab(globalCode.post.single)}
          >
            1인
          </button>
          <button
            type="button"
            className={`bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${updateTabStyle(globalCode.post.couple)}`}
            onClick={() => updateTab(globalCode.post.couple)}
          >
            2인
          </button>
          <button
            type="button"
            className={`bg-white focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 ${updateTabStyle(globalCode.post.group)}`}
            onClick={() => updateTab(globalCode.post.group)}     
          >
            단체
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{postImageList}</div>
      </div>
    </>
  );
};

export default BlogList;
