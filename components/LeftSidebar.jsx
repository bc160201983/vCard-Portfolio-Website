import React, { useState } from "react";
import ItemInfo from "./ItemInfo";
import Image from "next/image";
import { FiMail, FiSmartphone, FiCalendar } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FiLinkedin, FiGithub, FiInstagram, FiBookOpen } from "react-icons/fi";

const LeftSidebar = ({ aboutData }) => {
  const [about, setAbout] = useState(aboutData);
  return (
    <div>
      <div className="left-nav sticky top-[64px] left-0 scroll-smooth border border-[#383838] nav-shadow mx-3 lg:h-[770px] h-[182px]  rounded-[20px] bg-[#1E1E1F] lg:basis-[20%] p-[30px] lg:mb-0 mb-[30px] flex lg:flex-col lg:justify-center justify-start items-center transition-all duration-[0.3s] ease-in-out">
        <div className="info-name flex lg:flex-col justify-center items-center">
          <div className="image lg:block hidden  justify-center items-center  lg:w-[calc(100%-3.75rem)] text-[#d6d6d6] image-bg rounded-[32px]">
            <Image
              className=""
              width={177}
              height={173}
              src="https://art-template.ru/vcard4/assets/images/my-avatar.png"
              alt="profile photo"
            />
          </div>
          <div className="image lg:hidden block justify-center items-center lg:w-[calc(100%-3.75rem)]  text-[#d6d6d6] image-bg rounded-[32px]">
            <Image
              className=""
              width={120}
              height={120}
              src="https://art-template.ru/vcard4/assets/images/my-avatar.png"
              alt="profile photo"
            />
          </div>

          <div className="flex flex-col justify-start items-center">
            {about &&
              about.map((a, index) => (
                <div
                  key={index}
                  className="title-name text-[26px] mb-[16px] whitespace-nowrap font-medium text-white"
                >
                  {a.title}
                </div>
              ))}

            {about &&
              about.map((a, index) => (
                <div
                  key={index}
                  className="title-pro py-2 px-4 capitalize text-sm text-center font-light bg-[#2a2a2b] text-white rounded-lg  mb-2"
                >
                  {a.captionRef}
                </div>
              ))}

            {about &&
              about.map((a, index) => (
                <a
                  key={index}
                  rel="noreferrer"
                  target="_blank"
                  href={a.image}
                  className="title-pro cursor-pointer hover:opacity-60 text-center py-2 px-2 text-sm font-light bg-[#2a2a2b] text-white rounded-lg whitespace-nowrap"
                >
                  Download CV
                </a>
              ))}
          </div>
          <div className="hid hidden lg:block">
            <div className="sepration my-8 w-full bg-[#383838] h-[1px] text-[#d6d6d6]"></div>
            <div className="detail-info">
              <ItemInfo
                title={"email"}
                info={"mbilalafzaal07@gmail.com"}
                icons={<FiMail className="h-[18px] w-[18px] text-[#ffdb6e]" />}
              />
              <ItemInfo
                title={"Education"}
                info={"BS Computer Science"}
                icons={
                  <FiBookOpen className="h-[18px] w-[18px] text-[#ffdb6e]" />
                }
              />
              <ItemInfo
                title={"birthday"}
                info={"December 12"}
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

            {about &&
              about.map((a, index) => {
                return (
                  <div
                    key={index}
                    className="social-icons flex justify-evenly w-full items-center"
                  >
                    <div className="facebook cursor-pointer">
                      <a rel="noreferrer" href={a.linkedInUrl} target="_blank">
                        <FiLinkedin className="text-[#d6d6d6] text-[18px]" />
                      </a>
                    </div>
                    <div className="facebook cursor-pointer">
                      <a rel="noreferrer" href={a.gitHubUrl} target="_blank">
                        <FiGithub className="text-[#d6d6d6] text-[18px]" />
                      </a>
                    </div>
                    <div className="facebook cursor-pointer">
                      <a rel="noreferrer" href={a.instaUrl} target="_blank">
                        <FiInstagram className="text-[#d6d6d6] text-[18px]" />
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
