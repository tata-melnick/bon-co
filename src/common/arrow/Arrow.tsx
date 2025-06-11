import React from "react";

import styles from "./Arrow.module.css";

type ArrowProps = { rotate: "down" | "up" | "left" | "right" };

export const Arrow = ({ rotate }: ArrowProps) => {
    return (
        <svg className={`${styles.arrow} ${styles[rotate]}`} width="26" height="19" viewBox="0 0 26 19" fill="none">
            <path d="M2 1.82666L13.2277 16L23.9875 1.82666" stroke="currentColor" strokeWidth="3" />
        </svg>
    );
};
