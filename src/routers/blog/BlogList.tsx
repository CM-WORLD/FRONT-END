import { useEffect, useState } from "react";
import { REQUEST_GET } from "../../libs/request";
// import "./BlogList.scss";

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

  const [testData, setTestData] = useState([
    "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
    "https://jvk-world.s3.ap-northeast-2.amazonaws.com/test_01.jpg",
  ]);
  const [currentTab, setCurrentTab] = useState("TY01");

  useEffect(() => {
    // fetchPostList(currentTab);
  }, []);

  const fetchPostList = (type: string) => {
    REQUEST_GET(
      "/post/list",
      { params: { type: type } },
      (data) => {
        setData(data.data);
      },
      "public"
    );
  };

  const imageList = testData.map((post: any, idx) => {
    return (
      <div key={`post-${idx}`}>
        <img
          className="h-auto max-w-full rounded-lg shadow-sm"
          src={post}
          alt=""
        />
      </div>
    );
  });

  const renderList = () => {
    return data.map((post: any, idx) => {
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
      <div className="px-12 py-3 pb-16 bg-rose-50">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-blue-700 hover:text-blue-800 border border-blue-600 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            전체
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            1인
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            2인
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            단체
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{imageList}</div>
      </div>
    </>
  );
};

export default BlogList;
