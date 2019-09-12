<template>
  <div id="activity">
    <div class="content">
      <div class="list brand">
        <div class="left">
          <p class="title">欧卡罗品牌</p>
          <div class="text">欧卡罗（OKELO），一家致力于满足全球消费者整体厨房应用需求的企业，中国最大的整体橱柜生产企业之一。始创与1998年，基于13年锐意进取和极具前瞻性的全球战略目光，欧卡罗橱柜迅速发展成在华东地区产业链前后相关联度趋合的知名企业，的交易平台、用面挂钩，并被应邀成为国家标准的修编单位。</div>
          <router-link class='router' to="/">
            <img src="@/assets/images/index/listc.jpg" alt="" srcset="">
            企业文化
          </router-link>
          <router-link class='router' to="/">
            <img src="@/assets/images/index/listc.jpg" alt="" srcset="">
            品牌介绍
          </router-link>
        </div>
        <div class="right">
          <img src="@/assets/images/index/fangzi.jpg" alt="" srcset="">
        </div>
      </div>
      <div class="list news">
        <div class="left">
          <p class="title">新闻资讯</p>
          <div class="news_list">
            <router-link class="news_a" to="/">
            【公司新闻】步入竞争红海，悉数橱柜市场促
            </router-link>
            <router-link class="news_a" to="/">
            【行业资讯】欧卡罗原创精品 挑战山寨价格
            </router-link>
            <router-link class="news_a" to="/">
            【行业资讯】欧卡罗膜压新品雅典娜知
            </router-link>
            <router-link class="news_a" to="/">
            【公司新闻】创新品质 尽在出众实力
            </router-link>
            <router-link class="news_a" to="/">
            【公司新闻】创新品质 尽在出众实力
            </router-link>
          </div>
          <router-link class='router' to="/">
            <img src="@/assets/images/index/listc.jpg" alt="" srcset="">
            公司新闻
          </router-link>
          <router-link class='router' to="/">
            <img src="@/assets/images/index/listc.jpg" alt="" srcset="">
            行业新闻
          </router-link>
        </div>
        <div class="right">
          <img src="@/assets/images/index/she.jpg" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  components: {},
  data () {
    return {

    }
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
  .content
    margin 0 auto
    max-width 1000px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-content center
    align-items center
    box-sizing border-box
    padding 13px 0
    .list
      width 48%
      height 240px
      display flex
      flex-wrap wrap
      justify-content center
      align-content center
      align-items center
      box-sizing border-box
      border 1px solid #e1e0e1
      border-top none
      padding 24px 9px
      background url(../../../assets/images/index/bj_tu.jpg) repeat-x
      .left
        width 68%
        height 100%
        display flex
        flex-wrap wrap
        align-content space-between
        .router
          color #c91e18
          width 78px
        p
          font-size 16px
          background url(../../../assets/images/index/listb.jpg) no-repeat
          padding-left 13px
        .text
          text-align left
          font-size 12px
          line-height 20px
        .news_list
          text-align left
          line-height 24px
          .news_a
            color black
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
      .right
        width 32%
        // background red
</style>
