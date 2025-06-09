import React from "react";

import { Accordion, Button, Text, Title } from "../../../../common";

import sink from "./assets/sink.png";
import stoneware from "./assets/stoneware.png";
import styles from "./Advantages.module.css";

export const Advantages = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <Title className={styles.title} type="h2">
                        Преимущества:
                    </Title>
                    <Text>
                        В каждом проекте мы стремимся превзойти ожидания, предлагая не просто продукт, а творческое
                        решение, созданное с душой и вниманием к деталям.
                    </Text>
                </div>
                <img src={sink} alt="раковина" />
            </div>
            <div className={styles.container}>
                <div className={styles.gallaryContainer}>
                    <img src={stoneware} alt="каменная столшница" />
                    <Button>Перейти в галерею</Button>
                </div>
                <div className={styles.advantagesContainer}>
                    <Accordion
                        title="Авторские решения"
                        text="Мы создаем уникальные изделия, воплощая в жизнь ваши самые смелые идеи и проекты."
                    />
                    <Accordion
                        title="Высокое качество"
                        text="Используем только лучшие материалы и передовые технологии, чтобы долговечность и изящество каждого изделия."
                    />
                    <Accordion
                        title="Индивидуальный подход"
                        text="Мы внимательно учитываем ваши пожелания и требования, чтобы создать продукт, полностью соответствующий вашим ожиданиям."
                    />
                    <Accordion
                        title="Доставка и монтаж"
                        text="Оперативная доставка и профессиональный монтаж обеспечивают безупречный результат в указанные сроки."
                    />
                </div>
            </div>
        </div>
    );
};
