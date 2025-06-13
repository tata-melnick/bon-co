import React from "react";

import { Star, Text, Title } from "../../../../common";
import delivery from "../../assets/delivery.svg";
import production from "../../assets/production.svg";
import project from "../../assets/project.svg";

import styles from "./Services.module.css";

type ServiceItem = { src: string; title: string; description: string };

const services: ServiceItem[] = [
    { title: "Проектирование", description: "Разработка уникального дизайна.", src: project },
    { title: "Изготовление", description: "Профессиональная обработка керамогранита.", src: production },
    { title: "Доставка и монтаж", description: "Полный цикл услуг для вашего комфорта.", src: delivery },
];

type DelimiterProps = { isVisible: boolean; isRight?: boolean };
const Delimiter = ({ isVisible, isRight }: DelimiterProps) =>
    isVisible ? (
        <div className={`${styles.delimiter} ${isRight ? styles.right : ""}`}>
            <span />
            <Star />
        </div>
    ) : null;

export const Services = () => {
    return (
        <div className={styles.container}>
            <Title className={styles.title} type="h2">
                Наши услуги включают:
            </Title>
            <div className={styles.content}>
                {services.map(({ src, title, description }, i) => (
                    <React.Fragment key={title}>
                        <div key={title} className={styles.service}>
                            <Delimiter isVisible={i === 1} />
                            <img className={styles.img} src={src} alt="Иконка услуги" />
                            <Title className={styles.servicesTitle} type="h3">
                                {title}
                            </Title>
                            <Text className={styles.text}>{description}</Text>
                            <Delimiter isVisible={i === 1} isRight />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
