<template>
  <article :style="{ width: widthP}">
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, ut! Debitis magnam, eligendi tempore iure temporibus quas possimus repudiandae reprehenderit laboriosam eius asperiores dicta nobis! Facilis, eveniet! Error, enim eos.
      </slot>
  </article>
</template>

<script>
/** TODO
 * [] add in-line svg so that fill color could match that of card
 * [] configurable card color
 * [x] slot to accept HTML body for card
 * [x] linear gradient background
 */
export default {
  props: {
    width: {
      type: String,
      default: '50'
    },
  },
  computed: {
    widthP () {
      return this.width + '%'
    }
  }
}
</script>

<style scoped lang="stylus">
/* * CSS rip page style effect at the bottom */
article {
  background: linear-gradient(lighten(#9198e5, 60%), pink);
  padding: 20px;
  position: relative;
}

article::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  height: 20px;
  width: 100%;
  background: url('/svg/rip.svg') bottom center;
  background-size: 150%;
}
</style>