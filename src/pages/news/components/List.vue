<template>
  <div id="list">
    <div class="container">
      <div class="title">
        <p class="p1">公司新闻</p>
        <p class="p2">Company News</p>
      </div>
      <div class="content">
        <div class="button">
          <router-link to="" class="but">
            公司新闻
          </router-link>
          <router-link to="" class="but">
            行业新闻
          </router-link>
        </div>
        <div class="list">
          <div v-for="(item, index) in list" :key="index">
            <router-link to="/news" class="list_title">
              {{item.title}}
            </router-link>
            <p class="list_content">{{item.content}}</p>
            <p class="list_time">{{item.time}}</p>
          </div>
        </div>
        <div class="paging">
          <div class="page">第1/5页</div>
          <div>首页</div>
          <div>上一页</div>
          <div>下一页</div>
          <div>最后一页</div>
          <div>共50条记录</div>
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
    return {
      list: [{
        title: '橱柜企业应精益求精以提升消费体验为己任',
        content: '在价格战和团购都不再新鲜的当下，哪怕橱柜商家真的狠心割肉让利赚眼球，也不能免除消费者越来越理智，导致对于活动真实性的怀疑。这种情况下，橱柜企业应以提升消费者的购物体验为己任，从自身做起，打造满意服务。橱柜企业应精益求精以提升消费体验为己任橱柜门店的展示效果可能有限在现在很多的橱柜品牌专卖店中其实一直存在着限制顾客良好体验的不利因素。首先就是不够理解顾客的需求。到底怎样最可行地向顾客展示出产品的最好...',
        time: '时间：2014-10-20 09:22:04'
      },
      {
        title: '橱柜企业应精益求精以提升消费体验为己任',
        content: '在价格战和团购都不再新鲜的当下，哪怕橱柜商家真的狠心割肉让利赚眼球，也不能免除消费者越来越理智，导致对于活动真实性的怀疑。这种情况下，橱柜企业应以提升消费者的购物体验为己任，从自身做起，打造满意服务。橱柜企业应精益求精以提升消费体验为己任橱柜门店的展示效果可能有限在现在很多的橱柜品牌专卖店中其实一直存在着限制顾客良好体验的不利因素。首先就是不够理解顾客的需求。到底怎样最可行地向顾客展示出产品的最好...',
        time: '时间：2014-10-20 09:22:04'
      },
      {
        title: '橱柜企业应精益求精以提升消费体验为己任',
        content: '在价格战和团购都不再新鲜的当下，哪怕橱柜商家真的狠心割肉让利赚眼球，也不能免除消费者越来越理智，导致对于活动真实性的怀疑。这种情况下，橱柜企业应以提升消费者的购物体验为己任，从自身做起，打造满意服务。橱柜企业应精益求精以提升消费体验为己任橱柜门店的展示效果可能有限在现在很多的橱柜品牌专卖店中其实一直存在着限制顾客良好体验的不利因素。首先就是不够理解顾客的需求。到底怎样最可行地向顾客展示出产品的最好...',
        time: '时间：2014-10-20 09:22:04'
      },
      {
        title: '橱柜企业应精益求精以提升消费体验为己任',
        content: '在价格战和团购都不再新鲜的当下，哪怕橱柜商家真的狠心割肉让利赚眼球，也不能免除消费者越来越理智，导致对于活动真实性的怀疑。这种情况下，橱柜企业应以提升消费者的购物体验为己任，从自身做起，打造满意服务。橱柜企业应精益求精以提升消费体验为己任橱柜门店的展示效果可能有限在现在很多的橱柜品牌专卖店中其实一直存在着限制顾客良好体验的不利因素。首先就是不够理解顾客的需求。到底怎样最可行地向顾客展示出产品的最好...',
        time: '时间：2014-10-20 09:22:04'
      },
      {
        title: '橱柜企业应精益求精以提升消费体验为己任',
        content: '在价格战和团购都不再新鲜的当下，哪怕橱柜商家真的狠心割肉让利赚眼球，也不能免除消费者越来越理智，导致对于活动真实性的怀疑。这种情况下，橱柜企业应以提升消费者的购物体验为己任，从自身做起，打造满意服务。橱柜企业应精益求精以提升消费体验为己任橱柜门店的展示效果可能有限在现在很多的橱柜品牌专卖店中其实一直存在着限制顾客良好体验的不利因素。首先就是不够理解顾客的需求。到底怎样最可行地向顾客展示出产品的最好...',
        time: '时间：2014-10-20 09:22:04'
      }]
    }
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
        .list
          width 960px
          margin 0 auto
          div
            height 132px
            margin-top 9px
            border-bottom 1px dashed #dcdcdc
            display flex
            flex-wrap wrap
            justify-content left
            align-content center
            align-items center
            p
              width 830px
              line-height 24px
              text-align left
              font-size 12px
            .list_title
              font-size 14px
              font-weight bold
              color #c91e18
              // margin-bottom 6px
            .list_content
              margin-top 9px
            .list_time
              color #6a6969
        .paging
          width 960px
          margin 30px auto
          display flex
          flex-wrap wrap
          justify-content center
          align-items center
          div
            margin-left 13px
            font-size 13px
          .page
            margin 0
</style>
