import React, { PropsWithChildren } from "react";

import styles from "./title.module.css";

type TitleProps = { type: "h1" | "h2" | "h3"; className?: string };

export const Title = ({ children, className, type }: PropsWithChildren<TitleProps>) => {
    if (type === "h1") {
        return <h1 className={`${styles.title} ${styles.h1} ${className ?? ""}`}>{children}</h1>;
    }

    if (type === "h2") {
        return <h2 className={`${styles.title} ${styles.h2} ${className ?? ""}`}>{children}</h2>;
    }

    return <h3 className={`${styles.title} ${styles.h3} ${className ?? ""}`}>{children}</h3>;
};
