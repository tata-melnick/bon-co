import React, { useState } from "react";

import { Button, Text, Title } from "../../../../common";

import image from "./assets/form.png";
import styles from "./Form.module.css";

export const Form = () => {
    const [name, setName] = useState<string>("");
    const [text, setText] = useState<string>("");

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Title className={styles.title} type="h2">
                    Написать отзыв
                </Title>
                <Text className={styles.text}>
                    Ваша обратная связь поможет нам стать лучше и предложить еще более качественные услуги.
                </Text>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${styles.input} ${styles.name}`}
                    type="text"
                    placeholder="Имя"
                />

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Комментарий"
                />
                <Button disable={!name || !text} type="secondary">
                    Отправить
                </Button>
            </div>
            <img src={image} alt="Ваза" />
        </div>
    );
};
