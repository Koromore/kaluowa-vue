<template>
  <div id="index">
    <index-header></index-header>
    <index-banner></index-banner>

    <index-footer></index-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import IndexHeader from '../../components/Hander'
import IndexBanner from '../../components/Banner'
import IndexFooter from '../../components/Footer'

export default {
  name: 'Index',
  components: {
    IndexHeader,
    IndexBanner,
    IndexFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
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

<style scoped>

</style>
