<template>
  <div id="service">
    <service-header :activate='activate'></service-header>
    <service-banner></service-banner>
    <service-content></service-content>
    <service-footer></service-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import ServiceHeader from '@/components/Hander'
import ServiceBanner from '@/components/Banner'
import ServiceContent from './components/Content'
import ServiceFooter from '@/components/Footer'

export default {
  name: 'Product',
  components: {
    ServiceHeader,
    ServiceBanner,
    ServiceContent,
    ServiceFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'service'
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
