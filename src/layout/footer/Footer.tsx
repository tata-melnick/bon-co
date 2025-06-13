import React from "react";
import { observer } from "mobx-react-lite";

import footerLogo from "../../assets/bon-co-footer-logo.svg";
import footerSupport from "../../assets/footer-support.png";
import footerSupportMobile2 from "../../assets/support-logo.png";
import footerSupportMobile1 from "../../assets/support-logo-mobile.png";
import { ExtLink, Link } from "../../common";
import { routes } from "../../constants";
import { useUiState } from "../../uiState";

import styles from "./Footer.module.css";
import { Instagram, Telegram, WhatsApp } from "./icons";

export const Footer = observer(() => {
    const { isDesktop, isMobile } = useUiState();

    return (
        <>
            <div className={styles.footer}>
                <nav className={styles.nav}>
                    <Link to={routes.company}>О компании /</Link>
                    <Link to={routes.gallery}>Галерея товаров /</Link>
                    <Link to={routes.reviews}>Отзывы</Link>
                </nav>
                {isDesktop && (
                    <Link to={routes.main}>
                        <img src={footerLogo} alt="Логотип компании BON & CO" />
                    </Link>
                )}
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
                <img
                    className={styles.supportImg}
                    src={isDesktop ? footerSupport : footerSupportMobile2}
                    alt="Разработанно при поддержке мой бизнес"
                />
                {isMobile && (
                    <img
                        className={styles.supportImg}
                        src={footerSupportMobile1}
                        alt="Разработанно при поддержке мой бизнес"
                    />
                )}
            </div>
        </>
    );
});
