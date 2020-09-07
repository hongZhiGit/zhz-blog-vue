<template>
  <div>
    <v-app-bar class="title-box" flat height="64px">
      <span class="title-text">Zhz's Blog</span>
      <v-bottom-navigation
        class="bottom-navigation"
        color="primary"
        :value="activeBtn"
        @change="tabChange"
        grow
        horizontal
        :active-class="'sel-active'"
      >
        <v-btn>
          <span>首页</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn>
          <span>目录</span>
          <v-icon>mdi-fan</v-icon>
        </v-btn>
        <v-btn>
          <span>分类</span>
          <v-icon>mdi-fan</v-icon>
        </v-btn>
        <v-btn>
          <span>关于我</span>
          <v-icon>mdi-account-details</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 0,
      tabRouterArr: [
        '/home',
        '/menu',
        '/classify',
        '/aboutMe'
      ]
    };
  },
  created() {
  },
  methods: {
    tabChange(value) {
      console.log(value);
      this.$router.push(this.tabRouterArr[value]);
    }
  }
};
</script>

<style lang="scss" scoped>
.title-box {
  width: 100%;
  padding: 0 6% 0 10%;
  background: no-repeat !important;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
  z-index: 999;
  will-change: background, padding;
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;

  .title-text {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }
  .bottom-navigation {
    width: 50%;
    height: 100% !important;
    box-shadow: none;
    background: no-repeat;
    span {
      color: #fff;
      font-size: 14px;
    }
  }
  .sel-active {
    color: #039be5 !important;
  }
}
.v-item-group.v-bottom-navigation--horizontal
  .v-btn
  > .v-btn__content
  > .v-icon {
  color: #fff;
  margin-right: 10px;
}
</style>
<style lang="scss">
.v-toolbar__content {
  justify-content: space-between;
  padding: 0;
}
</style>