<template>
  <div class="footer">
    <div class="record" @click.stop="goBeian" target="_blank">京ICP备 19049164号-1</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goBeian() {
      const aLink = document.createElement('a');
      aLink.href = "https://beian.miit.gov.cn/";
      aLink.target = 'blank';
      aLink.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  .record {
    cursor: pointer;
    color: #fff;
  }
}
</style>