import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Online Grocery Store in Faisalabad - Fairo.pk</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-7xl mx-auto py-[64px] px-[12px]">
        <div className="">{children}</div>
      </div>
    </>
  );
};

export default Layout;
