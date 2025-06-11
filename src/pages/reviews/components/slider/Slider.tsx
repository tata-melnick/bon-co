import React, { useState } from "react";

import { Arrow, Text, Title } from "../../../../common";

import styles from "./Slider.module.css";

export type Slide = { id: number; title: string; text: string };
type SliderProps = {
    slides: Slide[];
};

export const Slider = ({ slides }: SliderProps) => {
    const [active, setActive] = useState<number>(0);

    const nextSlide = () => {
        setActive((prevActive) => {
            const next = prevActive + 1;
            if (next === slides.length) return 0;

            return next;
        });
    };

    const prevSlide = () => {
        setActive((prevActive) => {
            const prev = prevActive - 1;
            if (prev < 0) return slides.length - 1;

            return prev;
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.border}>
                <div className={styles.textContainer}>
                    <div className={styles.title}>
                        {slides.map(({ title, id }, i) => (
                            <Title
                                key={id}
                                className={`${styles.slideContent} ${active === i ? styles.active : ""}`}
                                type="h3"
                            >
                                {title}
                            </Title>
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={prevSlide}>
                            <Arrow rotate="left" />
                        </button>
                        <button className={styles.button} onClick={nextSlide}>
                            <Arrow rotate="right" />
                        </button>
                    </div>
                    <div className={styles.slide}>
                        {slides.map(({ id, text }, i) => (
                            <Text key={id} className={`${styles.slideContent} ${active === i ? styles.active : ""}`}>
                                " {text} "
                            </Text>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
