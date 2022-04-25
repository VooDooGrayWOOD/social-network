import React from "react";
import "../../../assets/scss/add-post.scss";

const addPost = () => {
  return (
    <div className="add-post">
      <form className="add-post_form" action="/" method="post">
        <textarea
          className="add-post_textarea"
          name="post-text"
          placeholder="Напишите что-нибудь"
          data-autoresize
        ></textarea>
        <div className="add-post_form_actions">
          <label className="add-post_file" for="add-post-file">
            <input type="file" id="add-post-file" />
          </label>
          <button className="add-post_send" type="submit">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default addPost;
