<template>
  <div id="index">
    <index-header :activate='activate'></index-header>
    <index-banner></index-banner>
    <index-product></index-product>
    <index-activity></index-activity>
    <index-seamlessroll></index-seamlessroll>
    <index-footer></index-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import IndexHeader from '@/components/Hander'
import IndexBanner from '@/components/Banner'
import IndexProduct from './components/Product'
import IndexActivity from './components/Activity'
import IndexSeamlessroll from './components/Seamlessroll'
import IndexFooter from '@/components/Footer'

export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexBanner,
    IndexProduct,
    IndexActivity,
    IndexSeamlessroll,
    IndexFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'index'
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
  #index
    background url(../../assets/images/index/bj_sd.jpg) 0 640px repeat-x
</style>
