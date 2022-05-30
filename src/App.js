import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import MyPortfoilo from "./Pages/MyPortfolio/MyPortfolio";
import Signin from "./Pages/Login/Signin/Signin";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="signin" element={<Signin />} />
        <Route path="register" element={<Register />} />
        <Route path="myportfolio" element={<MyPortfoilo />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
