import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./blog/BlogList";
import CmsList from ".//cmsList/CmsList";
import MainPage from ".//main/MainPage";
import SignInPage from ".//signIn/page";
import MyInquiryList from ".//bbs/inquiry/InquiryList";
import MyCmsList from ".//myPage/myCms";
import InquiryForm from ".//bbs/inquiry/InquiryForm";
import ApplyCms from "./apply/ApplyForm";
import ReviewPage from ".//review/page";
import KakaoLoginLoading from ".//signIn/loading";
import SignOutLoading from ".//signIn/signOut";
import NotFound from "../components/error/notFound";
import MyCmsApplyDetail from ".//myPage/myCms/detail";
import NoticeDetail from ".//bbs/notice/NoticeDetail";
import InquiryDetail from ".//bbs/inquiry/InquiryDetail";
import MyReviewList from "./review/MyReviewList";
import SigninTwitterLoading from "./signIn/loading/SigninTwitterLoading";
import TossTest from "./payment/tossTest";
import TossSuccess from "./payment/tossSuccess";
import SigninNaverLoading from "./signIn/loading/SigninNaverLoading";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<BlogList />} />
        <Route path="/commissions" element={<CmsList />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/sign/in" element={<SignInPage />} />
        <Route path="/apply/:cmsId" element={<ApplyCms />} />
        <Route path="/mypage/cms" element={<MyCmsList />} />
        <Route path="/mypage/cms/:cmsApplyId" element={<MyCmsApplyDetail />} />
        <Route path="/mypage/inquiry" element={<MyInquiryList />} />
        <Route path="/mypage/inquiry/form" element={<InquiryForm />} />
        <Route path="/mypage/inquiry/:inqId" element={<InquiryDetail />} />
        <Route path="/mypage/reviews" element={<MyReviewList />} />
        <Route path="/notice/:noticeId" element={<NoticeDetail />} />
        <Route path="/login/kakao" element={<KakaoLoginLoading />} />
        <Route path="/login/naver" element={<SigninNaverLoading />} />
        <Route path="/login/twitter" element={<SigninTwitterLoading />} />
        <Route path="/logout/kakao" element={<SignOutLoading />} />
        <Route path="/toss/test" element={<TossTest />} />
        <Route path="/toss/success" element={<TossSuccess />} />

        {/* 404 error page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
