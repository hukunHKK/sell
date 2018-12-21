<template>
  <div class="control-cart">
    <span class="icon-remove_circle_outline" v-show='food.count>0' @click="sub"></span>
    <span class="text" v-show='food.count>0'>{{food.count}}</span>
    <span class="icon-add_circle" @click="add"></span>
  </div>
</template>
<script>
import vue from 'vue'
export default {
  props:{
    food:{
      type:Object,
      default:()=>{return {}}
    }
  },
  data(){
    return {
      number:0
    }
  },
  methods:{
    sub(event){
      // if(event._constructed){
        this.food.count--
      // }
    },
    add(event){
      console.log(event)
      // if(event._constructed){
        if(!this.food.count){
          vue.set(this.food,'count',1)
        }else{
          this.food.count++
        }
      // }
    }
  }
}
</script>
<style lang="stylus">
.control-cart{
  color #00a0dc
  font-size 24px
  line-height 24px
  height 24px
  span{
    line-height 24px
    display inline-block
    vertical-align bottom
  }
  .text{
    font-size 10px
    color rgb(147,153,159)
  }
}
</style>


