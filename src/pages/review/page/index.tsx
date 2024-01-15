import { useEffect, useState } from "react";
import axios from "axios";
import { CmsApplyDetail } from "../../../common/interface";
import "./style.scss";
import { HOST_URL } from "../../../libs/Const";

interface ReviewItem {
  id: number;
  applyDto: CmsApplyDetail;
  content: string;
  displayYn: string;
  nickName: string;
  regDate: string;
}

const ReviewPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(HOST_URL + "/review/list").then((resp) => {
      if (resp.data.status === 200) {
        setData(resp.data.data);
      }
    });
  }, []);

  const reviewList = () => {
    if (data.length < 1)
      return <div className="empty-review">아직 작성된 후기가 없습니다.</div>;
    return data.map((item: ReviewItem, idx) => (
      <>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.applyDto.cmsDto.name}
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
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.applyDto.cmsDto.name}
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
      {/* <WriteRvwModal display={true} onClick={() => {}} /> */}
      <div className="review-page">
        {/* <h1 className="header">커미션 후기</h1> */}
        <div className="review-content">
          <div className="grid mb-8 dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800 m-10 gap-10">
            {/* <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center ">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                  <div>Bonnie Green</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 ">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure> */}
            {reviewList()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
