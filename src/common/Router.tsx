import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from '../pages/BlogList';

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<BlogList />} >
            </Route>
            {/* <Route path="/gallery" element={<DetailCardPage />}>
              <Route path=":cardId" element={<DetailCard />} />
            </Route> */}
          </Routes>
      </BrowserRouter>
    );
  };

  export default Router;