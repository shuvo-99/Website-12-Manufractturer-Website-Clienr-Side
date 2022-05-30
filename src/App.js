import "./App.css";
import Navbar from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import MyPortfoilo from "./Pages/MyPortfolio/MyPortfolio";
import Signin from "./Pages/Login/Signin/Signin";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Login/RequiredAuth/RequiredAuth";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Order from "./Pages/Order/Order";
import Purchase from "./Pages/Purchase/Purchase";
import Addreview from "./Pages/Dashboard/Addreview";
import Myorders from "./Pages/Dashboard/Myorders";
import Myprofile from "./Pages/Dashboard/Myprofile";
import DashboardPage from "./Pages/Dashboard/DashboardPage";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>
        <Routes>
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<DashboardPage></DashboardPage>}></Route>
            <Route path="addreview" element={<Addreview></Addreview>}></Route>
            <Route path="myorder" element={<Myorders></Myorders>}></Route>
            <Route path="myprofile" element={<Myprofile></Myprofile>}></Route>
            {/* <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users></Users>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="addDoctor"
              element={
                <RequireAdmin>
                  <AddDoctor></AddDoctor>
                </RequireAdmin>
              }
            ></Route>
            <Route
              path="manageDoctor"
              element={
                <RequireAdmin>
                  <ManageDoctors></ManageDoctors>
                </RequireAdmin>
              }
            ></Route> */}
          </Route>

          <Route
            path="/tool/:toolID"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="myportfolio" element={<MyPortfoilo />} />
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
