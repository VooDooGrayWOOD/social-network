import React from "react";
import "../../../assets/scss/article-post.scss";

const articlePost = () => {
  return (
    <article className="post">
      <div className="post_header  post_header--preview">
        <a href="post.html">
          <img
            className="post_preview"
            src="../images/post-2.jpg"
            alt="Как писать код быстро и безблоезненно?"
          />
        </a>
      </div>

      <div className="post_content">
        <h2 className="post_title">
          <a href="post.html">Как писать код быстро и безблоезненно?</a>
        </h2>
        <p className="post_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit.
          Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce
          arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat
          massa. Egestas ornare vel volutpat.
        </p>
      </div>

      <div className="post_footer">
        <ul className="post_data">
          <li className="post_data-item">
            <time dateTime="2020-06-21">21.06.2020</time>
          </li>
          <li className="post_data-item">
            <a href="#">создание сайтов</a>
          </li>
        </ul>
        <a className="post_read" href="post.html">
          читать
        </a>
      </div>
    </article>
  );
};

export default articlePost;
