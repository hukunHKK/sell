<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" class="set-img">
      </div>
      <div class="des">
        <div class="title">
          <span class="brand bg-image"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon bg-image" :class="classMap[seller.supports[0].type]"></span>
          <span class="desc">{{seller.supports[0].description}}</span>
        </div>
        <div class="num-wrapper" v-if="seller.supports">
          <span class="num">{{seller.supports.length}}个</span>
          <span class="font icon-keyboard_arrow_right"></span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <span class="bulletin">
        {{seller.bulletin}}
      </span>
      <span class="font icon-keyboard_arrow_right"></span>
    </div>
    <div class="bg">
      <img :src="seller.avatar">
    </div>
  </div>
</template>

<script>
export default {
  props:{  
    seller:{
      type: Object
    }
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice_1','guarantee']
  }
}
</script>
<style lang="stylus" ref='stylesheet/stylus'>
@import '../styl/index'
  .header
    background rgba(7,17,27,0.5)
    position relative
    overflow hidden
    .content-wrapper
      position relative
      overflow hidden
      padding 24px 0 18px 24px
      .avatar
        float left
        width 64px
        height 64px
        img
          border-radius 2px
          set-img(64px)
      .des
        margin-left 64px
        padding-left 16px
        position relative
        .title
          font-size 0
          .brand
            display inline-block
            width 30px
            height 18px
            vertical-align top
            bg-image(brand)
            background-size 30px 18px
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            height 18px
            color white
            font-weight bold
        .description
          font-size 12px
          color white
          font-weight 200
          line-height 12px
          margin-top 8px
        .supports
          margin-top 10px
          font-size 0
          font-weight 200
          color white
          .icon
            display inline-block
            width 16px
            height 16px
            background-size 100%
            vertical-align middle
            &.decrease
              bg-image(decrease_2)
            &.discount
              bg-image('discount_2')
            &.guarantee
              bg-image('guarantee_2')
            &.invoice
              bg-image('invoice_2')
            &.special
              bg-image('special_2')
          .desc
            font-size 10px
            line-height 12px
            margin-left 4px
            vertical-align middle
        .num-wrapper
          position absolute
          right 12px
          bottom 0
          padding 7px 8px
          background-color rgba(0,0,0,0.2)
          border-radius 12px
          font-size 10px
          line-height 12px
          color white
          font-weight 200
          .num
            font-size 10px
            
          .font
            font-size 10px
    .bulletin-wrapper
      position relative
      line-height 28px
      padding 0 18px 0 12px
      height 28px
      background-color rgba(7,17,27,0.2)
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      color white
      .bulletin-icon
        display inline-block
        width 22px
        height 12px
        bg-image(bulletin)
        background-size 100%
        vertical-align middle
      .bulletin
        font-size 10px
        font-weight 200
        margin-left 4px
        vertical-align middle
      .font
        position absolute
        right 8px
        top 8px
    .bg
      position absolute
      top 0
      left 0
      width 100%
      filter blur(10px)
      z-index -1
      img
        background-size cover
        width 100%
        
        
</style>



