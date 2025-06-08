import React, { PropsWithChildren } from "react";

import styles from "./title.module.css";

type TitleProps = { type: "h1" | "h2" | "h3" };

export const Title = ({ children, type }: PropsWithChildren<TitleProps>) => {
    if (type === "h1") {
        return <h1 className={`${styles.title} ${styles.h1}`}>{children}</h1>;
    }

    if (type === "h2") {
        return <h2 className={`${styles.title} ${styles.h2}`}>{children}</h2>;
    }

    return <h3 className={`${styles.title} ${styles.h3}`}>{children}</h3>;
};
