<template>
  <div id="footer">
    <div class="footer_l1">
      <router-link to='/city' class="list">
        网站首页
      </router-link>|
      <router-link to='/city' class="list">
        欧卡罗品牌
      </router-link>|
      <router-link to='/city' class="list">
        新闻资讯
      </router-link>|
      <router-link to='/city' class="list">
        产品中心
      </router-link>|
      <router-link to='/city' class="list">
        客户服务
      </router-link>|
      <router-link to='/city' class="list">
        在线留言
      </router-link>|
      <router-link to='/city' class="list">
        在线客服
      </router-link>
    </div>
    <div class="footer_l2">
      版权所有：橱柜|合肥橱柜|橱柜效果图|Welcome to http://www.bodiwater.com
    </div>
    <div class="footer_l3">
      <img src="../assets/images/footer/fenxiang.jpg" alt="" srcset="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="stylus">
  #footer
    width 100%
    height 130px
    background #303436
    color #fff
    font-size 12px
    display flex
    flex-wrap wrap
    flex-direction column
    justify-content space-around
    align-content center
    align-items center
    box-sizing border-box
    padding 30px 0 10px
    .footer_l1
      color #fff
      display flex
      flex-wrap wrap
      justify-content center
      align-content center
      .list
        display block
        color #fff
        width 64px
</style>
