import React from "react";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Header />
              <Home />
              <Footer/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
