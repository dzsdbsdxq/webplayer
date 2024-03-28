import { defineStore } from "pinia";

interface UserState {
  //player: DzPlayer,
  toggle: boolean;
  showHandSet: boolean;
  closeTv: boolean;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    toggle: false,
    showHandSet: false,
    closeTv: true,
  }),
  getters: {
    getToggle(): boolean {
      return this.toggle;
    },
    getShowHandSet(): boolean {
      return this.showHandSet;
    },
    getCloseTv(): boolean {
      return this.closeTv;
    },
  },
  actions: {
    setShowHandSet(val: boolean) {
      this.showHandSet = val ?? false;
    },
    setCloseTv(val: boolean) {
      this.closeTv = val ?? true;
    },
    setToggle() {
      this.toggle = !this.toggle;
    },
  },
});
