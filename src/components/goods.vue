<template>
  <div id="goods">
    <div class="menu-wrapper" ref="menu">
      <div class="h-wrapper">
        <div v-for="(item,index) in goods" :class="{currentItem:index===currentIndex}" @click="selectItem(index,$event)" :key="index" class="menu-item">
          <div class="text-wrapper">
            <span v-if="item.type > 0" :class="classMap[item.type]" class="bg-image"></span>
            <span class="text">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="foods-wrapper" ref="food">
      <ul class="food-wrapper">
        <li class="food-item" v-for="(item,index) in goods" :key="index">
          <div class="name">{{item.name}}</div>
          <ul class="food-list">
            <li class="list-item" v-for="(i,ind) in item.foods" :key="ind">
              <img :src="i.icon">
              <div class="food-text">
                <span class="food-name">{{i.name}}</span>
                <span class="food-des" v-if="i.description">{{i.description}}</span>
                <span class="sell">
                  <span class="food-sellCount">月售{{i.sellCount}}份</span>
                  <span class="food-rating">好评率{{i.rating}}%</span>
                </span>
                <span class="price">
                  <span class="money-icon">¥</span>
                  <span class="money">{{i.price}}</span>
                  <span class="oldPrice">{{i.oldPrice}}</span>
                </span>
              </div>
              <div class="cart-control-wrapper">
                <div class="num-wrapper">
                  <span class="icon-remove_circle_outline"></span>
                  <!-- <span class="num">{{}}</span> -->
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import axios from 'axios'
import BScrool from 'better-scroll'
export default {
  name:'d',
  data(){
    return {
      goods:[],
      scrollY:0,
      heightList:[]
    }
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice_1','guarantee']
    axios.get('/good/goods').then(res => {
      if(res.data.code === 0){
        this.goods = res.data.data;
        console.log(this.goods)
        this.$nextTick(()=>{
          this.initScroll()
          this.getHeight()
        })
      }
    })
  },
  methods:{
    initScroll(){
      this.menu = new BScrool(this.$refs.menu,{
        click:true
      })
      this.food = new BScrool(this.$refs.food,{
        probeType:3
      })
      this.food.on('scroll',pos=>{
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    getHeight(){
      this.foodItem = this.$refs.food.getElementsByClassName('food-item')
      this.menuItem = this.$refs.menu.getElementsByClassName('menu-item')
      let initHeight = 0
      this.heightList = [0];
      [].forEach.call(this.foodItem,item=>{
        initHeight += item.clientHeight
        this.heightList.push(initHeight)
      })
    },
    selectItem(index,event){
      let el = this.foodItem[index]
      this.food.scrollToElement(el,300);
    }
  },
  computed:{
    currentIndex(){
      for (let i = 0; i < this.heightList.length - 1; i++) {
        const height1 = this.heightList[i]
        const height2 = this.heightList[i+1]
        if(this.scrollY>=height1 && this.scrollY<height2){
          let el
          if(i>3){
            el = this.menuItem[i-3]
          }else{
            el = this.menuItem[0]
          }
          this.menu.scrollToElement(el,100)
          return i
        }
      }
    }
  },
  mounted(){
    // this.initScroll()
  },
  watch:{
    // msg(){
    //   console.log(arguments)
    //   this.$store.commit('setMsg',this.msg,'1');
    //   // this.$store.dispatch('setMsg',this.msg);
    // }
    // ...mapMutations('news',{
    //   msg:'setMsg'
    // }),
    ...mapActions('news',{
      msg:'setMsg'
    })
  }
}
</script>
<style lang="stylus">
  @import '../styl/index'
  #goods
    position absolute
    top 174px
    bottom 48px
    left 0
    right 0
    display flex
    overflow hidden
    .menu-wrapper
      width 80px
      flex 0 0 80px
      background-color #f3f5f7
      .menu-item
        height 54px
        .text-wrapper
          display table-cell
          vertical-align middle
          position relative
          left 12px
          width 56px
          height 54px
          border-1px(rgba(7,17,27,0.1))
          .bg-image
            display inline-block
            width 14px
            height 14px
            background-size 100%
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
          .text
            font-size 12px
            line-height 14px
            color rgb(77,85,93)
            font-weight 200
      .currentItem
        background-color #fff
        .text-wrapper
          .text
            color rgb(7,17,27)
            font-weight 500
    .foods-wrapper
      flex 1
      .food-item
        .name
          height 26px
          line-height 26px
          padding-left 14px
          background-color #f3f5f7
          border-left: 4px solid #d9dde1;
          color: rgb(147, 153, 159)
          font-size: 12px
        .food-list
          margin 0 18px
          .list-item
            display flex
            padding 18px 0
            border-1px(rgba(7,17,27,0.1))
            img
              width 57px
              height 57px
            .food-text
              margin-left 10px
              margin-top 2px
              display flex
              flex-direction column
              .food-name
                font-size 14px
                line-height 14px
                color rgb(7,17,27)
              .food-des
                font-size 10px
                line-height 10px
                color rgb(147,153,159)
                margin-top 8px
              .sell
                font-size 0px
                line-height 10px
                color rgb(147,153,159)
                margin-top 8px
                .food-sellCount
                  font-size 10px
                .food-rating
                  font-size 10px
                  margin-left 12px
              .price
                font-size 14px
                color #f01414
                font-weight 700
                line-height 24px
                .money-icon
                  font-size 10px
                  font-weight normal
                .money
                  line-height 14px
                .oldPrice
                  color rgb(147,153,159)
                  font-size 10px
                  text-decoration line-through
                  vertical-align text-top
                  line-height 14px
            &:last-child
              &:after
                width 0



</style>


