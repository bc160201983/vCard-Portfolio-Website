import React from "react";
import Portfolio from "../../components/portfolio/Portfolio";

import tw from "tailwind-styled-components";
import { list } from "postcss";
import PortfolioCategory from "../../components/Portfolio/PortfolioCategory";
import Link from "next/link";
const PortfolioWrapper = tw.div`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 cursor-pointer `;

const portfolio = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="title pb-1">
        <div className="text-[32px] text-white font-[600] mb-[25px] page-title">
          Portfolio
          <h1 className="title-separate mt-2"></h1>
        </div>
      </div>
      <PortfolioCategory />
      <PortfolioWrapper className="portfolio-list  portfolio-grid transition-all duration-[0.3s] ease-in-out">
        {list.map((item, index) => {
          return (
            <Link key={index} href={`/portfolio/${index + 1}`} passHref>
              <a>
                <Portfolio />
              </a>
            </Link>
          );
        })}
      </PortfolioWrapper>
    </>
  );
};

export default portfolio;
