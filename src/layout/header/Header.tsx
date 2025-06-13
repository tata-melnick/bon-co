import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import name from "../../assets/bon-co-name.svg";
import logo from "../../assets/bon-con-logo.svg";
import { ExtLink, Link } from "../../common";
import { routes } from "../../constants";
import { useUiState } from "../../uiState";

import styles from "./Header.module.css";

export const Header = observer(() => {
    const { isMobile } = useUiState();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen && !isMobile) setIsOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);

    return (
        <>
            <div className={styles.topLine}>
                <Link to={routes.main}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Логотип компании BON & CO" />
                        <img src={name} alt="BON & CO" />
                    </div>
                </Link>
            </div>
            <div className={styles.menu}>
                <nav
                    onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
                    className={isMobile ? `${styles.mobileMenu} ${isOpen ? styles.open : ""}` : styles.nav}
                >
                    <Link to={routes.company}>О компании</Link>
                    <Link to={routes.gallery}>Галерея товаров</Link>
                    <Link to={routes.reviews}>Отзывы</Link>
                    <Link to={routes.contacts}>Контакты</Link>
                </nav>
                <ExtLink className={styles.call} href="tel:88000000000">
                    Связаться
                </ExtLink>
                {isMobile && (
                    <div className={styles.burgerContainer} onClick={() => setIsOpen(!isOpen)}>
                        <div className={styles.burger} />
                    </div>
                )}
            </div>
        </>
    );
});
