import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer/Footer";
import Navbar from "../Pages/Sheared/Footer/Navbar/Navbar";


const Main = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;