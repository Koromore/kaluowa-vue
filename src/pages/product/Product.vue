<template>
  <div id="brand">
    <product-header
      :activate='activate'
      :topList='topList'
      :navList='navList'
    >
    </product-header>
    <product-banner :bannerImg='bannerImg'></product-banner>
    <brand-list></brand-list>
    <product-footer :footerNav='footerNav'></product-footer>
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
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'product'
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
