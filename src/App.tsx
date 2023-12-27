import React from "react";
import Router from "./common/Router";
import Footer from "./common/footer/Footer";
import NavBar from "./common/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
