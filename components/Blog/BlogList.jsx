import React from "react";
import Image from "next/image";

const BlogList = () => {
  return (
    <div>
      <article className="news-item box box--s2">
        <div className="news-item__image-wrap">
          <Image
            layout="fill"
            objectFit="cover"
            className="cover ls-is-cached lazyloaded"
            src="https://art-template.ru/vcard4/assets/images/news/news-1.jpg"
            alt=""
          />
        </div>
        <div className="news-item__caption">
          <div className="news-item__date text-[#d6d6d6] mb-[0.75rem] opacity-70">
            <span>Design</span> {"- "}Sep 16, 2021
          </div>
          <h2 className="title blog-title title--h2 text-white">
            <a>Design Conferences in 2019</a>
          </h2>
          <p>
            Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogList;
