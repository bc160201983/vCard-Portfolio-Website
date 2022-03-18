import React from "react";

const BlogList = () => {
  return (
    <div>
      <article className="news-item box box--s2">
        <div className="news-item__image-wrap">
          <a className="news-item__link" href="single-post.html"></a>
          <img
            className="cover ls-is-cached lazyloaded"
            src="https://art-template.ru/vcard4/assets/images/news/news-1.jpg"
            alt=""
          />
        </div>
        <div className="news-item__caption">
          <div className="news-item__date">
            <span>Design</span>Sep 16, 2021
          </div>
          <h2 className="title title--h2">
            <a href="single-post.html">Design Conferences in 2019</a>
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
