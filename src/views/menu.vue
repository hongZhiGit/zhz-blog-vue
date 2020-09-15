<template>
  <div>
    <div class="banner">
      <div class="mask"></div>
      <div class="context">111111</div>
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
  background: url('https://rmt.dogedoge.com/fetch/fluid/storage/bg/1cm6iu.png?w=1920&fmt=webp')
    center / cover no-repeat;
  height: 100vh;
  .mask {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .context {
    padding-top: 64px;
    height: 100%;
    width: 100%;
  }
}
</style>