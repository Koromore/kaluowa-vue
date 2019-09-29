<template>
  <div id="list">
    <div class="container">
      <div class="title">
        <p class="p1">整体厨柜系列</p>
        <p class="p2">Kitchen Cabinet</p>
      </div>
      <div class="content">
        <div class="button">
          <router-link to="" class="but">
            整体厨柜系列
          </router-link>
          <router-link to="" class="but">
            厨房电器系列
          </router-link>
          <router-link to="" class="but">
            浴室厨柜系列
          </router-link>
          <router-link to="" class="but">
            热水器系列
          </router-link>
        </div>
        <div class="content_box">
          <ul class="idea">
            <li>5S服务理念— —<span>微笑、速度、诚信、技巧、专业</span></li>
            <li>微笑(smile)适度的微笑</li>
            <li>迅速(speed)反应的速度</li>
            <li>诚实(sincerity)真诚的心态</li>
            <li>灵巧(smart)灵活的机制</li>
            <li>研究(study)专业的素养</li>
          </ul>
          <ul class="purpose">
            <li>服务宗旨</li>
            <li>绿色环保–敢为人先</li>
            <li>服务制胜–一切从客户利益出发</li>
            <li>勇于创新–提供突破性的解决方案</li>
            <li>锐意进取–致力于健康环保优质品牌</li>
          </ul>
          <ul class="promise">
            <li>服务承诺</li>
            <li>1、全天侯服务：服务热线电话24小时全天开通；市区内24小时内服务到位，郊区48小时内服务到位，节假日照常服务。</li>
            <li>2、全方位上门服务：上门设计、上门安装、调试、维修、使用保养知识培训服务，全部送货上门，全部建档回访。</li>
            <li>3、保修期内：属产品质量问题及安装质量问题的实行全免费服务。</li>
            <li>4、终身提供服务。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
  #list
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
        background #fff url("~@/assets/images/about/cp_bj.jpg") 0 0 repeat-x
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
        .content_box
          width 960px
          margin 0 auto
          font-size 12px
          font-family "微软雅黑"
          ul
            box-sizing border-box
            padding 0 9px
            margin-bottom 13px
            li
              height 24px
              line-height 24px
              text-align left
            li:nth-of-type(1)
              margin-bottom 13px
              font-weight bold
            span
              font-weight 100
</style>
