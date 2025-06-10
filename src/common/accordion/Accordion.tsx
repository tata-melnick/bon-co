import React, { useState } from "react";

import { Text } from "../text";
import { Title } from "../title";

import styles from "./Accordion.module.css";
import { Arrow } from "./Arrow";

type AccordionProps = {
    title: string;
    text: string;
};

export const Accordion = ({ title, text }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const togleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className={styles.container}>
            <div className={styles.title} onClick={togleOpen}>
                <Title type="h3">{title}</Title>
                <Arrow isUp={isOpen} />
            </div>
            <div className={`${styles.textContainer} ${isOpen ? styles.open : ""}`}>
                <Text className={styles.text}>{text}</Text>
            </div>
        </div>
    );
};
