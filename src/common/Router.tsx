import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogList from "../pages/blog/BlogList";
import CmsList from "../pages/cmsList/CmsList";
import MainPage from "../pages/main/MainPage";
import SignInPage from "../pages/signIn/page";
import MyInquiryList from "../pages/inquiry/list/user";
import MyCmsList from "../pages/myPage/myCms";
import InquiryForm from "../pages/inquiry/form";
import ApplyCms from "../pages/apply/ApplyCms";
import ReviewPage from "../pages/review/page";
import InquiryDetail from "../pages/inquiry/detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<BlogList />} />
        <Route path="/commissions" element={<CmsList />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/sign/in" element={<SignInPage />} />
        <Route path="/cms/form" element={<ApplyCms />} />
        <Route path="/mypage/cms" element={<MyCmsList />} />
        <Route path="/mypage/inquiry" element={<MyInquiryList />} />
        <Route path="/inquiry/form" element={<InquiryForm />} />
        <Route path="/inquiry/:inqId" element={<InquiryDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
