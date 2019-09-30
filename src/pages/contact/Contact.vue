<template>
  <div id="leaveword">
    <contact-header :activate='activate'></contact-header>
    <contact-banner></contact-banner>
    <contact-information></contact-information>
    <contact-footer></contact-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import ContactHeader from '@/components/Hander'
import ContactBanner from '@/components/Banner'
import ContactInformation from './components/Information'
import ContactFooter from '@/components/Footer'

export default {
  name: 'Contact',
  components: {
    ContactHeader,
    ContactBanner,
    ContactInformation,
    ContactFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'contact'
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
