<template>
  <div>
    <banner-back ref="bannerBackRef" :backSrc="backSrc" :height="'60vh'"></banner-back>
    <div class="main-box context" :style="$store.getters.mainStyle">
      <!-- <div v-for="(item, index) in 100" :key="index">{{item}}</div> -->
      <div v-html="msg"></div>
    </div>
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
      backSrc: 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/dojm2h.png?w=1920&q=100&fmt=webp',
      msg: "<h1>这是一个h1元素内容</h1>"
    };
  },
  created() {
    setTimeout(() => {
      this.$refs.bannerBackRef.setFont('这是一篇文章的标题文章标题');
    }, 300);
  }
};
</script>
<style lang="scss" scoped>
.context {
  min-height: 1100px;
  padding: 50px;
  color: #c4c6c9;
}
</style>