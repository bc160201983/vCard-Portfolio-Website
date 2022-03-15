import React from "react";
import ItemInfo from "./ItemInfo";
import Image from "next/image";
import { FiMail, FiSmartphone, FiCalendar } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const LeftSidebar = () => {
  return (
    <div>
      <div className="left-nav border border-[#383838] nav-shadow mx-3 laptop:h-full h-[182px] rounded-[20px] bg-[#1E1E1F] laptop:basis-[20%] p-[30px] laptop:mb-0 mb-[30px] flex laptop:flex-col laptop:justify-center justify-start items-center transition-all duration-[0.3s] ease-in-out">
        <div className="info-name flex laptop:flex-col justify-center items-center">
          <div className="image laptop:block hidden  justify-center items-center laptop:h-[calc(100%-3.75rem)] laptop:w-[calc(100%-3.75rem)] text-[#d6d6d6] image-bg rounded-[32px]">
            <Image
              className=""
              width={177}
              height={173}
              src="https://art-template.ru/vcard4/assets/images/my-avatar.png"
              alt="profile photo"
            />
          </div>
          <div className="image laptop:hidden block justify-center items-center laptop:h-[calc(100%-3.75rem)] laptop:w-[calc(100%-3.75rem)] text-[#d6d6d6] image-bg rounded-[32px]">
            <Image
              className=""
              width={120}
              height={120}
              src="https://art-template.ru/vcard4/assets/images/my-avatar.png"
              alt="profile photo"
            />
          </div>
          <div>
            <div className="text-[26px] mb-[16px] whitespace-nowrap font-medium text-white">
              Bilal Afzaal
            </div>
            <div className="py-2 px-4 text-sm font-light bg-[#2a2a2b] text-white rounded-lg whitespace-nowrap">
              Web Developer
            </div>
          </div>
          <div className="hid hidden laptop:block">
            <div className="sepration my-8 w-full bg-[#383838] h-[1px] text-[#d6d6d6]"></div>
            <div className="detail-info">
              <ItemInfo
                title={"email"}
                info={"mbilalafzaal07@gmail.com"}
                icons={<FiMail className="h-[18px] w-[18px] text-[#ffdb6e]" />}
              />
              <ItemInfo
                title={"phone"}
                info={"+92(340) 7719929"}
                icons={
                  <FiSmartphone className="h-[18px] w-[18px] text-[#ffdb6e]" />
                }
              />
              <ItemInfo
                title={"birthday"}
                info={"December 12, 1993"}
                icons={
                  <FiCalendar className="h-[18px] w-[18px] text-[#ffdb6e]" />
                }
              />
              <ItemInfo
                title={"location"}
                info={"Faisalabad, Pakistan"}
                icons={
                  <MdOutlineAddLocationAlt className="h-[18px] w-[18px] text-[#ffdb6e]" />
                }
              />
            </div>
            <div className="social-icons flex justify-evenly w-full items-center">
              <div className="facebook">
                <FiFacebook className="text-[#d6d6d6] text-[18px]" />
              </div>
              <div className="facebook">
                <FiTwitter className="text-[#d6d6d6] text-[18px]" />
              </div>
              <div className="facebook">
                <FiInstagram className="text-[#d6d6d6] text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
