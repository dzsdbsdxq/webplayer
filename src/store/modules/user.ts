import { defineStore } from "pinia";
import { videoModel } from "./../../api/models/userModel";

interface UserState {
  toggle: boolean;
  showHandSet: boolean;
  closeTv: boolean;
  currentVideo: videoModel;
  videoLists: videoModel[];
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    toggle: false,
    showHandSet: false,
    closeTv: true,
    currentVideo: <videoModel>{},
    videoLists: [],
  }),
  getters: {
    getCurrentVideo(): videoModel {
      return this.currentVideo;
    },
    getPlayLists(): videoModel[] {
      return this.videoLists;
    },
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
    SetCurrentVideo(val: videoModel) {
      this.currentVideo = val;
    },
    setShowHandSet(val: boolean) {
      this.showHandSet = val ?? false;
    },
    setCloseTv(val: boolean) {
      this.closeTv = val ?? true;
    },
    setToggle() {
      this.toggle = !this.toggle;
    },
    pushPlayLists(video: videoModel) {
      this.videoLists.push(video);
      this.SetCurrentVideo(this.videoLists[0]);
    },
    setVideoOptions(idx: number, optinos: Object) {
      this.videoLists[idx] = Object.assign(this.videoLists[idx], optinos);
      console.log(this.videoLists[idx]);
    },
    powerOff() {
      this.setCloseTv(true);
      this.currentVideo = <videoModel>{};
      this.videoLists = [];
    },
  },
});
