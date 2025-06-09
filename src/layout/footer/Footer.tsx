import React from "react";

import footerLogo from "../../assets/bon-co-footer-logo.svg";
import footerSupport from "../../assets/footer-support.png";
import { ExtLink, Link } from "../../common";
import { routes } from "../../constants";

import styles from "./Footer.module.css";
import { Instagram, Telegram, WhatsApp } from "./icons";

export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <nav className={styles.nav}>
                    <Link to={routes.company}>О компании /</Link>
                    <Link to={routes.gallery}>Галерея товаров /</Link>
                    <Link to={routes.reviews}>Отзывы</Link>
                </nav>

                <Link to={routes.main}>
                    <img src={footerLogo} alt="Логотип компании BON & CO" />
                </Link>
                <div className={styles.socials}>
                    <ExtLink>
                        <WhatsApp />
                    </ExtLink>
                    <ExtLink>
                        <Telegram />
                    </ExtLink>
                    <ExtLink>
                        <Instagram />
                    </ExtLink>
                </div>
            </div>
            <div className={styles.support}>
                <p>2024 © Бондарев Евгений Владимирович Все права защищены. Политика конфиденциальности</p>
                <img className={styles.supportImg} src={footerSupport} alt="Разработанно при поддержке мой бизнес" />
            </div>
        </>
    );
};
