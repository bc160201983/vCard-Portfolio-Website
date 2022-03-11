import Head from "next/head";
import React from "react";
import LeftSidebar from "./LeftSidebar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Online Grocery Store in Faisalabad - Fairo.pk</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-7xl mx-auto py-[64px] px-[12px]">
        <div className="flex w-full">
          <LeftSidebar />
          <div className="right-nav relative basis-[80%] w-full h-full border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] p-[30px] transition-all duration-[0.3s] ease-in-out">
            <NavBar />
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
