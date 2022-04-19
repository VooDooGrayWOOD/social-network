import React from "react";
import AddPost from "./add-post/add-post";
import "../../assets/scss/main.scss";

import ArticlePost from "./article-post/article-post";
// import VideoPost from "./video-post/video-post";
// import ArticlePost2 from "./article-post-2/article-post-2";

const main = () => {
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="stories">
                        <div className="stories__item">
                            <img
                                className="stories__preview"
                                src="../images/stories/stories-1.jpg"
                                alt=""
                            />
                            <div className="stories__title">
                                Отдыхаю на природе
                            </div>
                            <time
                                className="stories__date"
                                dateTime="2022-09-21 12:22"
                            >
                                29.09.2022
                            </time>
                        </div>
                        <div className="stories__item">
                            <img
                                className="stories__preview"
                                src="../images/stories/stories-2.jpg"
                                alt=""
                            />
                            <div className="stories__title">
                                Заканчиваю сложный проект
                            </div>
                            <time
                                className="stories__date"
                                dateTime="2022-10-02 12:50"
                            >
                                02.10.2022
                            </time>
                        </div>
                        <div className="stories__item">
                            <img
                                className="stories__preview"
                                src="../images/stories/stories-3.jpg"
                                alt=""
                            />
                            <div className="stories__title">
                                Переехал в новую квартиру
                            </div>
                            <time
                                className="stories__date"
                                dateTime="2022-11-15 18:32"
                            >
                                15.11.2022
                            </time>
                        </div>
                        <div className="stories__item">
                            <img
                                className="stories__preview"
                                src="../images/stories/stories-4.jpg"
                                alt=""
                            />
                            <div className="stories__title">Осень пришла</div>
                            <time
                                className="stories__date"
                                dateTime="2022-11-118 17:02"
                            >
                                18.11.2022
                            </time>
                        </div>
                    </div>
                    <AddPost />
                    <ArticlePost />
                    {/* <VideoPost />
                    <ArticlePost2 /> */}
                </div>
                <ul className="pagination">
                    <li className="pagination__item">
                        <a className="pagination__link" href="/some/valid/uri">&lt;</a>
                    </li>
                    <li className="pagination__item">
                        <a className="pagination__link" href="/some/valid/uri">1</a>
                    </li>
                    <li className="pagination__item">
                        <a className="pagination__link active" href="/some/valid/uri">2</a>
                    </li>
                    <li className="pagination__item">
                        <a className="pagination__link" href="/some/valid/uri">3</a>
                    </li>
                    <li className="pagination__item">
                        <a className="pagination__link" href="/some/valid/uri">&gt;</a>
                    </li>
                </ul>
            </main>
        </>
    );
};

export default main;
