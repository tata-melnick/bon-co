import React, { PropsWithChildren } from "react";

import styles from "./text.module.css";

type TextProps = { className?: string };

export const Text = ({ children, className }: PropsWithChildren<TextProps>) => {
    return <div className={`${styles.text} ${className ?? ""}`}>{children}</div>;
};
