import Logo from "./Logo";
import Theme from "./Theme";
import { SidebarTrigger } from "../components/ui/sidebar";

function Topnav() {
  return (
    <nav className="w-full flex justify-between items-center h-16 px-4 md:px-12 bg-[#fafafa] dark:bg-[#0a0a0a] ">
      <Logo />
      <ul className="flex items-center gap-x-4">
        <li>
          <Theme />
        </li>
        <li className="md:hidden">
          <SidebarTrigger className="" />
        </li>
      </ul>
    </nav>
  );
}

export default Topnav;
