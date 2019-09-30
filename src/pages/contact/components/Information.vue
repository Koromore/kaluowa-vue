<template>
  <div id="information">
    <div class="container">
      <div class="title">
        <p class="p1">联系方式</p>
        <p class="p2">Contact Us</p>
      </div>
      <div class="content">
        <div class="button">
          <router-link to="" class="but">
            联系方式
          </router-link>
        </div>
        <div class="information_box">
          <div class="left">
            <p>卡诺瓦有限公司</p>
            <p>全国咨询热线：400-732-8177</p>
            <p>电 话：0551-62307961 </p>
            <p>网 址：http://www.bodiwater.com </p>
            <p>手 机：18715094045 </p>
            <p>Q Q: 2732090514 </p>
            <p>邮 编：230001 </p>
            <p>地 址：合肥市阜阳北路柏帝产业基地</p>
          </div>
          <div class="right">
            <!-- <img src="@/assets/image/lixi.jpg" alt="" srcset=""> -->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'information',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
  #information
    background #eceaeb
    box-sizing border-box
    padding-top 30px
    margin-top 13px
    .container
      margin 0 auto
      max-width 1000px
      display flex
      flex-wrap wrap
      align-content center
      align-items center
      box-sizing border-box
      padding 13px 0 20px
      .title
        display flex
        flex-wrap wrap
        justify-content flex-start
        align-content flex-start
        font-size 24px
        margin-bottom 20px
        .p2
          color #6c6969
          margin-left 16px
      .content
        width 100%
        background #fff url(../../../assets/images/about/cp_bj.jpg) 0 0 repeat-x
        border 1px solid #dbd8da
        padding-bottom 50px
        .button
          margin 0 auto 32px
          max-width 960px
          height 66px
          border-bottom 1px solid #cccccc
          display flex
          flex-wrap wrap
          align-items center
          .but
            height 34px
            line-height 34px
            padding 0 13px
            background #dcdcdc
            margin-left 9px
            color #000
            font-size 16px
          .but:hover
            background #b41610
            color #fff
        .information_box
          margin 0 auto
          max-width 960px
          display flex
          flex-wrap wrap
          background url('~@/assets/image/lixi.jpg') 66% center no-repeat
          div
            width 50%
            text-align left
          .left
            display flex
            flex-wrap wrap
            justify-content flex-start
            align-content center
            align-items center
            box-sizing border-box
            padding-left 54px
            p
              width 100%
              margin-top 9px
              font-size 12px
</style>
