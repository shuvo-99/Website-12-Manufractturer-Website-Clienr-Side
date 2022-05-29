import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";

import Blog from "./Pages/Blog/Blog";
import MyPortfoilo from "./Pages/MyPortfolio/MyPortfolio";
import Signin from "./Pages/Login/Signin/Signin";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="signin" element={<Signin />} />
        <Route path="myportfolio" element={<MyPortfoilo />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
