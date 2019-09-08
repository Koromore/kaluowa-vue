<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  // props: {
  //   list: Array
  // },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      },
      list: [
        {
          imgUrl: require('../assets/images/banner/banner1.jpg')
        },
        {
          imgUrl: require('../assets/images/banner/banner2.jpg')
        },
        {
          imgUrl: require('../assets/images/banner/banner3.jpg')
        },
        {
          imgUrl: require('../assets/images/banner/banner4.jpg')
        },
        {
          imgUrl: require('../assets/images/banner/banner5.jpg')
        },
        {
          imgUrl: require('../assets/images/banner/banner6.jpg')
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    // height: 0
    // padding-bottom: 31.25%
    // background: #eee
    .swiper-wrapper
      width 100%
      .swiper-img
        width: 100%
</style>
