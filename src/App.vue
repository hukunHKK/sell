<template>
  <div id="app">
    <!-- <router-link to='/hello' tag='i'>hello</router-link> -->
    <v-header :seller='seller'></v-header>
    <div class="bar border-1px">
      <div :class="{active:isActive[0]}" @click='changeTitle(0)'>
        <router-link to='goods'>商品</router-link>
      </div>
      <div :class="{active:isActive[1]}" @click='changeTitle(1)'>
        <router-link to='rating'>评价</router-link>
      </div>
      <div :class="{active:isActive[2]}" @click='changeTitle(2)'>
        <router-link to='sellers'>商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import header from './components/header'
export default {
  name: 'App',
  components:{
    'v-header':header
  },
  data(){
    return {
      seller:{},
      isActive:[true,false,false]
    }
  },
  created(){
    axios.get('goods/seller').then(res=>this.seller = res.data.data)
  },
  methods:{
    changeTitle(index){
      this.isActive = [false,false,false];
      this.isActive[index] = true;
    }
  }
}

</script>
<style lang="stylus" ref='stylesheet/stylus'>
@import './styl/index'
@import './css/reset.css'
  .bar
    display flex
    height 40px
    line-height 40px
    border-1px(rgba(7,17,27,0.1))
    div
      flex 1
      text-align center
      font-size 14px
      color rgb(77,85,93)
      &.active
        a
          color rgb(240,20,20)

</style>

