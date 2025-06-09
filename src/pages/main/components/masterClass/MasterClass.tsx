import React from "react";

import { Button, Star, Text, Title } from "../../../../common";

import vase from "./assets/vase.png";
import styles from "./MasterClass.module.css";

export const MasterClass = () => {
    return (
        <div className={styles.container}>
            <div className={styles.secondaryContainer}>
                <Title type="h2">Искусство в деталях: Мастер-класс</Title>
                <Text className={styles.description}>
                    Приглашаем на мастер-класс по созданию раковин из керамогранита в Краснодаре. Раковины из
                    керамогранита становятся всё более популярными, и вы можете стать одним из первых специалистов в
                    этой трендовой технологии.{" "}
                </Text>
                <Title type="h3">Что включено в мастер-класс?</Title>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Star />
                        <Text>2 дня обучения от опытных мастеров</Text>
                    </li>
                    <li className={styles.listItem}>
                        <Star />
                        <Text>Материалы и инструменты предоставляются</Text>
                    </li>
                    <li className={styles.listItem}>
                        <Star />
                        <Text>Сертификат об окончании курса</Text>
                    </li>
                    <li className={styles.listItem}>
                        <Star />
                        <Text>Возможность трудоустройства в нашу компанию</Text>
                    </li>
                </ul>
                <Button>записаться на мастер-класс</Button>
            </div>
            <img className={styles.img} src={vase} alt="Ваза с сухоцветами" />
        </div>
    );
};
