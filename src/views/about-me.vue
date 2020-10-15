<template>
  <div>
    <!-- 首页背景 -->
    <banner-back :backSrc="backSrc"></banner-back>
    <div class="main-box about-box">
      <div class="context" v-html="context"></div>
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
      backSrc: `https://rmt.dogedoge.com/fetch/fluid/storage/bg/n7a9bv.png?w=1920&fmt=webp`,
      context: `recently, we have made a survey of the people on physicaltraining. only 35 percent of the people surveyed have taken part inphysical activities.   over half of the people say they haven’t got enough time to takee某ercises. 34.9 percent of them complain they don’t have placeswhere they can rela某 themselves and that there are not enoughtraining facilities, while another 12.9 percent of the people feelthat they live too far away from the training centers. some of themeven don’t know how to train.   for lack of physical training, many people are not in goodhealth. people should realize the importance of it, and measuresshould be taken to provide people with training facilities.`
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.about-box {
  margin-top: -80vh;
}
.context {
  margin: 30px 60px;
}
</style>