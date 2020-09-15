<template>
  <h2 class="printer">
    {{title}}
    <span :class="printerOut ? 'underline': ''">_</span>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      printerOut: false
    };
  },
  methods: {
    setFont(titleName) {
      const printer = (index) => {
        const timeE = setTimeout(() => {
          if (index >= titleName.length) {
            this.printerOut = true;
            return;
          }
          this.title += titleName[index];
          printer(++index);

        }, 140);
      };
      printer(0);
    }
  }
};
</script>

<style lang="scss" scoped>
.printer {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #ddd;
  z-index: 1000;
  font-size: 2rem;
  .underline {
    animation: opaNone 0.4s linear infinite alternate;
  }
}
@keyframes opaNone {
  0% {
    transform: scale(2);
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}
</style>