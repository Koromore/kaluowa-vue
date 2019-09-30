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
  props: {
    bannerImg: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      }
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
    .swiper-container
      max-width 1000px
      .banner_img
        width 100%
</style>
