import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { GlobalContext } from "../../../components/Context";
import { db } from "../../../components/firebase";
import PageTitle from "../../../components/PageTitle";
import PortfolioDetail from "../../../components/Portfolio/PortfolioDetail.jsx";

const index = ({ portfolio }) => {
  const { handleBack } = GlobalContext();
  return (
    <div>
      <div className="title pb-1">
        <PageTitle title={"portfolio"} />
      </div>
      <div
        onClick={handleBack}
        className="btn-back flex justify-start items-center cursor-pointer"
      >
        <div className="icon-back mr-2">
          <IoMdArrowBack />
        </div>
        <div className="text-back">Back Portfolio</div>
      </div>
      <PortfolioDetail portfolioData={portfolio} />
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const { params } = context;

  const portRef = doc(db, "portfolio", params.slug);
  const docSnap = await getDoc(portRef);
  const portfolio = docSnap.data();

  return {
    props: { portfolio }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  let portfolio = [];

  const querySnapshot = await getDocs(collection(db, "portfolio"));
  querySnapshot.forEach((doc) => {
    portfolio.push({
      id: doc.id,
    });
  });

  const paths = portfolio.map((port) => ({
    params: { slug: port.id },
  }));

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
