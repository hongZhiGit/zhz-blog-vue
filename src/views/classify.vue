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
      <div class="tab">
        <div
          :class="['tab-item', `high-light-${item.highlight}`]"
          v-for="(item, index) in tabArr"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
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
      backSrc: `https://rmt.dogedoge.com/fetch/fluid/storage/bg/73twhs.png?w=1920&fmt=webp`,
      tabArr: [
        { id: '1', name: '前端', highlight: '10' },
        { id: '2', name: '布局', highlight: '10' },
        { id: '3', name: 'css', highlight: '30' },
        { id: '4', name: '后端', highlight: '20' },
        { id: '5', name: 'javescript', highlight: '20' },
        { id: '6', name: 'react', highlight: '30' },
        { id: '7', name: 'router', highlight: '10' },
        { id: '8', name: '服务器', highlight: '20' },
        { id: '9', name: '框架', highlight: '10' },
        { id: '10', name: '设计模式', highlight: '20' }
      ]
    };
  },
  created() {
    this.pageInit();
  },
  mounted() {
    this.$refs.bannerBackRef.setFont(`分类`);
  },
  methods: {
    pageInit() {
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 50px;
  width: 500px;
  color: #bbbbee;
  .tab-item {
    display: flex;
    align-items: center;
    margin: 5px 10px;
    @include hover-link;
  }
}
.high-light-20 {
  font-weight: 500;
  font-size: 20px;
  color: #8ea5dc;
}
.high-light-30 {
  font-weight: 500;
  font-size: 30px;
  color: #3371b7;
}
</style>