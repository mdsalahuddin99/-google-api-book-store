import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navber";
import { Outlet } from "react-router";

function FrontPage() {
    return ( <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </> );
}

export default FrontPage;