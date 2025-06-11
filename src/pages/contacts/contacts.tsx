import React from "react";

import { Text, Title } from "../../common";

import styles from "./contacts.module.css";

const Card = ({ contact, title }: { title: string; contact: string }) => (
    <div className={styles.card}>
        <Title type="h3" className={styles.cardTitle}>
            {title}
        </Title>
        <Title type="h3" className={styles.contact}>
            {contact}
        </Title>
    </div>
);

export const Contacts = () => {
    return (
        <div className={styles.container}>
            <Title className={styles.title} type="h1">
                Контакты
            </Title>
            <Text className={styles.text}>
                Свяжитесь с нами, чтобы узнать больше о наших услугах или записаться на консультацию.
            </Text>
            <div className={styles.cardContainer}>
                <Card title="Телефон" contact="8 800 000 00 00" />
                <Card title="Телеграм" contact="@TestAccount" />
            </div>
        </div>
    );
};
