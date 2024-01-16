import "./App.scss";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar";
import Router from "./routers/Router";

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
