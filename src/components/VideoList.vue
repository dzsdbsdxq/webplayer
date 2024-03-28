<template>
  <div class="player-songs">
    <van-row class="player-songs__row">
      <van-col span="24" class="player-songs__row-col">
        <ul class="player-songs__row-col__ul">
          <li
            v-for="(item, index) in lists"
            :key="index"
            @click="changeVideoFunc(index)"
            class="player-songs__row-col__ul-li"
          >
            <div class="thumb">
              <img class="thumb-img" :src="item.poster" alt="" />
              <span class="thumb-time">{{ item.time }}</span>
              <div class="thumb-play">
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4476"
                  width="64"
                  height="64"
                >
                  <path
                    d="M817.088 484.96l-512-323.744C295.232 154.976 282.752 154.592 272.576 160.224 262.336 165.856 256 176.608 256 188.256l0 647.328c0 11.648 6.336 22.4 16.576 28.032 4.8 2.656 10.112 3.968 15.424 3.968 5.952 0 11.904-1.664 17.088-4.928l512-323.616C826.368 533.184 832 522.976 832 512 832 501.024 826.368 490.816 817.088 484.96z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="player-songs__row-col__title">
              {{ item.name }}
            </div>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>
</template>
<script setup lang="ts" name="VideoList">
import { videoModel } from "@/api/models/userModel";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  lists: {
    type: Array<videoModel>,
    default: [],
  },
});
const em = defineEmits(["_change"]);
const changeVideoFunc = (index: number) => {
  em("_change", index);
};
</script>
<style scoped lang="scss">
.player-songs {
  width: 100%;
  position: relative;

  &__row {
    margin-bottom: 30px;
    cursor: pointer;

    &-col {
      display: flex;
      flex-direction: column;

      &__ul {
        border-radius: 8px;
        overflow: scroll;
        display: flex;
        flex-flow: column nowrap;
        place-content: center flex-start;
        align-items: center;

        &-li {
          width: 80%;
          margin-bottom: 10px;
        }
      }

      .thumb {
        display: block;
        position: relative;
        flex: none;
        overflow: hidden;
        margin-right: 8px;
        border-radius: 8px;
        height: 180px;
        width: 100%;

        &:hover {
          .thumb-img {
            transform: scale(1.1);
          }

          .thumb-play {
            opacity: 1;
          }
        }

        &-img {
          width: 100%;
          height: 100%;
          object-fit: fill;
          border-radius: 8px;
          transition: all 0.6s ease;
        }

        &-time {
          position: absolute;
          bottom: 3px;
          right: 3px;
          display: flex;
          color: #fff;
          background-color: rgb(0 0 0 / 80%);
          padding: 3px 4px;
          font-size: 12px;
          border-radius: 3px;
        }

        &-play {
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 8px;
          background: rgb(0 0 0 / 60%);
          transition: all 0.6s ease;
        }
      }

      &__title {
        margin-top: 10px;
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        overflow: hidden;
        color: #ddd;
        max-height: 4rem;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal;
      }
    }
  }
}
</style>
