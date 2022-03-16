import Head from "next/head";

import React from "react";
import LeftSidebar from "./LeftSidebar";
import MobileNavBar from "./NavBar/MobileNavBar";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bilal Afzaal</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="lg:max-w-[1280px] md:max-w-[960px] sm:max-w-[720px] max-w-full h-[calc(100vh-64px)] mx-auto lg:py-[64px] mt-[30px] px-[12px] main-layout">
        <div className="lg:flex ">
          <LeftSidebar />
          <div className="right-nav relative basis-[80%] h-full border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] p-[30px] transition-all duration-[0.3s] ease-in-out">
            <NavBar />
            <div className="main">{children}</div>
          </div>
        </div>
      </div>
      <MobileNavBar />
    </>
  );
};

export default Layout;
