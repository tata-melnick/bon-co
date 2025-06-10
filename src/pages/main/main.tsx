import React from "react";

import { Star, Text, Title } from "../../common";

import dispenser from "./assets/dispenser.png";
import sinks from "./assets/sinks.png";
import steps from "./assets/steps.png";
import tabletop from "./assets/tabletop.png";
import vases from "./assets/vases.png";
import { Advantages, Footnote, Hero, MasterClass, type Slide, Slider } from "./components";
import styles from "./main.module.css";

const sliders: Slide[] = [
    { title: "Раковины", slide: sinks },
    { title: "Ступени", slide: steps },
    { title: "Вазы", slide: vases },
    { title: "Дозатор", slide: dispenser },
    { title: "Столешницы", slide: tabletop },
];

export const Main = () => {
    return (
        <div>
            <Hero />
            <Footnote />
            <div className={styles.sliderWrap}>
                <Title className={styles.sliderTitle} type="h2">
                    Наши услуги:
                </Title>
                <Slider sliders={sliders} />
            </div>
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
