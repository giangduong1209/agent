import { Menu } from "lucide-react";
import logo from "../assets/cpu-svgrepo-com 1.png";
import Button from "./ui/Button";

const Header = () => {
  return (
    <div className="container px-5 lg:px-0 mx-auto flex justify-between items-center mt-2">
      <img src={logo} className={"w-12 h-12"} alt="logo" />
      <div className="hidden lg:flex justify-around items-center gap-20">
        <ul className="flex items-center justify-between gap-20 font-semibold cursor-pointer">
          <li>Playground</li>
          <li>How it works</li>
          <li>Pricing</li>
          <li>Case Study</li>
        </ul>
        <Button>Sign Up</Button>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
