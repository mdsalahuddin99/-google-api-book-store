import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router";


function FrontPage() {
    return ( <>
 
    <Outlet/>
    <Footer/>
    </> );
}

export default FrontPage;