import { defineStore } from 'pinia';

interface UserState {
  showHandSet: boolean
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    showHandSet: false
  }),
  getters: {
    getShowHandSet(): boolean {
      return this.showHandSet;
    },
  },
  actions: {
    setShowHandSet(val: boolean) {
      this.showHandSet = val ?? false;
    },
  },
});
