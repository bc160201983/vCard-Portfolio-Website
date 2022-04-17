import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import LeftSidebar from "./LeftSidebar";
import MobileNavBar from "./NavBar/MobileNavBar";
import NavBar from "./NavBar/NavBar";
import Seo from "./Seo";

const Layout = ({ children, about }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Muhammad Bilal</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Muhammad Bilal" />
        <meta property="og:site_name" content="Muhammad Bilal Portfolio" />
        <meta property="og:url" content="https://bilalafzaal.vercel.app/" />
        <meta
          property="og:description"
          content="Muhammad Bilal is a Software Engineer ,who likes building stuff related to web."
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/vcard-b7a06.appspot.com/o/Screenshot%202022-04-09%20213143.png?alt=media&amp;token=dc0b9747-6827-46b7-91a9-96d3f8767387"
        />
      </Head>

      <div className="lg:max-w-[1280px] md:max-w-[960px] h-screen sm:max-w-[720px] max-w-full  mx-auto lg:py-[60px] lg:mt-0 mt-[30px] px-[12px] main-layout">
        <div className="lg:flex ">
          <LeftSidebar aboutData={about} />
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
