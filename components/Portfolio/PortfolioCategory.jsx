import React, { useState } from "react";
import tw from "tailwind-styled-components";
const Ul = tw.ul`flex`;
const UlMobile = tw.ul`absolute w-full rounded-2xl border border-[#383838] left-[0px] top-[55px] bg-[#1E1E1F] max-h-[600px] py-[9px] pb-[16px] z-50`;
const Li = tw.li`pr-[19px] font-medium cursor-pointer capitalize nav-item-hover`;
const LiMobile = tw.li`pr-[19px] capitalize font-medium cursor-pointer  py-2 px-4 hover:bg-[#2A2A2B] hover:text-[#FFDB6E] `;
const MobileCategory = tw.div`sm:hidden block`;
const PortfolioCategory = () => {
  const categories = ["all", "Web Design", "Applications", "Web Development"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("all");
  const handleCategory = (cat) => {
    setSelectedCat(cat);
    console.log("clicked", cat);
  };
  return (
    <div>
      <div className="categories pb-8 sm:block hidden">
        <div className="">
          <Ul className="">
            <Li>All</Li>
            <Li>Web Design</Li>
            <Li>Applications</Li>
            <Li>Web Development</Li>
          </Ul>
        </div>
      </div>
      <div className="categories pb-8 sm:hidden block ">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative rounded-2xl px-4 py-4 w-full border border-[#383838]  cursor-pointer"
        >
          <span className="py-[8px] z-[1] capitalize">{selectedCat}</span>
          {isOpen && (
            <UlMobile>
              {categories.map((cat, index) => {
                return (
                  <LiMobile onClick={() => handleCategory(cat)} key={index}>
                    {cat}
                  </LiMobile>
                );
              })}
            </UlMobile>
          )}
        </div>
      </div>
      {/* <MobileCategory>
        <select
          className="w-full mb-[32px] py-4 bg-[#1E1E1F] px-4 rounded-[14px] border border-[#383838] text-[#d6d6d6] after:px-2 py-4"
          name="cars"
          id="cars"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </MobileCategory> */}
    </div>
  );
};

export default PortfolioCategory;
