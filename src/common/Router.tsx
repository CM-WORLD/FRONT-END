import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from '../pages/blog/BlogList';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<BlogList />} />
          </Routes>
      </BrowserRouter>
    );
  };

  export default Router;