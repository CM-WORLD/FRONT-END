import { useEffect, useState } from "react";

import { CmsApplyDetail } from "../../../defines/api";
import { ApiClient } from "../../../libs/ApiClient";

interface ReviewItem {
  id: number;
  applyDto: CmsApplyDetail;
  content: string;
  displayYn: string;
  nickName: string;
  regDate: string;
  cmsName: string;
}

const ReviewPage = () => {
  const [data, setData] = useState([]);

  const [pageObj, setPageObj] = useState({
    number: 0,
    first: true,
    last: true,
    size: 10,
    totalPages: 1,
    totalElements: 1,
    empty: true,
  });

  useEffect(() => {
    ApiClient.getInstance().get(
      "/review/list",
      { params: { page: pageObj.number, size: pageObj.size } },
      (data) => {
        const respData = data.data;
        if (respData) {
          setData(respData.content);
          setPageObj({
            first: respData.first,
            last: respData.last,
            number: respData.number,
            size: respData.size,
            totalPages: respData.totalPages,
            totalElements: respData.totalElements,
            empty: respData.empty,
          });
        }
      },
      (data) => {
        console.log("error", data);
      }
    );
  }, []);

  const reviewList = () => {
    return data.map((item: ReviewItem, idx) => (
      <>
      {console.log(item)}
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.cmsName}
            </h3>
            <p className="my-4">{item.content}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>{item.nickName}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item.regDate}
              </div>
            </div>
          </figcaption>
        </figure>
      </>
    ));
  };

  return (
    <>
      <div className="review-page h-full">
        <h1 className="m-5 font-bold text-center">커미션 후기</h1>
        <div className="review-content">
          {data.length > 0 ? (
            <div className="grid mb-8 dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800 m-10 gap-10">
              {reviewList()}
            </div>
          ) : (
            <div className="m-5 text-center">아직 작성된 후기가 없습니다.</div>
          )}
          {data.length}
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
