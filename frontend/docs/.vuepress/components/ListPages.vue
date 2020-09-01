<template>
  <section>
    <div>
      <strong>
        <Badge vertical="middle" type="tip" :text="numArticles"/>
      </strong>
    </div>
    <br><br>

    <!-- List Article Data -->
    <ol>
      <li v-for="page in pages" :key="page.key">
        <article>
          <h2>
            <router-link :to="page.path" tag="a">
              {{ page.title }}
              <span>
                <span class="lastupdated">
                  {{ page.readingTime.text }}
                  <!-- <div>
                    {{ page.lastUpdated }}
                  </div> -->
                </span>
              </span>
            </router-link>
          </h2>

          <ul class="menu">
            <li v-for="item in page.frontmatter.tags" :key="item">
              <Badge type="warning" vertical="middle" :text="item" />
            </li>
          </ul>
        </article>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pages: [],
    }
  },
  /** NOTE
   * if used in mounted() hook, the component is rendered properly in static build
   */
  created() {
    this.$site.pages.forEach(page => {
      if (page.path !=this.currentPath && page.path.includes(this.currentPath)) {
        this.pages.push(page)
      }
    })
  },
  computed: {
    pageCount () {
      return this.pages.length.toString()
    },
    currentPath () {
      return this.$page.path
    },
    numArticles () {
      return this.pageCount + ' Articles'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface');

.lastupdated
    // margin-top: 1px
    font-size: 0.5em;
    // position: absolute;
    // text-align: end
    padding-left: 5px;
    font-style: normal;
    color: lighten($jsBlack, 50%);

ul.menu > li
  display:inline;
  padding: 0px 1px;
  margin: 0px 1px;

/** NOTE awesome number list
 * using flex-box
 */

ol
  list-style: none;
  counter-reset: my-awesome-counter;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

section > ol > li
  counter-increment: my-awesome-counter;
  display: flex;
  flex 100%
  width: 50%;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;

section > ol > li::before
  content: "0" counter(my-awesome-counter);
  font-weight: bold;
  font-size: 2.5rem;
  margin-right: 2rem;
  font-family: 'Abril Fatface', serif;
  line-height: 1;

</style>
