<template>
  <div id="leaveword">
    <contact-header
      :activate='activate'
      :topList='topList'
      :navList='navList'>
    </contact-header>
    <contact-banner :bannerImg='bannerImg'></contact-banner>
    <contact-information></contact-information>
    <contact-footer :footerNav='footerNav'></contact-footer>
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
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'contact'
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
    }
    // ,
    // handleLeterChange (letter) {
    //   this.letter = letter
    // }
  },
  // 生命周期函数
  mounted () {
    this.getPublicInfo()
  }
}
</script>

<style scoped lang="stylus">
</style>
