<template>
  <div class="shopcart-wrapper">
    <div class="content">
      <div class="cart-wrapper">
        <div class="chart-icon-wrapper">
          <div class="chart-icon icon-shopping_cart" @click="change"></div>
          <div class="total-count" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
      </div>
      <div class="deliver-fee">
        <div class="total-price">¥{{totalPrice}}</div>
        <div class="text">另需配送费¥{{deliveryPrice}}元</div>
      </div>
      <div class="deliver-base">
        <div class="text" :class="{candelivery:inform==='去结算'}">{{inform}}</div>
      </div>
    </div>
    <div class="choosed-wrapper" v-show="showChoosed" @click.self='change'>
      <div class="fd-wrapper">
        <div class="title">
          <span>购物车</span>
          <span class="clear" @click="clean">清空</span>
        </div>
        <div class="fd-list">
          <div class="fd-item" v-for="(item,index) in foods" :key="index">
            <span class="name">{{item.name}}</span>
            <span class="price-w">
              <span class="price">{{item.price*item.count}}</span>
              <span class="control">
                <cart-control :food=item></cart-control>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartControl from './cartControl'
export default {
  props:{
    deliveryPrice:{
      type:Number
    },
    minPrice:{
      type:Number
    }
  },
  components:{
    'cart-control':cartControl
  },
  data(){
    return {
      showChoosed:false,
    }
  },
  computed:{
    totalCount(){
      let num = 0
      this.foods.forEach(item=>{
        num += item.count
      })
      return num
    },
    totalPrice(){
      let price = 0
      this.foods.forEach(item=>{
        price += item.count*item.price
      })
      return price
    },
    inform(){
      if(this.totalPrice === 0){
        return `¥${this.minPrice}元起送`
      }else if(this.totalPrice < this.minPrice){
        return `还差¥${this.minPrice-this.totalPrice}元起送`
      }else{
        return '去结算'
      }
    },
    foods:{
      get(){
        return this.$store.state.foods
      },
      set(value){
        this.$store.state.foods.forEach(item=>{
          item.count = 0
        })
      }
    }
  },
  methods:{
    change(){
      this.showChoosed = !this.showChoosed
    },
    clean(){
      this.foods = []
    }
  }
}
</script>
<style lang="stylus">
  @import '../styl/index.styl'
  .shopcart-wrapper
    position fixed
    bottom 0
    left 0
    height 48px
    width 100%
    background-color #141d27
    .content
      display flex
      .cart-wrapper
        flex 0 0 80px
        height 48px
        .chart-icon-wrapper
          margin-left 18px
          width 60px
          height 48px
          position absolute
          .chart-icon
            position relative
            margin-top -12px
            width 44px
            height 44px
            border 8px solid #141d27
            font-size 24px
            line-height 44px
            text-align center
            color rgba(255,255,255,0.4)
            font-weight 700
            background-color #2b333b
            border-radius 50%
            &.hasfood
              background-color #00a0dc
          .total-count
            position absolute
            top 4px
            right 0
            line-height 16px
            width 24px
            height 16px
            font-size 9px
            font-weight 700
            color #ffffff
            background-color rgb(240,20,20)
            border-radius 8px
            text-align center
      .deliver-fee
        flex 1
        // display flex
        .total-price
          display inline-block
          margin 12px 0 12px 18px
          padding-right 12px
          font-size 16px
          line-height 24px
          color rgba(255,255,255,0.4)
          font-weight 700
          border-1px-right(rgba(255,255,255,0.4))
        .text
          display inline-block
          font-size 16px
          line-height 48px
          font-weight 700
          color rgba(255,255,255,0.4)
          margin-left 8px
      .deliver-base
        flex 0 0 105px
        .text
          color rgba(255,255,255,0.4)
          font-size 12px
          line-height 48px
          font-weight 700
          text-align center
          background-color #2b333b
          &.candelivery
            background-color #008000
            color #fff
  .choosed-wrapper{
    position fixed
    top 0
    left 0
    bottom 48px
    right 0
    background rgba(7,17,27,0.6)
    z-index -1
    .fd-wrapper{
      position absolute
      bottom 0
      width 100%
      font-size 14px
      color rgb(7,17,27)
      .title{
        height 40px
        padding-left 18px
        font-weight 200
        line-height 40px
        background #f3f5f7
        border-bottom 1px rgab(7,17,27,0.1) solid
        .clear{
          font-size 12px
          color rgb(0,160,220)
          float right
          margin-right 18px
        }
      }
      .fd-list{
        max-height 360px
        overflow scroll
        .fd-item{
          height 48px
          background #fff
          line-height 48px
          font-size 14px
          .name{
            margin-left 18px
          }
          .price-w{
            float right
            .price{
              color rgb(240,20,20)
              font-weight 700
              margin-right 12px
            }
            .control{
              float right
              padding-right 18px
              padding-top 12px
            }
          }
        }
      }
    }
  }



</style>

