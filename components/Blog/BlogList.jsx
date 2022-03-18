import React from "react";

const BlogList = () => {
  return (
    <div>
      <article class="news-item box box--s2">
        <div class="news-item__image-wrap">
          <a class="news-item__link" href="single-post.html"></a>
          <img
            class="cover ls-is-cached lazyloaded"
            src="https://art-template.ru/vcard4/assets/images/news/news-1.jpg"
            alt=""
          />
        </div>
        <div class="news-item__caption">
          <div class="news-item__date">
            <span>Design</span>Sep 16, 2021
          </div>
          <h2 class="title title--h2">
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
