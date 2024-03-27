<template>
  <header class="header navbar-fixed-top">
    <van-row class="header-container" justify="center">
      <van-col span="4">
        <h1 class="logo">
          <a class="logo-scrollto">
            <span class="logo-scrollto__title">WebPlayer</span>
          </a>
        </h1>
      </van-col>
      <van-col class="navbar" span="20">
        <nav class="mainnav">
          <ul class="mainnav__ul">
            <li class="nav-item">
              <a class="scrollto">PlayGround</a>
            </li>
            <li class="nav-item">
              <a class="scrollto">关于</a>
            </li>
            <li class="nav-item">
              <a class="scrollto">特性</a>
            </li>
            <li class="nav-item">
              <a class="scrollto">文档</a>
            </li>
            <li class="nav-item">
              <a class="scrollto">支持</a>
            </li>
            <li class="nav-item">
              <a class="scrollto">许可证</a>
            </li>
            <li class="nav-item">
              <a class="scrollto">GitHub</a>
            </li>
          </ul>
        </nav>
      </van-col>
    </van-row>
  </header>
</template>
<script setup lang="ts" name="WebHeader"></script>
<style scoped lang="scss">
  .header {
    position: fixed;
    left: 0;
    top: 0;
    color: #666;
    width: 100%;
    height: 70px;
    padding: 10px 0;

    &.navbar-fixed-top {
      border-width: 0 0 1px;
      box-shadow: 0 0 4px rgb(0 0 0 / 40%);
      background: #fff;
      z-index: 9999;
    }

    &-container {
      position: relative;
      height: 100%;
      max-width: max-width();
      margin: 0 auto;

      .van-col {
        display: flex;
        flex-flow: row nowrap;
        place-content: center flex-start;
        align-items: center;

        .logo {
          margin: 0;
          font-size: 26px;
          padding-left: 10px;

          &-scrollto {
            color: #b4ca65;
            transition: all 0.4s ease-in-out;

            &__title {
              font-weight: bold;
            }
          }
        }

        &.navbar {
          justify-content: flex-end;

          .mainnav {
            &__ul {
              display: flex;
              flex-flow: row nowrap;
              place-content: center flex-end;
              align-items: center;

              .nav-item {
                position: relative;
                margin-right: 30px;
                font-weight: normal;
                cursor: pointer;

                .scrollto {
                  padding: 15px 10px;
                }

                &:hover {
                  color: #b4ca65;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
