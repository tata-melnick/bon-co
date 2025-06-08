import React from "react";

import name from "../../assets/bon-co-name.svg";
import logo from "../../assets/bon-con-logo.svg";
import { ExtLink, Link } from "../../common";
import { routes } from "../../constants";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <>
            <div className={styles.topLine}>
                <Link to={routes.main}>
                    <img className={styles.logo} src={logo} alt="Логотип компании BON & CO" />
                    <img src={name} alt="BON & CO" />
                </Link>
            </div>
            <div className={styles.menu}>
                <nav className={styles.nav}>
                    <Link to={routes.company}>О компании</Link>
                    <Link to={routes.gallery}>Галерея товаров</Link>
                    <Link to={routes.reviews}>Отзывы</Link>
                    <Link to={routes.contacts}>Контакты</Link>
                </nav>
                <ExtLink className={styles.call} href="tel:88000000000">
                    Связаться
                </ExtLink>
            </div>
        </>
    );
};
