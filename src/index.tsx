import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { routes } from "./constants";
import { Layout } from "./layout";
import { Company, Contacts, Gallery, Main, Reviews } from "./pages";
import { UiStateProvider } from "./uiState";

import "./index.css";

const root = document.getElementById("root");

if (root) {
    createRoot(root).render(
        <StrictMode>
            <UiStateProvider>
                <BrowserRouter basename="/bon-co/">
                    <Routes>
                        <Route element={<Layout />}>
                            <Route index path={routes.main} element={<Main />} />
                            <Route path={routes.company} element={<Company />} />
                            <Route path={routes.contacts} element={<Contacts />} />
                            <Route path={routes.gallery} element={<Gallery />} />
                            <Route path={routes.reviews} element={<Reviews />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UiStateProvider>
        </StrictMode>,
    );
}
