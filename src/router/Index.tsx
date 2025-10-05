

import FrontPage from "@/components/FrontPage/Front-Page";
import Contact from "@/pages/ContactPage/Contact-Page";
import HomePage from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
    {
        path:"/",
        Component:FrontPage,
           
        children: [
            {
                index:true,
                Component:HomePage,
            }, 
            
            {
                path:"/contact",
                Component:Contact
            },

        ]


      
    },  
 
  
])

export default router