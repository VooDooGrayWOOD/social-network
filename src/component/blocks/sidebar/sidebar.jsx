import React from "react";
import "../../assets/scss/sidebar.scss";

const sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar">
            <div className="sidebar_header">
                <img src="images/sidebar-header.jpg" alt="" />
            </div>

            <div className="sidebar_content">
                <div className="profile">
                    <img
                        className="profile_avatar"
                        src="https://via.placeholder.com/100"
                        alt=""
                    />

                    <div className="profile_header">
                        <div className="profile_name">Сергей Петухов</div>
                        <div className="profile_prof">
                            блог front-end разработчика
                        </div>
                    </div>

                    <ul className="social">
                        <li className="social_item">
                            <a
                                className="social_link"
                                href="https://instagram.com/voodoo_graywood"
                                target="_blank"
                            >
                                <img
                                    src="images/instagram.svg"
                                    alt="Сергей Петухов instagram"
                                />
                            </a>
                        </li>
                        <li className="social_item">
                            <a className="social_link" href="#" target="_blank">
                                <img
                                    src="images/pinterest.svg"
                                    alt="Сергей Петухов pinterest"
                                />
                            </a>
                        </li>
                        <li className="social_item">
                            <a
                                className="social_link"
                                href="https://vk.com/voodoograywood"
                                target="_blank"
                            >
                                <img
                                    src="images/vk.svg"
                                    alt="Сергей Петухов vk"
                                />
                            </a>
                        </li>
                    </ul>

                    <div className="profile_text">
                        <p>
                            Front-end разработчик. Созданием сайтов занимаюсь с
                            2021 года. Стэк: JavaScript, Sass, Gulp, Bootstrap,
                            React.
                        </p>
                    </div>
                </div>
            </div>

            <div className="sidebar_footer">
                <a className="btn  btn--red" href="works.html">
                    Мои работы
                </a>
                <button
                    className="btn  btn--blue"
                    type="button"
                    data-modal="contact-modal"
                >
                    Написать мне
                </button>
            </div>
        </aside>
    );
};

export default sidebar;
