import React from "react";
import "../../assets/scss/header.scss";

const header = () => {
    return (
        <>
            <header className="header">
            <div className="header_left">
    <nav className="nav">
        <ul className="nav_list">
            <li className="nav_item">
                <a className="nav_link" href="index.html">Главная</a>
            </li>
            <li className="nav_item">
                <a className="nav_link has-subnav" href="#">Статьи</a>

                <ul className="subnav">
                    <li>
                        <a className="subnav_link" href="#">Создание сайтов</a> 
                    </li>
                    <li>
                        <a className="subnav_link" href="#">Интернет маркетинг</a>
                    </li>
                    <li>
                        <a className="subnav_link" href="#">Продвижение видео</a>
                    </li>
                </ul>
                
            </li>
            <li className="nav_item">
                <a className="nav_link" href="text.html">Обо мне</a>
            </li>
            <li className="nav_item">
                <a className="nav_link" href="text.html">Реклама</a>
            </li>
        </ul>
    </nav>

    <button className="burger" type="button" id="sidebarToggle">
        <span>Открыть навигацию</span>
    </button>

    </div>
    <div className="header_right">
        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_item">
                    <a className="nav_link" href="profile.html">Профиль</a>
                </li>
                <li className="nav_item">
                    <a className="nav_link" href="/">Выйти</a>
                </li>
            </ul>
        </nav>
        <form className="search" action="search.html" method="get">
            <input className="search_input" type="text" placeholder="Поиск по блогу" />
        </form>
    </div>
</header>

        </>
    )
}

export default header;