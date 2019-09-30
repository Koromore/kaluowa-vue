<template>
  <div id="brand">
    <brand-header
      :activate='activate'
      :topList='topList'
      :navList='navList'>
    </brand-header>
    <brand-banner :bannerImg='bannerImg'></brand-banner>
    <brand-about></brand-about>
    <brand-footer :footerNav='footerNav'></brand-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import BrandHeader from '@/components/Hander'
import BrandBanner from '@/components/Banner'
import BrandAbout from './components/About'
import BrandFooter from '@/components/Footer'

export default {
  name: 'Brand',
  components: {
    BrandHeader,
    BrandBanner,
    BrandAbout,
    BrandFooter
  },
  data () {
    return {
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'brand'
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
