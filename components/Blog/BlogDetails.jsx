import React from "react";
import Image from "next/image";
import Comments from "./Comments";
const BlogDetails = () => {
  return (
    <div>
      <header className="mt-[1rem] text-center">
        <h1 className="title title--h1 text-[40px] mb-[1.5rem] text-white font-semibold">
          Web design Weekly #38
        </h1>
        <div className="post-caption mx-auto mb-[2rem] w-[90%]">
          <p className="w-full">
            Above all, think of life as a prototype. We can conduct experiments,
            make discoveries, and change our perspectives. We can look for
            opportunities to turn processes into projects that have tangible
            outcomes.
          </p>
        </div>
        <div className="h-[25rem] ml-[-30px] mr-[-30px] relative mb-[2.5rem]">
          <Image
            layout="fill"
            objectFit="cover"
            className="object-cover object-center h-full w-full"
            src="https://art-template.ru/vcard4/assets/images/news/image_02.jpg"
            alt=""
          />
        </div>
      </header>
      <div className="post-caption mx-auto mb-[2rem] w-[90%]">
        <p className="w-full">
          We can learn how to take joy in the things we create whether they take
          the form of a fleeting experience or an heirloom that will last for
          generations. We can learn that reward comes in creation and
          re-creation.
        </p>
        <p className="w-full">
          It is not enough that we build products that function, that are
          understandable and usable, we also need to build products that bring
          joy and excitement, pleasure and fun, and, yes, beauty to people’s
          lives. Creativity is to discover a question that has never been asked.
        </p>
      </div>
      <footer className="footer-post">
        <a className="footer-post__share" href="http://facebook.com">
          <i className="font-icon icon-facebook"></i>
          <span>Facebook</span>
        </a>
        <a className="footer-post__share" href="http://twitter.com">
          <i className="font-icon icon-twitter"></i>
          <span>Twitter</span>
        </a>
        <a className="footer-post__share" href="http://linkedin.com">
          <i className="font-icon icon-linkedin2"></i>
          <span>Linkedin</span>
        </a>
      </footer>
      <Comments />
    </div>
  );
};

export default BlogDetails;
