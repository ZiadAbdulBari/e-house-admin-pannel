import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import Link from 'next/link';
const MainLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar/>
      <div className="content-wrapper absolute top-0 right-0 p-[40px]">{children}</div>
    </div>
  );
};

export default MainLayout;
