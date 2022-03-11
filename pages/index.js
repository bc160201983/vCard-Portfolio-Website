import Head from "next/head";
import Image from "next/image";
import ItemInfo from "../components/ItemInfo";
import styles from "../styles/Home.module.css";
import { FiMail, FiSmartphone, FiCalendar } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
export default function Home() {
  return (
    <div className="flex">
      <div className="left-nav border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] basis-[20%] p-[30px] flex flex-col justify-center items-center transition-all duration-[0.3s] ease-in-out">
        <div className="info-name flex flex-col justify-center items-center">
          <div className="image h-[calc(100%-3.75rem) w-[calc(100%-3.75rem)] text-[#d6d6d6]">
            <img
              src="https://art-template.ru/vcard4/assets/images/my-avatar.png"
              alt=""
            />
          </div>
          <div>
            <div className="text-[26px] mb-[16px] font-medium text-white">
              Bilal Afzaal
            </div>
            <div className="py-2 px-4 text-sm font-light bg-[#2a2a2b] text-white rounded-lg whitespace-nowrap">
              Web Developer
            </div>
          </div>
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
      <div className="right-nav basis-[80%] w-full h-full bg-[#1e1e1e]"></div>
    </div>
  );
}
