import Vuetify from 'vuetify'
import VueGoogleCharts from 'vue-google-charts'

import 'bulma/css/bulma.css'

export default ({
  Vue,      // the version of Vue being used in the VuePress app
  options,  // the options for the root Vue instance
  router,   // the router instance for the app
  siteData  // site metadata
}) => {
  // https://www.npmjs.com/package/vue-google-charts
  Vue.use(VueGoogleCharts)
  // https://vuetifyjs.com/en/getting-started/quick-start/#usage-with-vuepress
  Vue.use(Vuetify)
}
