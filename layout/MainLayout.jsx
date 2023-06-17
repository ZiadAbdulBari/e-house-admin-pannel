import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import Link from 'next/link';
const MainLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar/>
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default MainLayout;
