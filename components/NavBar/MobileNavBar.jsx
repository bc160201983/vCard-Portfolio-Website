import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const MobileNavBar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="nav-container-mobile lg:hidden block h-[64px] fixed w-full bottom-0 sm:text-[14px]  font-[500] text-[#d6d6d6] px-[38px] border border-[#383838]">
        <ul className="flex items-center justify-center h-full">
          <Link href={"/"} passHref>
            <li
              className={`mr-[30px] nav-item-hover cursor-pointer ${
                router.pathname == "/" ? `active` : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link href={"/resume"} passHref>
            <li
              className={`mr-[30px] nav-item-hover cursor-pointer ${
                router.pathname == "/resume" ? `active` : ""
              }`}
            >
              Resume
            </li>
          </Link>
          <Link href={"/portfolio"} passHref>
            <li
              className={`mr-[30px] nav-item-hover cursor-pointer ${
                router.pathname == "/portfolio" ? `active` : ""
              }`}
            >
              Portfolio
            </li>
          </Link>
          <li className="mr-[30px] nav-item-hover cursor-pointer">Blog</li>
          <li className="nav-item-hover cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavBar;
