import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div>
      <div className="nav-container tab:block hidden h-[64px] right-0 top-0 absolute bg-[#2a2a2b] tex-[15px] font-[500] text-[#d6d6d6] px-[38px] border border-[#383838]">
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
    </div>
  );
};

export default NavBar;
