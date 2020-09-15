<template>
  <!-- 首页背景 -->
  <div
    class="banner"
    :style="{'--height' : height, 'background': `url('${backSrc}') center / cover no-repeat`}"
  >
    <div class="mask"></div>
    <div class="context">
      <printer-font ref="printerFontRef"></printer-font>
    </div>
  </div>
</template>

<script>
import printerFont from "../printer-font";

export default {
  components: {
    printerFont
  },
  props: {
    height: {
      type: String,
      default: '100vh'
    },
    backSrc: {
      type: String,
      default: 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp'
    }
  },
  data() {
    return {

    };
  },
  methods: {
    setFont(titleName) {
      this.$refs.printerFontRef.setFont(titleName);
    }
  }
};
</script>

<style lang="scss" scoped>
$varHeight: var(--height);
.banner {
  height: $varHeight;
  .mask {
    width: 100%;
    height: $varHeight;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .context {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // margin-top: 0vh - $varHeight;
    height: 100%;
    width: 100%;
  }
}
</style>