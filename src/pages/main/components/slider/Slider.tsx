import React, { CSSProperties, useEffect, useRef, useState, WheelEventHandler } from "react";

import { Title } from "../../../../common";

import styles from "./Slider.module.css";

export type Slide = { title: string; slide: string };
type SliderProps = { sliders: Slide[] };

export const Slider = ({ sliders }: SliderProps) => {
    const [scrollWidth, setScrollWidth] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);
    const sliderSize = useRef<{ width: number; slideWidth: number }>({ slideWidth: 0, width: 0 });

    const onWheel: WheelEventHandler<HTMLDivElement> = ({ deltaY }) => {
        if (!wrapperRef.current) return;

        if (deltaY < 0) {
            if (offset + 305 * (scrollWidth / 100) >= 305) return;
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.scrollLeft + (scrollWidth / 4) * 20,
                behavior: "smooth",
            });
            setOffset((prev) => prev + 77);
        } else {
            if (offset < 10) return;
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.scrollLeft - (scrollWidth / 4) * 20,
                behavior: "smooth",
            });
            setOffset((prev) => prev - 77);
        }
    };

    const onMouseEnter = () => {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "10px";
    };

    const onMouseLeave = () => {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0";
    };

    useEffect(() => {
        if (sliderRef.current && slideRef.current) {
            sliderSize.current.width = sliderRef.current.getBoundingClientRect().width;
            sliderSize.current.slideWidth = slideRef.current.getBoundingClientRect().width;
        }
    }, [sliderRef]);

    useEffect(() => {
        const { slideWidth, width } = sliderSize.current;
        setScrollWidth((slideWidth / (width / 100)) * 4);
    }, [sliderSize.current.slideWidth, sliderSize.current.width]);

    return (
        <>
            <div
                ref={wrapperRef}
                className={styles.wrapper}
                onWheel={onWheel}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div ref={sliderRef} className={styles.slider}>
                    {sliders.map(({ slide, title }) => (
                        <div ref={slideRef} key={slide.replace(/[./]/g, "")} className={styles.slide}>
                            <img className={styles.img} src={slide} alt="Наши услуги" />
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
