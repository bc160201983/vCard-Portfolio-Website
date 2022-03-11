import Head from "next/head";
import Image from "next/image";
import ItemInfo from "../components/ItemInfo";
import styles from "../styles/Home.module.css";
import { FiMail, FiSmartphone, FiCalendar } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { data } from "../components/data";
import Info from "../components/Main/Info";
export default function Home() {
  return (
    <div className="flex w-full">
      <div className="left-nav border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] basis-[20%] p-[30px] flex flex-col justify-center items-center transition-all duration-[0.3s] ease-in-out">
        <div className="info-name flex flex-col justify-center items-center">
          <div className="image flex justify-center items-center h-[calc(100%-3.75rem)] w-[calc(100%-3.75rem)] text-[#d6d6d6] image-bg rounded-[32px]">
            <Image
              width={177}
              height={173}
              src="https://art-template.ru/vcard4/assets/images/my-avatar.png"
              alt="profile photo"
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
      <div className="right-nav relative basis-[80%] w-full h-full border border-[#383838] nav-shadow mx-3 rounded-[20px] bg-[#1E1E1F] p-[30px] transition-all duration-[0.3s] ease-in-out">
        <div className="nav-container h-[64px] right-0 top-0 absolute bg-[#2a2a2b] tex-[15px] font-[500] text-[#d6d6d6] px-[38px] border border-[#383838]">
          <ul className="flex items-center justify-center h-full overflow-hidden">
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">
              About
            </li>
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">
              Resume
            </li>
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">
              Portfolio
            </li>
            <li className="mr-[2.75rem] nav-item-hover cursor-pointer">Blog</li>
            <li className="nav-item-hover cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="title pb-2">
          <div className="text-[32px] text-white font-[600] mb-[37px]">
            About Me
          </div>
          <p className="text-[16px] font-[300] text-[#D6d6d6] mb-4">
            I'm Creative Director and UI/UX Designer from Sydney, Australia,
            working in web development and print media. I enjoy turning complex
            problems into simple, beautiful and intuitive designs.
          </p>
          <p className="text-[16px] font-[300] text-[#D6d6d6] mb-4">
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </div>
        <div className="text-[24px] text-white font-[600] mt-4 mb-5">
          What I'm Doing
        </div>
        <div className="grid-info">
          <div className="text-[#d6d6d6] px-3 grid grid-cols-2">
            {data.map((item) => (
              <Info {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
