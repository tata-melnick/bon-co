import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
    onClick?: () => void;
    type?: "primary" | "secondary";
};

export const Button = ({ onClick, children, type = "primary" }: PropsWithChildren<ButtonProps>) => {
    const secondary = type === "secondary" ? styles.secondary : "";
    return (
        <button className={`${styles.button} ${secondary}`} onClick={onClick}>
            {children}
        </button>
    );
};
