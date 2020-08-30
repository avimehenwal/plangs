<template>
  <div class="about">
    <h1>gihub issues {{ numResults }} </h1>
    <input v-model="numResults" type="text">
    <input v-model="repoName" type="text">
    <input v-model="userName" type="text">
    <button @click="githubIssues">update</button>
    <ol>
      <li v-for="issue in issues" :key="issue.id">
        <a :href="issue.html_url" target="_blank">
          {{ issue.title }}
        </a>
        {{ issue.labels }} {{ issue.state }} {{ issue.created_at }}
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'
import * as d3 from 'd3'

export default {
  data: () => ({
    issues: '',
    numResults: '5',
    userName: 'vuejs',
    repoName: 'vue',
  }),
  mounted () {
    this.githubIssues()
    // random coloured heading
    d3.selectAll("h1").style("color", function() {
      return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
  },
  methods: {
    async githubIssues () {
      /**
       * TODO
       * [x] configurable number of results
       * [] configurable userName and repoName
       */
      const github = axios.create({
        baseURL: 'https://api.github.com/repos/',
        timeout: 1000,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const url = '/' + this.userName + '/' + this.repoName + '/issues?per_page=' + this.numResults
      console.log(url);
      this.issues = (await github.get(url)).data
      console.log(typeof this.issues);
    }
  }
}
</script>

<style lang="stylus">
</style>