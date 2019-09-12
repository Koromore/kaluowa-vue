<template>
  <div id="seamlessroll">
    <div class="content">
      <p class="title">最新产品</p>
      <div class="seamless_box">
        <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
          <ul class="item"
              :style="'width:' + newsList.length * 300 + 'px'"
          >
            <li v-for="item in newsList"
                :key="item.id"
            >
              <img :src=item.imgUrl alt="" srcset="">
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Seamlessroll',
  components: {},
  data () {
    return {
      newsList: [
        {
          imgUrl: require('@/assets/images/index/tu3.jpg')
        },
        {
          imgUrl: require('@/assets/images/index/tu3.jpg')
        },
        {
          imgUrl: require('@/assets/images/index/tu3.jpg')
        },
        {
          imgUrl: require('@/assets/images/index/tu3.jpg')
        },
        {
          imgUrl: require('@/assets/images/index/tu3.jpg')
        }
      ]
    }
  },
  computed: {
    optionLeft () {
      return {
        // 数值越大速度滚动越快
        step: 1,
        // 开始无缝滚动的数据量 //this.dataList.length
        limitMoveNum: this.newsList.length,
        // 是否开启鼠标悬停stop
        hoverStop: true,
        // 0向下 1向上 2向左 3向右
        direction: 2,
        // 开启数据实时监控刷新dom
        openWatch: true,
        // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleHeight: 0,
        // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        singleWidth: 0,
        // 单步运动停止的时间(默认值1000ms)
        waitTime: 1000
      }
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
  .content
    width 1000px
    margin 0 auto 13px
    .title
      text-align left
      font-size 16px
      background url(../../../assets/images/index/listb.jpg) no-repeat
      box-sizing border-box
      padding-left 13px
      margin 13px 0
    .seamless_box
      width 1000px
      border 1px solid #e3e0e1
      box-sizing border-box
      padding 13px 0 0
      .seamless-warp2
        margin 0 auto
        overflow hidden
        height 25px
        width 960px
        height 200px
        // box-sizing border-box
        // padding 30px
        // ul.item
        //   width 1500px
        li
          float left
          margin-right 10px
</style>
