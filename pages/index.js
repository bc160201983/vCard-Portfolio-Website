import Head from "next/head";
import Image from "next/image";
import ItemInfo from "../components/ItemInfo";
import styles from "../styles/Home.module.css";

import { data } from "../components/data";
import Info from "../components/Main/About/Info";

export default function Home() {
  return (
    <>
      <div className="title pb-1">
        <div className="text-[32px] text-white font-[600] mb-[25px]">
          About Me
          <h1 className="title-separate mt-2"></h1>
        </div>
        <p className="text-[16px] font-[300] text-[#D6d6d6] mb-4">
          I'm Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs
        </p>
        <p className="text-[16px] font-[300] text-[#D6d6d6] mb-4">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </div>
      <div className="text-[24px] text-white font-[600] mt-4 mb-5">
        What I'm Doing
      </div>
      <div className="grid-info">
        <div className="text-[#d6d6d6] grid tab:grid-cols-2 grid-cols-1">
          {data.map((item) => (
            <Info key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
