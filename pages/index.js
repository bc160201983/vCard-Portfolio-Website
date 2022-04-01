import Head from "next/head";
import Image from "next/image";
import ItemInfo from "../components/ItemInfo";
import styles from "../styles/Home.module.css";

import { data } from "../components/data";
import Info from "../components/About/Info";
import PageTitle from "../components/PageTitle";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";

export default function Home({ about }) {
  return (
    <>
      <div className="title pb-1">
        <PageTitle title={"About Me"} />

        <div
          className="ql-editor text-[15px] font-[300] text-[#D6d6d6] mb-4"
          dangerouslySetInnerHTML={{
            __html: about && about.map((a) => a.description),
          }}
        />

        {/* <p className="text-[16px] font-[300] text-[#D6d6d6] mb-4">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p> */}
      </div>
      <div className="text-[24px] text-white font-[600] mt-4 mb-5">
        What I'm Doing
      </div>
      <div className="grid-info">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="text-[#d6d6d6] grid lg:grid-cols-2 grid-cols-1"
        >
          {data.map((item) => (
            <motion.div key={item.id} variants={fadeInUp} className="lg:pr-5">
              <Info {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
export async function getStaticProps(context) {
  const about = [];

  const querySnapshot = await getDocs(collection(db, "about"));
  querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    // doc.data() is never undefined for query doc snapshots
    about.push({ ...doc.data(), id: doc.id });
  });

  return {
    props: { about }, // will be passed to the page component as props
  };
}
