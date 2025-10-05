
import { Logo } from "@/components/navbar/Logo";
import { NavMenu } from "@/components/navbar/Nav-Menu";
import { NavigationSheet } from "@/components/navbar/NavigationSheet";
import { ModeToggle } from "@/components/ui/Mode-Toggle";
import { Link } from "react-router";



const Navbar = () => {
  return (
    <div>
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
           
            <Link to="/">  <Logo /></Link>

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>
          
          <div className="flex items-center gap-3">
         <ModeToggle/>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
