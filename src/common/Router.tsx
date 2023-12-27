import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "../pages/blog/BlogList";
import CmsList from "../pages/cmsList/CmsList";
import MainPage from "../pages/main/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<BlogList />} />
        <Route path="/commissions" element={<CmsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
