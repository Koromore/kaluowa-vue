<template>
  <div id="about">
    <div class="container">
      <div class="title">
        <p class="p1">企业简介</p>
        <p class="p2">About Us</p>
      </div>
      <div class="content">
        <div class="button">
          <router-link to="" class="but">
            企业简介
          </router-link>
          <router-link to="" class="but">
            企业文化
          </router-link>
        </div>
        <div class="content_title">
          <p>公司简介</p>
          <p>发布时间： 2014-8-6 浏览： 74 次</p>
        </div>
        <div class="img_box">
          <img src="@/assets/images/about/tu_10.jpg" alt="" srcset="">
        </div>
        <div class="content_text">
          <p>产品说明：</p>
          <p>●门板采用先进的镜面宝马闪银系列钢琴烤漆，用意大利生产线经12道工序（三底三面五磨一抛）在先进的无尘喷房精制而成，门板外观引用宝马轿车门概念，基材使用25mm欧洲E1级中密度纤维板加工而成。</p>
          <p>●乌金石英石台面，坚硬靓丽，刮不花、污不染、烫不坏、无毒无辐射</p>
          <p>●采用18mm欧洲E1级防潮柜体板，仿真橡木纹理，三维浮雕设计，触感细腻，有温馨感</p>
          <p>●智能伺服系统，轻触之下，无限惊喜。世界顶级五金商为你提供的无限创意，让生活变得更加写意</p>
          <p>●抽屉门与底板的透光炫动设计，一扫传统柜体给人的笨重感觉，使柜内明亮、轻灵</p>
          <p>●LED感应柜前灯、柜内灯、柜底灯全空间布局，新颖的开启模式，打破陈旧，充分体现厨房的现代时尚，让您的厨房真正"靓"起来 橱柜产品价格上调 产品附加值也需提高</p>
          <p>有业内人士表示，当下橱柜市场上只有高端橱柜产品才有资格提到这个词。尽管消费者作为产品的使用者，应该接受原材料上涨这部分的资金投入，但是目前橱柜行业产品价格上涨的时机尚未成熟，如果真的能够涨价，也只有高科技投入、高产品附加值的橱柜涨上去才有市场，仅仅凭借原材料价格上涨就提高橱柜产品的价格，精明的消费者是不可能为企业分担这部分成本投入的。</p>
          <p>与其说橱柜产品价格涨不上去，倒不如说是我们不敢涨。原材料价格的确在近年来涨得很厉害，但是我们的产品每涨一分钱，企业的市场销售情况就会受到影响，这个时候我们就不得不谨慎考虑。"产品随原材料价格上涨而上涨是较为理想的情况，消费者作为产品的使用者，本该为这部分的成本投入买单，但是这或许只是橱柜企业的一厢情愿，如何让消费者心甘情愿地多掏出一部分钱，企业也必须要考虑。"产品随原材料价格上涨而上涨是较为理想的情况，消费者作为产品的使用者，本该为这部分的成本投入买单，但是这或许只是橱柜企业的一厢情愿，如何让消费者心甘情愿地多掏出一部分钱，企业也必须要考虑。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
  #about
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
        max-width 1000px
        background #fff url(../../../assets/images/about/cp_bj.jpg) 0 0 repeat-x
        border 1px solid #dbd8da
        padding-bottom 50px
        .button
          margin 0 auto
          max-width 960px
          height 66px
          border-bottom 1px solid #cccccc
          display flex
          flex-wrap wrap
          align-items center
          .but
            width 86px
            height 34px
            line-height 34px
            background #dcdcdc
            margin-left 9px
            color #000
            font-size 16px
          .but:hover
            background #b41610
            color #fff
</style>
