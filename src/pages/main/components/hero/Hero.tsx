import React from "react";

import { Button, Text, Title } from "../../../../common";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.welcome}>
                <Title className={styles.title} type="h1">
                    Добро пожаловать <br /> в BON&CO!
                </Title>
                <Text className={styles.text}>
                    Мы — мастерская по обработке керамогранита, создающая уникальные изделия для вашего интерьера.
                </Text>
                <Button>Исследовать ассортимент</Button>
            </div>
            <div className={styles.imgWrapper}>
                <div className={styles.heroImg1} />
                <div className={styles.heroImg2} />
                <div className={styles.heroImg3} />
            </div>
        </div>
    );
};
