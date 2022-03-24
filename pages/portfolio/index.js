import React from "react";
import PortfolioList from "../../components/Portfolio/PortfolioList.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/firebase";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

import { list } from "postcss";
import PortfolioCategory from "../../components/Portfolio/PortfolioCategory";
import Link from "next/link";
import PageTitle from "../../components/PageTitle.jsx";
import { fadeInUp, stagger } from "../../animation.js";

const portfolio = ({ portfolio }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="title pb-1">
        <PageTitle title={"portfolio"} />
      </div>
      <PortfolioCategory />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="portfolio-list  portfolio-grid transition-all duration-[0.3s] ease-in-out grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 cursor-pointer"
      >
        {portfolio.map((item, index) => {
          return (
            <motion.div key={item.id} variants={fadeInUp}>
              <a>
                <PortfolioList {...item} />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default portfolio;
export async function getStaticProps(context) {
  let portfolio = [];

  const querySnapshot = await getDocs(collection(db, "portfolio"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    portfolio.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return {
    props: { portfolio }, // will be passed to the page component as props
  };
}
