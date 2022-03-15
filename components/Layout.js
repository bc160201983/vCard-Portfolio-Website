import Head from "next/head";
import Link from "next/Link";
import React from "react";
import LeftSidebar from "./LeftSidebar";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bilal Afzaal</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="laptop:max-w-7xl max-w-[960px]  h-[100vh] mx-auto py-[64px] px-[12px">
        <div className="laptop:flex">
          <LeftSidebar />
          <div className="right-nav relative basis-[80%] h-full border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] p-[30px] transition-all duration-[0.3s] ease-in-out">
            <NavBar />
            <div className="">{children}</div>
          </div>
        </div>
      </div>
      <div className="nav-container-mobile tab:hidden block h-[64px] fixed w-full bottom-0 text-[15px] font-[500] text-[#d6d6d6] px-[38px] border border-[#383838]">
        <ul className="flex items-center justify-center h-full overflow-hidden">
          <Link href={"/"} passHref>
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">
              About
            </li>
          </Link>
          <Link href={"/resume"} passHref>
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">
              Resume
            </li>
          </Link>
          <Link href={"/portfolio"} passHref>
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">
              Portfolio
            </li>
          </Link>
          <li className="mr-[2.75rem] nav-item-hover cursor-pointer">Blog</li>
          <li className="nav-item-hover cursor-pointer">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
