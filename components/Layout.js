import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LeftSidebar from "./LeftSidebar";
import MobileNavBar from "./NavBar/MobileNavBar";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children, about }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Bilal Afzaal</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="lg:max-w-[1280px] md:max-w-[960px] h-screen sm:max-w-[720px] max-w-full  mx-auto lg:py-[60px] lg:mt-0 mt-[30px] px-[12px] main-layout">
        <div className="lg:flex ">
          <LeftSidebar about={about} />
          <div className="right-nav relative basis-[80%] h-full border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] p-[30px] transition-all duration-[0.3s] ease-in-out">
            <NavBar />
            <div className="main">{children}</div>
          </div>
          <div className="spacer invisible h-[64px]"> . </div>
        </div>
      </div>

      <MobileNavBar />
    </>
  );
};

export default Layout;
