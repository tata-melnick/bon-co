import React from "react";

import { Text } from "../../../../common";

import styles from "./Footnote.module.css";

export const Footnote = () => {
    return (
        <div className={styles.container}>
            <div className={styles.border}>
                <div className={styles.textContainer}>
                    <span className={styles.comma}>“</span>
                    <Text className={styles.text}>
                        Наши дизайнерские решения включают стильные раковины, элегантные ступени, эксклюзивные вазы,
                        функциональные дозаторы и прочные столешницы. Мы гордимся качеством и индивидуальным подходом к
                        каждому проекту.
                    </Text>
                    <span className={`${styles.comma} ${styles.commaUp}`}>“</span>
                </div>
            </div>
        </div>
    );
};
