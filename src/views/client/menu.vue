<template>
  <div>
    <!-- 首页背景 -->
    <banner-back
      ref="bannerBackRef"
      :backSrc="backSrc"
      :height="'60vh'"
      style="margin-bottom: -50px"
    ></banner-back>
    <div style="height: 1px"></div>
    <div class="main-box" :style="$store.getters.mainStyle">
      <div class="col-10 amount">共计 {{ amount }} 篇文章</div>
      <div class="col-10">{{ year }}</div>
      <div
        class="flex-between col-10"
        v-for="(item, index) in dataArr"
        :key="index"
        @click="goDetail(item)"
      >
        <div class="title">{{ item.title }}</div>
        <div class="created-at">{{ item.createdAt }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import bannerBack from "../../components/banner-back";
export default {
  components: {
    bannerBack
  },
  data() {
    return {
      backSrc: `https://rmt.dogedoge.com/fetch/fluid/storage/bg/1cm6iu.png?w=1920&fmt=webp`,
      amount: 34,
      year: 2019,
      dataArr: [
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一1', createdAt: '09-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一2', createdAt: '08-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一3', createdAt: '07-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一4', createdAt: '06-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一5', createdAt: '05-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一5', createdAt: '05-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一5', createdAt: '05-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一5', createdAt: '05-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一5', createdAt: '05-15' },
        { id: '1', year: 2019, title: '目录一 一一一一一一一一一一一一一5', createdAt: '05-15' }
      ]
    };
  },
  created() {
  },
  mounted() {
    this.$refs.bannerBackRef.setFont(`目录`);
  },
  methods: {
    goDetail(item) {
      this.$router.push(`article-detail?id=${item.id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.amount {
  font-size: 24px;
  font-weight: 500;
  margin-top: 30px;
}
.title {
  @include hover-link;
}
.created-at {
  @include hover-link;
}
</style>