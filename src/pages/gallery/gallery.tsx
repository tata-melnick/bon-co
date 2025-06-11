import React from "react";

import { Text, Title } from "../../common";

import photo1 from "./assets/photo-1.png";
import photo2 from "./assets/photo-2.png";
import photo3 from "./assets/photo-3.png";
import photo4 from "./assets/photo-4.png";
import photo5 from "./assets/photo-5.png";
import photo6 from "./assets/photo-6.png";
import photo7 from "./assets/photo-7.png";
import photo8 from "./assets/photo-8.png";
import photo9 from "./assets/photo-9.png";
import photo10 from "./assets/photo-10.png";
import styles from "./gallery.module.css";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

export const Gallery = () => {
    return (
        <div>
            <Title className={styles.title} type="h1">
                Фотогалерея
            </Title>
            <Text className={styles.text}>
                Оцените наше мастерство в разделе галереи. Здесь представлены примеры наших работ. Каждое фото — это
                подтверждение нашего высокого качества и индивидуального подхода к каждому проекту.
            </Text>
            <div className={styles.gallery}>
                {photos.map((photo, index) => (
                    <img className={styles.img} src={photo} key={index} alt="Фотография из галереи" />
                ))}
            </div>
        </div>
    );
};
