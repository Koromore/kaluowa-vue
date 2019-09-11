<template>
  <div id="index">
    <brand-header :activate='activate'></brand-header>
    <brand-banner></brand-banner>

    <brand-footer></brand-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import BrandHeader from '../../components/Hander'
import BrandBanner from '../../components/Banner'
import BrandFooter from '../../components/Footer'

export default {
  name: 'Brand',
  components: {
    BrandHeader,
    BrandBanner,
    BrandFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'brand'
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
