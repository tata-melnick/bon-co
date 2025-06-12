import { action, computed, makeObservable, observable } from "mobx";

export class UIState {
    @observable
    private platform: "desktop" | "mobile" = window.innerWidth <= 768 ? "mobile" : "desktop";

    @computed
    public get isMobile() {
        return this.platform === "mobile";
    }

    @computed
    public get isDesktop() {
        return this.platform === "desktop";
    }

    constructor() {
        makeObservable(this);

        window.addEventListener("resize", this.checkSize);
    }

    @action
    private checkSize = () => {
        if (window.innerWidth <= 768) this.platform = "mobile";
        else this.platform = "desktop";
    };
}
