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
        <div class="list_box">
          <div class="list" v-for="(item, index) in list" :key="index">
            <div>
              <img :src="item.img_url" width="288" height="175" alt="" srcset="">
            </div>
            <p class="list_title">{{item.title}}</p>
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
        title: '橱柜',
        img_url: require('@/assets/images/product/product1.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product2.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product3.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product4.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product5.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product6.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product1.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product2.jpg')
      },
      {
        title: '橱柜',
        img_url: require('@/assets/images/product/product3.jpg')
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
        .list_box
          width 960px
          margin 0 auto
          display flex
          flex-wrap wrap
          justify-content space-around
          .list
            width 30%
            margin-top 13px
            // display flex
            // flex-wrap wrap
            // justify-content left
            // align-content center
            // align-items center
            .list_title
              margin-top 6px
            img
              width 100%
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
