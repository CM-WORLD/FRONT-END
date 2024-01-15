import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogList from "../pages/blog/BlogList";
import CmsList from "../pages/cmsList/CmsList";
import MainPage from "../pages/main/MainPage";
import SignInPage from "../pages/signIn/page";
import MyInquiryList from "../pages/bbs/inquiry/InquiryList";
import MyCmsList from "../pages/myPage/myCms";
import InquiryForm from "../pages/bbs/inquiry/InquiryForm";
import ApplyCms from "../pages/apply/ApplyCms";
import ReviewPage from "../pages/review/page";
import KakaoLoginLoading from "../pages/signIn/loading";
import SignOutLoading from "../pages/signIn/signOut";
import NotFound from "../components/error/notFound";
import MyCmsApplyDetail from "../pages/myPage/myCms/detail";
import NoticeDetail from "../pages/bbs/notice/NoticeDetail";
import InquiryDetail from "../pages/bbs/inquiry/InquiryDetail";

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
        <Route path="/notice/:noticeId" element={<NoticeDetail />} />
        <Route path="/login/kakao" element={<KakaoLoginLoading />} />
        <Route path="/logout/kakao" element={<SignOutLoading />} />
        {/* 404 error page */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
