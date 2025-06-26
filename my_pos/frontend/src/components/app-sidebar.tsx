import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "../components/ui/sidebar";
import { FiHome, FiBox } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiShutterstock } from "react-icons/si";
import { SiCoinmarketcap } from "react-icons/si";

const handleLogout = async () => {
  //   try {
  // const response = await fetch("api", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  //   method: "POST",
  //   credentials: "include",
  // });
  //   const data = await response.json();
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  // if (response.ok) {
  //   console.log("under production");
  // toast.success(data.message || "Logged out successfully", {
  //   style: {
  //     backgroundColor: "#38A169",
  //     color: "white",
  //     border: "none",
  //   },
  // });
  // console.log(data.message);
  // navigate("/login");
  // } else {
  // toast.error(data.message, {
  //   style: {
  //     backgroundColor: "#F56565",
  //     color: "white",
  //     border: "none",
  //   },
  // });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   toast.error((error as Error).message || "Something went wrong", {
  //     style: {
  //       backgroundColor: "#F56565",
  //       color: "white",
  //       border: "none",
  //     },
  //   });
  //   }
};

const menuItems = [
  {
    name: "update",
    icon: FiHome,
    path: "/admin",
  },
  {
    name: "All product",
    icon: MdOutlineProductionQuantityLimits,
    path: "/all",
  },
  {
    name: "Avaliable product",
    icon: FiBox,
    path: "/avalable",
  },
  {
    name: "Out of stock",
    icon: SiShutterstock,
    path: "/stock",
  },
  {
    name: "market sales",
    icon: SiCoinmarketcap,
    path: "/market",
  },

  {
    name: "Logout",
    icon: IoIosLogOut,
    action: handleLogout,
  },
];
export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="text-xl mb-8"> Admin only</SidebarHeader>

          <SidebarGroupLabel>menu</SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu className="py-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name} className="py-2">
                  {item.path ? (
                    <SidebarMenuButton
                      asChild
                      className=""
                      onClick={() => {
                        if (isMobile) {
                          setOpenMobile(false);
                        }
                      }}>
                      <Link to={item.path}>
                        <item.icon />
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton onClick={item.action}>
                      <item.icon />
                      <span>{item.name}</span>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t  text-sm border-neutral-200 dark:border-neutral-900">
        username
      </SidebarFooter>
    </Sidebar>
  );
}
