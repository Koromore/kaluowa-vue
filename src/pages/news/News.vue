<template>
  <div id="news">
    <news-header
      :activate='activate'
      :topList='topList'
      :navList='navList'
    >
    </news-header>
    <news-banner :bannerImg='bannerImg'></news-banner>
    <news-list></news-list>
    <news-footer :footerNav='footerNav'></news-footer>
  </div>
</template>

<script>
// import axios from 'axios'
import NewsHeader from '@/components/Hander'
import NewsBanner from '@/components/Banner'
import NewsList from './components/List'
import NewsFooter from '@/components/Footer'

export default {
  name: 'News',
  components: {
    NewsHeader,
    NewsBanner,
    NewsList,
    NewsFooter
  },
  data () {
    return {
      topList: [],
      navList: [],
      bannerImg: [],
      footerNav: [],
      activate: 'news'
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
