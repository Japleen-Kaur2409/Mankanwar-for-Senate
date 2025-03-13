
import { FloatingNav } from "./ui/aceternity/floating-navbar";
import { HomeIcon, InfoIcon, User2Icon, ListTodoIcon, MailIcon, MessageSquareIcon } from 'lucide-react';

const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <HomeIcon className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <InfoIcon className="h-4 w-4" />,
    },
    {
      name: "Meet Your Candidate",
      link: "#senator",
      icon: <User2Icon className="h-4 w-4" />,
    },
    {
      name: "Platform",
      link: "#initiatives",
      icon: <ListTodoIcon className="h-4 w-4" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <MessageSquareIcon className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <MailIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <div className="absolute top-4 left-4 flex items-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/96/UBC_logo.svg/640px-UBC_logo.svg.png" alt="UBC Logo" className="h-8 mr-2" />
        <span className="hidden sm:inline-block text-ubc-blue font-bold">mankanwar.ca</span>
      </div>
    </div>
  );
};

export default Header;
