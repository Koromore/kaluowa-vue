<template>
  <div id="index">
    <index-header
      :activate='activate'
      :topList='topList'
      :navList='navList'
    >
    </index-header>
    <!-- <index-nav></index-nav> -->
    <index-banner :bannerImg='bannerImg'></index-banner>
    <index-product></index-product>
    <index-activity></index-activity>
    <index-seamlessroll></index-seamlessroll>
    <index-footer :footerNav='footerNav'></index-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import IndexHeader from '@/components/Hander'
import IndexNav from '@/components/Bsnav'
import IndexBanner from '@/components/Banner'
import IndexProduct from './components/Product'
import IndexActivity from './components/Activity'
import IndexSeamlessroll from './components/Seamlessroll'
import IndexFooter from '@/components/Footer'

export default {
  name: 'Index',
  components: {
    IndexNav,
    IndexHeader,
    IndexBanner,
    IndexProduct,
    IndexActivity,
    IndexSeamlessroll,
    IndexFooter
  },
  data () {
    return {
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'index'
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
  #index
    background url(../../assets/images/index/bj_sd.jpg) 0 640px repeat-x
</style>
