<template>
  <div id="leaveword">
    <leaveword-header
      :activate='activate'
      :topList='topList'
      :navList='navList'
    >
    </leaveword-header>
    <leaveword-banner :bannerImg='bannerImg'></leaveword-banner>
    <leaveword-feedback></leaveword-feedback>
    <leaveword-footer :footerNav='footerNav'></leaveword-footer>
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
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'leaveword'
    }
  },
  // 方法
  methods: {
    // 请求公用组件内容
    getPublicInfo () {
      this.$ajax.get('/static/mock/public.json')
        .then(this.getPublicInfoSucc)
    },
    getPublicInfoSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.topList = data.topList
        this.navList = data.navList
        this.bannerImg = data.bannerImg
        this.footerNav = data.footerNav
      }
    },
    handleLeterChange (letter) {
      this.letter = letter
    }
  },
  // 生命周期函数
  mounted () {
    this.getPublicInfo()
  }
}
</script>

<style scoped lang="stylus">
</style>
