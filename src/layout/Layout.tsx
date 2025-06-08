import React from "react";
import { Outlet } from "react-router";

import { Footer } from "./footer";
import { Header } from "./header";
import styles from "./Layout.module.css";

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
