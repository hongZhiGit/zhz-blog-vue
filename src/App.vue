<template>
  <transition name="scale-transition">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: 'app',
  mounted() {
  },

  methods: {
  }
};
</script>

<style lang="scss">
/*每个页面公共css */
@import './common/base.scss';
</style>
