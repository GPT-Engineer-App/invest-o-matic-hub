import { Home, Info, Briefcase, MessageCircle } from "lucide-react";
import Index from "./pages/Index.jsx";

const About = () => <div className="p-8 bg-[#2C5F2D] text-white"><h1 className="text-4xl font-bold mb-4">About Us</h1><p>Learn more about our mission and team.</p></div>;
const Projects = () => <div className="p-8 bg-[#2C5F2D] text-white"><h1 className="text-4xl font-bold mb-4">Our Projects</h1><p>Explore our innovative AI projects.</p></div>;
const Contact = () => <div className="p-8 bg-[#2C5F2D] text-white"><h1 className="text-4xl font-bold mb-4">Contact Us</h1><p>Get in touch for investment opportunities.</p></div>;

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Projects />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <Contact />,
  },
];
