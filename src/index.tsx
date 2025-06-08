import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Layout } from "./layout";

import "./index.css";

const root = document.getElementById("root");

if (root) {
    createRoot(root).render(
        <StrictMode>
            <Layout />
        </StrictMode>,
    );
}
