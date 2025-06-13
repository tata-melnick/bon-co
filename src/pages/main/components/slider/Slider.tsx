import React, { CSSProperties, useEffect, useRef, useState } from "react";

import { Title } from "../../../../common";

import styles from "./Slider.module.css";

export type Slide = { title: string; slide: string; description: string };
type SliderProps = { sliders: Slide[] };

export const Slider = ({ sliders }: SliderProps) => {
    const [scrollWidth, setScrollWidth] = useState<number>(20);
    const [offset, setOffset] = useState<number>(0);

    const slideRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const onScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        if (!sliderRef.current) return;
        const { scrollLeft } = e.currentTarget;
        setOffset(scrollLeft / (sliderRef.current.scrollWidth / (window.innerWidth > 768 ? 305 : 205)));
    };

    useEffect(() => {
        const resize = () => {
            if (slideRef.current) {
                const { width } = slideRef.current.getBoundingClientRect();
                const count = Math.floor(window.innerWidth / width);
                setScrollWidth(20 * (count <= 4 ? count : 4));
            }
        };

        resize();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <>
            <div className={styles.wrapper} onScroll={onScroll}>
                <div ref={sliderRef} className={styles.slider}>
                    {sliders.map(({ slide, title, description }) => (
                        <div ref={slideRef} key={slide.replace(/[./]/g, "")} className={styles.slide}>
                            <img className={styles.img} src={slide} alt="Наши услуги" />
                            <div className={styles.description}>{description}</div>
                            <Title type="h3">{title}</Title>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.scrollWrap}>
                <div
                    style={{ ["--scroll-width"]: `${scrollWidth}%`, ["--offset"]: `${offset}px` } as CSSProperties}
                    className={styles.scroll}
                />
            </div>
        </>
    );
};
