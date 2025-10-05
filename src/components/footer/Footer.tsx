import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const bookLinks = [
  { title: "Genres", href: "#" },
  { title: "Best Sellers", href: "#" },
  { title: "New Arrivals", href: "#" },
  { title: "Offers", href: "#" },
];

const helpLinks = [
  { title: "Contact Us", href: "#" },
  { title: "FAQ", href: "#" },
  { title: "Shipping", href: "#" },
  { title: "Returns", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2e0a3d] text-gray-300 pt-16 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Newsletter */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">BookVerse</h2>
          <p className="text-sm mb-4">
            Discover, read, and fall in love with books from around the world.
          </p>
          <form className="flex items-center gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white text-black placeholder-gray-500"
            />
            <Button type="submit" className="bg-[#6B21A8] hover:bg-purple-700">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            {bookLinks.map(({ title, href }) => (
              <li key={title}>
                <Link to={href} className="hover:text-white transition">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            {helpLinks.map(({ title, href }) => (
              <li key={title}>
                <Link to={href} className="hover:text-white transition">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">Email: support@bookverse.com</p>
          <p className="text-sm">Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <span>&copy; {new Date().getFullYear()} BookVerse. All rights reserved.</span>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link to="#" className="hover:text-white">
            Terms
          </Link>
          <Link to="#" className="hover:text-white">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
