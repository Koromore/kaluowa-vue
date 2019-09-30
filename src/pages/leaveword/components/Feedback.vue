<template>
  <div id="feedback">
    <div class="container">
      <div class="title">
        <p class="p1">在线留言</p>
        <p class="p2">Feedback</p>
      </div>
      <div class="content">
        <div class="button">
          <router-link to="" class="but">
            在线留言
          </router-link>
        </div>
        <ul class="feedback_box">
          <li><p>标题：</p><input type="text" placeholder="请输入标题"></li>
          <li><p>联系人：</p><input type="text"></li>
          <li><p>QQ号码：</p><input type="number"></li>
          <li><p>电话：</p><input type="number"></li>
          <li><p>手机：</p><input type="number"></li>
          <li><p>邮箱：</p><input type="text"></li>
          <li><p>地址：</p><input type="text"></li>
          <li><p>描述：</p><textarea name="describe" id="" cols="30" rows="10"></textarea></li>
          <li><div>提交</div><div>重置</div></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
  #feedback
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
      .feedback_box
        max-width 960px
        margin 0 auto
        display flex
        flex-wrap wrap
        justify-content flex-start
        align-items center
        li
          width 100%
          box-sizing border-box
          margin-top 9px
          text-align left
          display flex
          flex-wrap wrap
          justify-content flex-start
          align-items center
          p
            width 150px
            text-align right
          input
            width 200px
            height 30px
            box-sizing border-box
            border 1px solid #dbdbdb
            background #fff
          textarea
            width 450px
            height 120px
            box-sizing border-box
            border 1px solid #dbdbdb
            background #fff
        li:nth-last-of-type(3)
          input
            width 450px
        li:nth-last-of-type(1)
          padding-left 150px
          div
            width 81px
            height 36px
            line-height 36px
            text-align center
            color #fff
            background #b90f0f
          div:nth-last-of-type(1)
            margin-left 9px
</style>
