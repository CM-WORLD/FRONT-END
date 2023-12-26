import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from '../pages/BlogList';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<BlogList />} >
            <Route path=":cardId" element={<BlogList />} />
            </Route>
          </Routes>
      </BrowserRouter>
    );
  };

  export default Router;