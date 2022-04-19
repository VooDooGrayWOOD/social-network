import React from "react";
import "../../../assets/scss/article-post.scss";

const articlePost = () => {
    return (
        <article class="post">
            <div class="post_header  post_header--preview">
                <a href="post.html">
                    <img
                        class="post_preview"
                        src="assets/images/post-2.jpg"
                        alt="Как писать код быстро и безблоезненно?"
                    />
                </a>
            </div>

            <div class="post_content">
                <h2 class="post_title">
                    <a href="post.html">
                        Как писать код быстро и безблоезненно?
                    </a>
                </h2>
                <p class="post_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Elementum volutpat orci turpis urna. Et vestibulum, posuere
                    tortor lacinia sit. Sagittis porttitor orci auctor in at
                    tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
                    nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel
                    volutpat.
                </p>
            </div>

            <div class="post_footer">
                <ul class="post_data">
                    <li class="post_data-item">
                        <time datetime="2020-06-21">21.06.2020</time>
                    </li>
                    <li class="post_data-item">
                        <a href="#">создание сайтов</a>
                    </li>
                </ul>
                <a class="post_read" href="post.html">
                    читать
                </a>
            </div>
        </article>
    );
};

export default articlePost;
