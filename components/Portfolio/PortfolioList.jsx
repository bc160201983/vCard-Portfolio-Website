import React from "react";
import Link from "next/link";
import tw from "tailwind-styled-components";
import Image from "next/image";
import { AiOutlineGithub, AiOutlineProject } from "react-icons/ai";

const Portfolio = ({ image, gitHubUrl, websiteUrl, id }) => {
  return (
    <div>
      <div className="gallary-item transition-all duration-[0.3s] ease-in-out">
        <Link href={`/portfolio/${id}`}>
          <a>
            <div className="image-wrap max-h-[12.75rem] h-[12.75rem] relative">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-[16px] img-main-portifolio"
                src={image}
                alt=""
              />
            </div>
          </a>
        </Link>
        <div className="gallary-caption w-full px-2 py-4 flex justify-between">
          <div className="btn-box title font-light text-[#FCFCFC] flex items-center text-lg box box--2">
            <a
              rel="noreferrer"
              href={gitHubUrl}
              target="_blank"
              className="flex items-center px-4 py-2 space-x-3 text-lg rounded-sm"
            >
              <AiOutlineGithub className="h-[18px] w-[18px] text-[#ffdb6e]" />
              <span>Github</span>
            </a>
          </div>
          <div className="btn-box title font-light text-[#FCFCFC] flex items-center text-lg box box--2">
            <a
              rel="noreferrer"
              href={websiteUrl}
              target="_blank"
              className="flex items-center px-4 py-2 space-x-3 text-lg rounded-sm"
            >
              <AiOutlineProject className="h-[18px] w-[18px] text-[#ffdb6e]" />
              <span>Live Site</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
