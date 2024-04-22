import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pageRoutes } from "./routers/routes";
import BadRequest from "./components/error/badRequest";
import Layout from "@views/global/Layout";


// function App() {
//   return (
//     <>
//       <NavBar />
//       <Router />
//       <Footer />
//     </>
//   );
// }

function App () {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <BadRequest />, // 404에러페이지
      children: pageRoutes
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;
