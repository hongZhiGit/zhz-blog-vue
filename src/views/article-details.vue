<template>
  <div>
    <banner-back ref="bannerBackRef" :backSrc="backSrc" :height="'60vh'"></banner-back>
    <div class="main-box"></div>
  </div>
</template>

<script>
import bannerBack from "../components/banner-back";

export default {
  components: {
    bannerBack
  },
  data() {
    return {
      backSrc: 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/dojm2h.png?w=1920&q=100&fmt=webp'
    };
  },
  created() {
    this.$nextTick(() => {
      this.$refs.bannerBackRef.setFont('这是一篇文章的标题文章标题');
    });
  }
};
</script>
<style lang="scss" scoped>
</style>