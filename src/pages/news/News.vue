<template>
  <div id="news">
    <news-header :activate='activate'></news-header>
    <news-banner></news-banner>
    <news-list></news-list>
    <news-footer></news-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import NewsHeader from '@/components/Hander'
import NewsBanner from '@/components/Banner'
import NewsList from './components/List'
import NewsFooter from '@/components/Footer'

export default {
  name: 'News',
  components: {
    NewsHeader,
    NewsBanner,
    NewsList,
    NewsFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'news'
    }
  },
  methods: {
    // getCityInfo () {
    //   axios.get('/api/city.json')
    //     .then(this.handleGetCityInfoSucc)
    // },
    // handleGetCityInfoSucc (res) {
    //   res = res.data
    //   if (res.ret && res.data) {
    //     const data = res.data
    //     this.cities = data.cities
    //     this.hotCities = data.hotCities
    //   }
    // },
    // handleLeterChange (letter) {
    //   this.letter = letter
    // }
  },
  mounted () {
    // this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
