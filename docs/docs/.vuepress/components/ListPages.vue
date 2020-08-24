<template>
  <section>
    <div>
      <Badge vertical="middle" type="tip" :text="numArticles"/>
    </div>

    <!-- List Article Data -->
    <ol>
      <li v-for="page in pages" :key="page">
        <article>
          <h3>
            <router-link :to="page.path" tag="a">
              {{ page.title }}
              <span>
                <span class="lastupdated">
                  {{ page.readingTime.text }}
                </span>
                <div class="lastupdated">
                  {{ page.lastUpdated }}
                </div>
              </span>
            </router-link>
          </h3>

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
  mounted() {
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
.lastupdated {
    // margin-top: 1px
    font-size: 0.5em;
    position: absolute;
    padding-left: 5px;
    font-style: normal;
    color: lighten($jsBlack, 50%);
}
ul.menu li {
  display:inline;
  padding: 0px 1px;
  margin: 0px 1px;
}
</style>
