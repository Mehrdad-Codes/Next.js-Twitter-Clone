import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IconType } from "react-icons/lib/esm/iconBase";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
interface ItemsType {
  label: String;
  href?: string;
  icon: IconType;
  auth?: boolean;
}
const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items: ItemsType[] = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
    },
    { label: "Profile", href: "/user/123", icon: FaUser, auth: true },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href as string}
              href={item.href}
              label={item.label}
              icon={item.icon}
              auth={item.auth}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => {
                signOut();
              }}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
