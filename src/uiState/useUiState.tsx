import React, { createContext, PropsWithChildren, useContext } from "react";

import { UIState } from "./uiState";

const UiStateContext = createContext<UIState>(new UIState());

export const UiStateProvider = ({ children }: PropsWithChildren) => {
    return <UiStateContext.Provider value={new UIState()}>{children}</UiStateContext.Provider>;
};

export function useUiState(): UIState {
    return useContext(UiStateContext);
}
