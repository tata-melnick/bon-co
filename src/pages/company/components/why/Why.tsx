import React from "react";

import { Text, Title } from "../../../../common";
import img from "../../assets/why.png";

import styles from "./Why.module.css";

export const Why = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Title className={styles.title} type="h2">
                    Почему мы?
                </Title>
                <Text className={styles.text}>
                    Мы ценим каждого клиента и стремимся к идеальному результату. Ваше удовлетворение — наша главная
                    цель.
                </Text>
                <Text className={styles.text}>Доверьтесь нам — и ваш интерьер заиграет новыми гранями.</Text>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={img} alt="Кухня" />
            </div>
        </div>
    );
};
