import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";

import styles from "./ExtLink.module.css";

type ExtLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const ExtLink = ({ children, className, ...props }: ExtLinkProps) => {
    return (
        <a className={`${styles.link} ${className ?? ""}`} {...props} target="_blank" rel="noreferrer noopener">
            {children}
        </a>
    );
};
