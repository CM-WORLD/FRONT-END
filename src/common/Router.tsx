import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from '../pages/blog/BlogList';
import CmsList from '../pages/cmsList/CmsList';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<BlogList />} />
            <Route path="/commissions" element={<CmsList />} />
          </Routes>
      </BrowserRouter>
    );
  };

  export default Router;