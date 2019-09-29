<template>
  <div id="brand">
    <product-header :activate='activate'></product-header>
    <product-banner></product-banner>
    <brand-list></brand-list>
    <product-footer></product-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import ProductHeader from '@/components/Hander'
import ProductBanner from '@/components/Banner'
import BrandList from './components/List'
import ProductFooter from '@/components/Footer'

export default {
  name: 'Product',
  components: {
    ProductHeader,
    ProductBanner,
    BrandList,
    ProductFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'product'
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
