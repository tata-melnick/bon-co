import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router";

import styles from "./Link.module.css";

type LinkProps = { to: string };

export const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
    return (
        <RouterLink className={styles.link} {...props}>
            {children}
        </RouterLink>
    );
};
