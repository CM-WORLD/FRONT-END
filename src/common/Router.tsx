import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogList from "../pages/blog/BlogList";
import CmsList from "../pages/cmsList/CmsList";
import MainPage from "../pages/main/MainPage";
import SignInPage from "../pages/signIn/page";
import MyInquiryList from "../pages/myPage/inquiry";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<BlogList />} />
        <Route path="/commissions" element={<CmsList />} />
        <Route path="/sign/in" element={<SignInPage />} />
        <Route path="/mypage/inquiry" element={<MyInquiryList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
