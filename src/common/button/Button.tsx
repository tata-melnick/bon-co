import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

type ButtonProps = {
    onClick?: () => void;
    type?: "primary" | "secondary";
    disable?: boolean;
};

export const Button = ({ onClick, children, disable, type = "primary" }: PropsWithChildren<ButtonProps>) => {
    const secondary = type === "secondary" ? styles.secondary : "";
    return (
        <button disabled={disable} className={`${styles.button} ${secondary}`} onClick={onClick}>
            {children}
        </button>
    );
};
