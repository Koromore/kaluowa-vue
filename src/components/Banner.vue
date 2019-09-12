<template>
  <div id="banner">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of bannerImg" :key="item.id">
        <img class="banner_img" :src="item.imgUrl" alt="">
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
      bannerImg: [
        {
          id: '001',
          imgUrl: require('@/assets/images/banner/banner1.jpg')
        },
        {
          id: '002',
          imgUrl: require('@/assets/images/banner/banner2.jpg')
        },
        {
          id: '003',
          imgUrl: require('@/assets/images/banner/banner3.jpg')
        },
        {
          id: '004',
          imgUrl: require('@/assets/images/banner/banner4.jpg')
        },
        {
          id: '005',
          imgUrl: require('@/assets/images/banner/banner5.jpg')
        },
        {
          id: '006',
          imgUrl: require('@/assets/images/banner/banner6.jpg')
        }
      ]
    }
  },
  computed: {
    showSwiper () {
      return this.bannerImg.length
    }
  }
}
</script>

<style scoped lang="stylus">
  #banner >>> .swiper-pagination-bullet-active
    background: red
  #banner
    overflow: hidden
    width: 100%
    background: #eee
    .swiper-container
      max-width 1000px
      .banner_img
        width 100%
</style>
