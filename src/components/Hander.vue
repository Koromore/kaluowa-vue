<template>
  <div id="hander">
    <div id="top">
      <img src="../assets/images/header/logo.jpg" alt="" srcset="">
      <div class="right">
        <img src="../assets/images/header/biaoyu.jpg" alt="" srcset="">
        <router-link to='/'>
          <div class="header-route header-route1">
            首页
          </div>
        </router-link>
        <router-link to='/'>
          <div class="header-route header-route2">
            加盟
          </div>
        </router-link>
        <router-link to='/'>
          <div class="header-route header-route3">
            联系
          </div>
        </router-link>
      </div>
    </div>
    <div id="nav">
      <div class="content">
        <router-link to='/' :class="[activate=='index' ? 'nav_list activ' : 'nav_list']">
          网站首页
        </router-link>
        <router-link to='/' :class="[activate=='index2' ? 'nav_list activ' : 'nav_list']">
          卡诺瓦品牌
        </router-link>
        <router-link to='/' :class="[activate=='index3' ? 'nav_list activ' : 'nav_list']">
          新闻资讯
        </router-link>
        <router-link to='/' :class="[activate=='index4' ? 'nav_list activ' : 'nav_list']">
          产品中心
        </router-link>
        <router-link to='/' :class="[activate=='index5' ? 'nav_list activ' : 'nav_list']">
          客户服务
        </router-link>
        <router-link to='/' :class="[activate=='index6' ? 'nav_list activ' : 'nav_list']">
          在线留言
        </router-link>
        <router-link to='/' :class="[activate=='index7' ? 'nav_list activ' : 'nav_list']">
          在线客服
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hander',
  props: {
    activate: String
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
  #top
    margin 0 auto
    max-width 1000px
    height 112px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-content center
    align-items center
    .right
      align-self flex-end
      box-sizing border-box
      padding-bottom 20px
      display flex
      justify-content space-between
      align-content center
      align-items center
      .header-route
        width 55px
        height 30px
        margin-left 5px
        box-sizing border-box
        padding-left 18px
        line-height 30px
        color black
        font-size 12px
      .header-route1
        background url('../assets/images/header/list_tu.jpg') 0 0 no-repeat
      .header-route2
        background url('../assets/images/header/list_tu.jpg') -60px 0 no-repeat
      .header-route3
        background url('../assets/images/header/list_tu.jpg') -120px 0 no-repeat
  #nav
    height 38px
    background url('../assets/images/nav/nav.jpg') 0 0 repeat-x
    .content
      margin 0 auto
      max-width 1000px
      display flex
      justify-content space-between
      align-content center
      align-items center
      .nav_list
        height 38px
        line-height 38px
        color #fff
        flex auto
      .nav_list:hover
        background url('../assets/images/nav/hover.jpg') 0 0 repeat-x
      .activ
        background url('../assets/images/nav/hover.jpg') 0 0 repeat-x
</style>
