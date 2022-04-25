import React from "react";
import "../../../assets/scss/article-post.scss";

const articlePost2 = () => {
  return (
    <>
      <article className="post">
        <div className="post_header post_header--preview">
          <a className="post_preview" href="/some/valid/uri">
            <img
              src="../images/post-3.jpg"
              alt="Как я сходил на FrontEnd Conf 2022"
            />
          </a>
        </div>
        <div className="post_content">
          <h2 className="post_title">
            <a href="#">Как я сходил на FrontEnd Conf 2022</a>
          </h2>
          <p className="post_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
            placeat laudantium? Repellat nam harum magni perferendis maxime
            deleniti repudiandae in beatae ut, fugiat sed praesentium omnis,
            excepturi labore, incidunt assumenda.
          </p>
        </div>
        <div className="post_footer">
          <ul className="post_data">
            <li className="post_data-item">
              <time dateTime="2022-10-20 19:24">20.10.2022</time>
            </li>
            <li className="post_data-item">
              <a href="/some/valid/uri">конференция</a>
            </li>
          </ul>

          <a href="/some/valid/uri" className="post_read">
            читать
          </a>
        </div>
      </article>
    </>
  );
};

export default articlePost2;
