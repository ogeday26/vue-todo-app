<template>
  <div>
    <div class="header">
      {{ title }}
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    border: 1px solid #666;
    font-size: 14pt;
  }
  .description {
    border-bottom: 1px solid #666;
    border-left: 1px solid #666;
    border-right: 1px solid #666;
    font-size: 10pt;
  }
</style>
