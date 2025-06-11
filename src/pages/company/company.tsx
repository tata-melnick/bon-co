import React from "react";

import hero from "./assets/hero.png";
import styles from "./company.module.css";
import { About, Services, Why } from "./components";

export const Company = () => {
    return (
        <div className={styles.container}>
            <img className={styles.hero} src={hero} alt="Кухня" />
            <About />
            <Services />
            <Why />
        </div>
    );
};
