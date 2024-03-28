<template>
  <div
    :class="[
      useUserStore().getShowHandSet
        ? `tv-panel-container move`
        : `tv-panel-container`,
    ]"
  >
    <div class="monitor">
      <div class="monitorscreen">
        <div ref="playerContainer" class="videoArea"></div>
      </div>
      <div class="handset" @click="openHandSetFunc">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
        >
          <path
            d="M676.648845 224.483852l-344.833931 0.07062C314.513191 223.883589 300.142168 238.254611 300.142168 256.227218v720.246008c0.706193 17.301723 14.406333 30.966553 31.672746 31.672746l344.445525-0.459025a32.943893 32.943893 0 0 0 31.672746-31.672746V255.803502a32.308319 32.308319 0 0 0-31.28434-31.31965zM472.241347 926.721946a63.875136 63.875136 0 0 1-90.675152 0 64.757877 64.757877 0 0 1-19.173134-46.079079c0-18.007916 7.309095-34.320969 19.173134-46.079078a63.55735 63.55735 0 0 1 90.675152 0c24.857986 24.822676 24.857986 65.887786 0 92.158157z m-0.353096-157.304441a62.780537 62.780537 0 0 1-89.262767 0c-25.528869-25.564178-25.528869-66.593978-0.706193-91.451964 25.564178-25.528869 65.852476-26.235062 90.710462 0 24.822676 24.857986 24.822676 65.887786-0.706193 91.451964z m-67.300172-236.468649c-27.36497-28.812665-41.0298-61.933106-41.0298-101.515212s14.406333-73.444048 42.477495-101.515211c27.36497-28.777355 60.450101-42.442186 99.326014-41.735993 38.875912-0.706193 71.996353 12.958637 99.361323 41.735993 27.718066 27.718066 41.0298 61.191604 40.288298 100.809019 0 39.582105-13.66483 72.702546-41.0298 101.479901-28.071163 28.071163-61.191604 41.771303-100.067516 42.477495-38.840602-0.706193-71.961044-14.406333-99.326014-41.735992z m221.003028 393.031587c-24.116483 25.564178-65.146283 25.564178-89.968959 0.706193-24.116483-25.528869-24.857986-67.300171 0-92.122847 25.528869-25.564178 65.852476-26.270371 90.675152 0 24.857986 24.822676 24.857986 65.887786-0.706193 91.451964z m0.706193-156.916034c-24.822676 24.822676-65.146283 25.564178-89.968959 0.706193-24.822676-26.270371-24.822676-67.300171 0-92.158157a63.239563 63.239563 0 0 1 90.710462 0c24.822676 24.857986 24.822676 65.887786-0.706193 91.451964z m-66.558669-285.443119c-30.26036 30.225051-80.294118 30.613457-110.519168 0.353097-30.225051-30.225051-29.871954-80.965001 0-110.872266a78.740494 78.740494 0 0 1 110.872265 0 77.998992 77.998992 0 0 1-0.353097 110.519169zM630.287289 193.976325a168.356357 168.356357 0 0 0-118.816934-49.610043c-48.232966 0.706193-91.240106 19.914636-121.994801 52.081717l-29.660097-36.722024a211.681284 211.681284 0 0 1 151.301802-62.53337c57.307544 0 110.060144 22.704098 148.865437 60.097005l-29.695407 36.722024z m58.013737-77.575276a254.582495 254.582495 0 0 0-177.183767-68.147603 267.117416 267.117416 0 0 0-178.243056 70.619277l-29.695406-38.134409C359.109265 30.457388 431.458714 0.02048 511.152569 0.02048a303.062628 303.062628 0 0 1 206.879172 78.281468l-29.695406 38.13441z"
            fill="#ffffff"
          ></path>
        </svg>
        <span class>遥控器在这哦</span>
      </div>
    </div>
    <div class="holder">
      <div class="pedestal"></div>
    </div>
  </div>
</template>
<script setup lang="ts" name="WebTvPanel">
import { useUserStore } from "@/store/modules/user";
import DzPlayer from "dz-player";
import { onMounted, ref } from "vue";
const playerContainer = ref();
//const player = ref();
const em = defineEmits(["openHandSet", "loaded"]);
const initPlayer = () => {
  em(
    "loaded",
    new DzPlayer({
      container: playerContainer.value,
      type: "auto",
      src: "",
      volume: 0.7,
      poster: "https://www.haoba.cc/upload/2024/03/318541448-10318541448.jpg",
      controlOptions: {},
    })
  );
};

onMounted(() => {
  initPlayer();
});
const openHandSetFunc = () => {
  em("openHandSet");
};
</script>
<style scoped lang="scss">
.tv-panel-container {
  max-width: 1024px;
  margin: auto;
  position: relative;
  transition: all 0.6s ease;

  &.move {
    transform: scale(0.9) translateX(-100px);
  }

  .monitor {
    background: #000;
    position: relative;
    border-top: 3px solid #888;
    margin: 5%;
    padding: 2% 2% 4%;
    border-radius: 10px;
    border-bottom-left-radius: 50% 2%;
    border-bottom-right-radius: 50% 2%;
    transition: margin-right 1s;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 3%;
      left: 0;
      right: 0;
      margin: auto;
      height: 0.5%;
      width: 28%;
      background: #ddd;
      border-radius: 50%;
      box-shadow: 0 0 3px 0 white;
    }

    .monitorscreen {
      background-color: #777;
      background-size: cover;
      background-position: top center;
      height: 0;
      padding-bottom: 56.25%;
      position: relative;
      overflow: hidden;
    }

    .handset {
      position: absolute;
      width: 60px;
      height: 60px;
      right: 150px;
      bottom: -100px;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .holder {
    position: absolute;
    bottom: -100px;
    left: 0;
    right: 0;
    margin: auto;
    width: 50px;
    height: 100px;
    background-color: #000;

    .pedestal {
      position: absolute;
      bottom: 0;
      left: -75px;
      margin: auto;
      width: 200px;
      height: 10px;
      background-color: #000;
      border-radius: 100px / 50px;
    }
  }
}
</style>
