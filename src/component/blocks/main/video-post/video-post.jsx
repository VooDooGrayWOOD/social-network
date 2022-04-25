import React from "react";
import "../../../assets/scss/embed.scss";
import "../../../assets/scss/article-post.scss";

const videoPost = () => {
  return (
    <>
      <article className="post">
        <div className="post_header post__header--video">
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/EPE6pVVdO_4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="post_content">
          <h2 className="post_title">
            <a href="/some/valid/uri">Купил новый ноутбук за 150 000 руб</a>
          </h2>
        </div>
        <div className="post_footer">
          <ul className="post_data">
            <li className="post_data-item">
              <time dateTime="2022-09-28 19:24">28.09.2022</time>
            </li>
            <li className="post_data-item">
              <a href="/some/valid/uri">продвижение видео</a>
            </li>
          </ul>

          <a href="/some/valid/uri" className="post_read">
            оставить комментарий
          </a>
        </div>
      </article>
    </>
  );
};

export default videoPost;
