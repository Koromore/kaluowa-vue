<template>
  <div id="service">
    <service-header
      :activate='activate'
      :topList='topList'
      :navList='navList'
    >
    </service-header>
    <service-banner :bannerImg='bannerImg'></service-banner>
    <service-content></service-content>
    <service-footer :footerNav='footerNav'></service-footer>
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
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'service'
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
