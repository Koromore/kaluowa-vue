<template>
  <div id="leaveword">
    <leaveword-header :activate='activate'></leaveword-header>
    <leaveword-banner></leaveword-banner>
    <leaveword-feedback></leaveword-feedback>
    <leaveword-footer></leaveword-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import LeavewordHeader from '@/components/Hander'
import LeavewordBanner from '@/components/Banner'
import LeavewordFeedback from './components/Feedback'
import LeavewordFooter from '@/components/Footer'

export default {
  name: 'Leaveword',
  components: {
    LeavewordHeader,
    LeavewordBanner,
    LeavewordFeedback,
    LeavewordFooter
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      activate: 'leaveword'
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
