<template>
  <div v-if="props.title" class="heading-line">
    <div class="heading-line__inner">
      <h2 class="heading-line__inner-title">{{ props.title }}</h2>
    </div>
  </div>
</template>
<script lang="ts" setup name="HeadLine">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>
<style lang="scss" scoped>
  .heading-line {
    position: relative;

    &__inner {
      padding: 0;
      position: relative;
      width: 721px;
      max-width: 100%;
      text-align: center;
      margin: 0 auto 20px;
      font-size: 18px;
      font-family: Oswald;
      line-height: 27px;
      text-transform: uppercase;
      font-weight: 400;

      &::before,
      &::after {
        content: '';
        width: 295px;
        height: 1px;
        background: #ddd;
        display: inline-block;
        max-width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      &::after {
        left: inherit;
        right: 0;
      }

      &-title {
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 27px;
        color: #02020b;
        background: #fff;
        display: inline-block;
        padding: 0 10px;
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
