import Theme from "./Theme";
import { Link } from "react-router-dom";
function AuthNav() {
  return (
    <section>
      <nav className="flex justify-between px-2 dark:bg-black items-center  py-1 md:px-12 top-0 max-w-screen sticky border-b border-neutral-200 dark:border-neutral-900">
        <img
          src="/ChatGPT Image Jun 23, 2025, 01_49_34 AM.png"
          className="h-16 w-16 dark:invert"
          alt="Waveel POS logo"
        />

        <ul className="flex items-center space-x-4">
          <li>
            <Theme />
          </li>
          <Link to="/login" className="cursor-pointer">
            <li>
              <button className="bg-black font-[600] cursor-pointer dark:bg-white dark:text-black text-white px-4 text-sm py-2 rounded">
                Login
              </button>
            </li>
          </Link>
          <Link to="/register" className="cursor-pointer">
            <li>
              <button className="bg-black font-[600] cursor-pointer  dark:bg-white dark:text-black text-white px-4 text-sm py-2 rounded">
                Signup
              </button>
            </li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}

export default AuthNav;
