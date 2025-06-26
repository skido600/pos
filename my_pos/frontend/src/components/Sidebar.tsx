import { useEffect } from "react";
// import { toast } from "sonner";
// import { CgMenuRight } from "react-icons/cg";
import { FiHome, FiBox, FiX } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiShutterstock } from "react-icons/si";
import { SiCoinmarketcap } from "react-icons/si";
import { useNav } from "../context/Navcontext";

function Sidebar() {
  const { isOpen, closeSidebar } = useNav();
  //   const [user, setUser] = useState<{ email: string; role: string } | null>(
  //     null
  //   );
  const token = localStorage.getItem("token");
  const handleLogout = async () => {
    try {
      const response = await fetch("api", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        credentials: "include",
      });

      //   const data = await response.json();
      //   localStorage.removeItem("user");
      //   localStorage.removeItem("token");
      if (response.ok) {
        console.log("under production");
        // toast.success(data.message || "Logged out successfully", {
        //   style: {
        //     backgroundColor: "#38A169",
        //     color: "white",
        //     border: "none",
        //   },
        // });
        // console.log(data.message);
        // navigate("/login");
      } else {
        // toast.error(data.message, {
        //   style: {
        //     backgroundColor: "#F56565",
        //     color: "white",
        //     border: "none",
        //   },
        // });
      }
    } catch (error) {
      console.log(error);
      //   toast.error((error as Error).message || "Something went wrong", {
      //     style: {
      //       backgroundColor: "#F56565",
      //       color: "white",
      //       border: "none",
      //     },
      //   });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  const menuItems = [
    {
      name: "update",
      icon: <FiHome className="icon" />,
      path: "/admin",
    },
    {
      name: "All product",
      icon: <MdOutlineProductionQuantityLimits />,
      path: "/all",
    },
    {
      name: "Avaliable product",
      icon: <FiBox className="icon" />,
      path: "/avalable",
    },
    {
      name: "Out of stock",
      icon: <SiShutterstock />,
      path: "/stock",
    },
    {
      name: "market sales",
      icon: <SiCoinmarketcap />,
      path: "/market",
    },

    {
      name: "Logout",
      icon: <IoIosLogOut className="icon " />,
      action: handleLogout,
    },
  ];

  //   useEffect(() => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       try {
  //         const parsedUser = JSON.parse(storedUser);
  //         setUser(parsedUser);
  //       } catch (error) {
  //         console.error("Error parsing user from localStorage:", error);
  //       }
  //     }
  //   }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-0 right-0   z-50 p-2 rounded-lg">
        {isOpen && <FiX size={30} onClick={closeSidebar} />}
      </button>

      {/* Self-close overlay for cl */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[#06141799] backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`h-screen w-65 fixed left-0 top-0 bg-[#FBFBFB] border-r dark:bg-[#000000]   dark:border-neutral-800   border-neutral-200 p-6
          transform transition-transform overflow-y-auto duration-300 ease-in-out
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-50`}>
        {/* Logo */}
        <div className="mb-10">
          <p className="text-gray-500 text-sm  dark:text-white"></p>
          <p className="text-2xl text-gray-500 mt-1  dark:text-white">
            Admin only
          </p>
        </div>

        {/* Menu Items */}
        <nav className="h-[80vh] md:h-auto overflow-y-auto">
          <ul>
            <div>
              <h1 className="text-gray-600 font-medium font-inter mb-4  dark:text-white">
                Menu
              </h1>
            </div>
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center md:py-3 md:px-0 py-3 px-2 rounded-lg transition-all hover:dark:bg-gray-400 hover:px-2  dark:text-white text-gray-600"
                    onClick={closeSidebar}>
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span className="font-medium font-inter  dark:text-white">
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="flex items-center w-full md:py-3  dark:text-white md:px-0 py-3 px-2 rounded-lg transition-all  text-gray-600  hover:dark:bg-gray-400 hover:px-2 ">
                    <span className="mr-3 text-xl  dark:text-white">
                      {item.icon}
                    </span>
                    <span className="font-medium font-inter">{item.name}</span>
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="absolute bottom-0 mb-4  dark:border-neutral-800   border-t border-gray-100 pt-4">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm text-gray-500  dark:text-white">
                  no user
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom Profile */}
      </div>
    </>
  );
}

export default Sidebar;
