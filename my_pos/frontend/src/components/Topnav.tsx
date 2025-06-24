import { useNav } from "../context/Navcontext";
import Theme from "./Theme";
import { CgMenuRight } from "react-icons/cg";

function Topnav() {
  const { toggleSidebar } = useNav();
  return (
    <main>
      <nav className="flex justify-between px-4 items-center  py-[1.03rem] md:px-12 top-0 max-w-screen sticky border-b border-neutral-200 dark:border-neutral-900">
        <p className="flex items-center gap-x-2"></p>
        <ul className="flex items-center gap-x-2">
          <li>
            <Theme />
          </li>
          <li onClick={toggleSidebar} className="md:hidden">
            <CgMenuRight size={30} />
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Topnav;
