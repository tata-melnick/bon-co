import React, { useState } from "react";

import { Arrow } from "../arrow";
import { Text } from "../text";
import { Title } from "../title";

import styles from "./Accordion.module.css";

type AccordionProps = {
    title: string;
    text: string;
};

export const Accordion = ({ title, text }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    return (
        <div className={styles.container}>
            <div className={styles.title} onClick={toggleOpen}>
                <Title type="h3">{title}</Title>
                <Arrow rotate={isOpen ? "up" : "down"} />
            </div>
            <div className={`${styles.textContainer} ${isOpen ? styles.open : ""}`}>
                <Text className={styles.text}>{text}</Text>
            </div>
        </div>
    );
};
