import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBottom from "../components/Header/HeaderBottom/HeaderBottom";
import HeaderTop from "../components/Header/HeaderTop/HeaderTop";
import Home from "./Home/Home";
import Courses from "../components/Courses/Courses";

const AllRoutes = () => {
    return (
      <>
        <HeaderTop/>
        <HeaderBottom/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="courses" element={<Courses/>}/>
        </Routes>
        <Footer/>
      </>
    );
  };
  
  export default AllRoutes;