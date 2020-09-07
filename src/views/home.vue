<template>
  <div>
    <div class="banner">
      <div class="mask"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background: url('https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp')
    center / cover no-repeat;
  height: 100vh;
  margin-top: -64px;
}
.mask {
  position: absolute;
  // top: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>