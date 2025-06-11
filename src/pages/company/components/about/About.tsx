import React from "react";

import { Button, Star, Text, Title } from "../../../../common";

import styles from "./About.module.css";

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ornament}>
                {[0, 1, 2].map((item) => (
                    <Star key={item} />
                ))}
            </div>
            <div className={styles.content}>
                <Title className={styles.title} type="h1">
                    О компании
                </Title>
                <Text className={styles.text}>
                    В BON&CO мы ценим доверие наших клиентов и гарантируем высокое качество в каждом изделии из
                    керамогранита. В нашем ассортименте — дизайнерские раковины, элегантные ступени, изящные вазы,
                    стильные дозаторы и роскошные столешницы.
                </Text>
                <Button>Исследовать ассортимент</Button>
            </div>
        </div>
    );
};
