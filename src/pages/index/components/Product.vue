<template>
  <div id="product">
    <div class="content">
      <div class="list left">
        <div class="text_box">
          <p class="p1">整体厨柜系列</p>
          <p class="p2">整体橱柜系列，打造出真正适合中国人的健康橱柜系列，势必开创出一个整体橱柜系列的新纪元。</p>
        </div>
        <div class="img_box">
          <img class="tu" src="@/assets/images/index/tu1.jpg" alt="" srcset="">
        </div>
      </div>
      <div class="list right">
        <div class="text_box">
          <p class="p1">厨房电器系列</p>
          <p class="p2">集成环保灶的设计，带来更健康的功能组合，更舒适的使用体验。无论是政绩的综合性能，个性化整体厨房的适配性，还是日常的清洁维护，都拥有与众不同的卓越魅力。</p>
        </div>
        <div class="img_box">
          <img class="tu" src="@/assets/images/index/tu2.jpg" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
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
      width 45%
      box-sizing border-box
      padding-left 13px
      .text_box
        height 108px
        box-sizing border-box
        padding-top 18px
        p
          width 420px
          text-align left
        .p1
          font-size 22px
          font-weight bold
          line-height 26px
        .p2
          font-size 12px
          line-height 20px
      .img_box
        width 420px
        height 172px
        overflow hidden
        .tu
          width 420px
          height 172px
    // .right

</style>
