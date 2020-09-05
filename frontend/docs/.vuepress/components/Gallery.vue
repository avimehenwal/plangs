<template>
  <div>
    {{ images }}
  </div>
</template>

<script>
// webpack file-loader
// import files from '../public/img/browser/index.js';

export default {
  data: () => ({
    images: []
  }),
  mounted () {
    console.log(files);
    this.images = files;
  }
}
</script>

<style>

</style>