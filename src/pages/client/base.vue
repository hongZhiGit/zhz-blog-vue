<template>
  <div>
    <v-app-bar
      :class="[titleBoxDark ? 'dark' : '', 'title-box']"
      flat
      :height="titleBoxDark ? '54px' : '64px'"
    >
      <span class="title-text" @click="goHome()">Zhz's Blog</span>
      <v-bottom-navigation
        class="bottom-navigation"
        :value="activeBtn"
        grow
        horizontal
        :active-class="'sel-active'"
      >
        <v-btn @click="tabClick(0)">
          <span>首页</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn @click="tabClick(1)">
          <span>目录</span>
          <v-icon>mdi-fan</v-icon>
        </v-btn>
        <v-btn @click="tabClick(2)">
          <span>分类</span>
          <v-icon>mdi-fan</v-icon>
        </v-btn>
        <v-btn @click="tabClick(3)">
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
import Vue from 'vue';
export default {
  data() {
    return {
      activeBtn: 0,
      tabRouterArr: [
        '/home',
        '/menu',
        '/classify',
        '/about-me'
      ],
      titleBoxDark: false
    };
  },
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.titleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    tabClick(value) {
      window.scrollTo(0, 0);
      this.$store.commit('mainStyle', '');
      this.$router.push(this.tabRouterArr[value]);
    },
    titleScroll() {
      const top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset);
      // 顶部导航栏样式 当滚动大于100px收起顶部导航栏
      this.titleBoxDark = top >= 100;
      // 主体内容盒子样式 鼠标向下滚动盒子上移
      const mainStyle = `margin-top: -${(top < 500 ? top : 500) / 5}px`;
      this.$store.commit('mainStyle', mainStyle);
    },
    destroyed() {
      window.removeEventListener('scroll', this.titleScroll);   //  离开页面清除（移除）滚轮滚动事件
    },
    goHome() {
      this.$router.push('/home');
    }
  }
};
</script>

<style lang="scss" scoped>
.title-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 6% 0 10%;
  background: no-repeat !important;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
  z-index: 9999;
  will-change: background, height;
  transition: background 0.5s ease-in-out, height 0.5s ease-in-out;

  .title-text {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
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
.dark {
  height: 54px !important;
  background: rgb(35, 49, 67) !important;
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
body {
  background-color: rgb(24, 28, 39);
}
.v-toolbar__content {
  justify-content: space-between;
  padding: 0;
}
</style>