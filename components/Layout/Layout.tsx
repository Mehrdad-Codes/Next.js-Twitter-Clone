import React from "react";
import FollowBar from "./FollowBar/FollowBar";
import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container mx-auto h-full xl:px-32 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x border-neutral-800">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
