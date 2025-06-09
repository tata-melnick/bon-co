import React from "react";

import { Star, Text } from "../../common";

import { Advantages, Footnote, Hero, MasterClass } from "./components";
import styles from "./main.module.css";

export const Main = () => {
    return (
        <div>
            <Hero />
            <Footnote />
            <Advantages />
            <MasterClass />
            <div className={styles.runningLine}>
                <div className={styles.line}>
                    <Star />
                    <div>15 000 рублей вместо 25 000 рублей</div>
                    <Star />
                    <div>Цена действует при записи в течение 2 дней с момента получения письма.</div>
                    <Star />
                </div>
            </div>
            <div className={styles.conclusion}>
                <Text className={styles.conclusionText}>
                    Не упустите возможность стать экспертом и увеличить свой доход! Мы всегда рады ответить на ваши
                    вопросы и с нетерпением ждем вашего отклика.
                </Text>
            </div>
        </div>
    );
};
