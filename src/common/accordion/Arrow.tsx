import React from "react";

import styles from "./Accordion.module.css";

type ArrowProps = { isUp: boolean };

export const Arrow = ({ isUp }: ArrowProps) => {
    return (
        <svg
            className={`${styles.arrow} ${isUp ? styles.arrowUp : ""}`}
            width="26"
            height="19"
            viewBox="0 0 26 19"
            fill="none"
        >
            <path d="M2 1.82666L13.2277 16L23.9875 1.82666" stroke="#000" strokeWidth="3" />
        </svg>
    );
};
