import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <div>
      <div className="nav-container lg:block hidden h-[64px] right-0 top-0 absolute bg-[#2a2a2b] tex-[15px] font-[500] text-[#d6d6d6] px-[38px] border border-[#383838]">
        <ul className="flex items-center justify-center h-full overflow-hidden">
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
                router.pathname == "/portfolio" ||
                router.pathname == "/portfolio/[slug]"
                  ? `active`
                  : ""
              }`}
            >
              Portfolio
            </li>
          </Link>
          <Link href={"/blog"} passHref>
            <li
              className={`mr-[30px] nav-item-hover cursor-pointer ${
                router.pathname == "/blog" || router.pathname == "/blog/[slug]"
                  ? `active`
                  : ""
              }`}
            >
              Blog
            </li>
          </Link>
          <Link href={"/contact"} passHref>
            <li
              className={`mr-[30px] nav-item-hover cursor-pointer ${
                router.pathname == "/contact" ? `active` : ""
              }`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
