import Router from "./common/Router";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navbar";

import "./App.scss";

function App() {
  return (
    <>
    <div className="wrapper">
      <NavBar />
      <Router />
      <Footer />
    </div>
    </>
  );
}

export default App;
