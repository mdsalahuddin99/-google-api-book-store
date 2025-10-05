
import BestBook from "@/components/Card/BestRead";
import IslamicBook from "@/components/Card/IslamicBook";
import HeroSectionWithSearch from "@/components/hero/MianHero";
import Contact from "../ContactPage/Contact-Page";
import HeroCarousel from "@/components/Card/HeroCarousel";




 






 

function HomePage() {
    return ( 
        <>
         <HeroCarousel/>
        <HeroSectionWithSearch/>
        <BestBook/> 
        <IslamicBook/>
        <Contact/>


       
        
        
        </>
     );
}

export default HomePage;