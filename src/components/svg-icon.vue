<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>