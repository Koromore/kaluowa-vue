<template>
  <div id="hander">
    <div id="top">
      <img src="@/assets/images/header/logo.jpg" alt="" srcset="">
      <div class="right">
        <img src="@/assets/images/header/biaoyu.jpg" alt="" srcset="">
        <router-link
          v-for="item of topList"
          :key="item.id"
          :to='item.route'
          >
          <div :class=item.className>
            {{item.topName}}
          </div>
        </router-link>
      </div>
    </div>
    <div id="nav">
      <div class="content">
        <router-link
          v-for="item of navList"
          :key="item.id"
          :to='item.route'
          :class="[activate == item.activ ? 'nav_list activ' : 'nav_list']"
        >
          {{item.navName}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hander',
  props: {
    activate: String,
    topList: Array,
    navList: Array
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
  #top
    margin 0 auto
    max-width 1000px
    height 112px
    display flex
    flex-wrap wrap
    justify-content space-between
    align-content center
    align-items center
    .right
      align-self flex-end
      box-sizing border-box
      padding-bottom 20px
      display flex
      justify-content space-between
      align-content center
      align-items center
      .header-route
        width 55px
        height 30px
        margin-left 5px
        box-sizing border-box
        padding-left 18px
        line-height 30px
        color black
        font-size 12px
      .header-route1
        background url('../assets/images/header/list_tu.jpg') 0 0 no-repeat
      .header-route2
        background url('../assets/images/header/list_tu.jpg') -60px 0 no-repeat
      .header-route3
        background url('../assets/images/header/list_tu.jpg') -120px 0 no-repeat
  #nav
    height 38px
    background url('../assets/images/nav/nav.jpg') 0 0 repeat-x
    .content
      margin 0 auto
      max-width 1000px
      display flex
      justify-content space-between
      align-content center
      align-items center
      .nav_list
        height 38px
        line-height 38px
        color #fff
        flex auto
      .nav_list:hover
        background url('../assets/images/nav/hover.jpg') 0 0 repeat-x
      .activ
        background url('../assets/images/nav/hover.jpg') 0 0 repeat-x
</style>
