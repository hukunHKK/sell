<template>
  <div id="app">
    <!-- <router-link to='/hello' tag='i'>hello</router-link> -->
    <v-header :seller='seller'></v-header>
    <div class="bar border-1px" @click='changeTitle'>
      <router-link to='goods'>商品</router-link>
      <router-link to='rating'>评价</router-link>
      <router-link to='sellers'>商家</router-link>
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
      seller:{}
    }
  },
  created(){
    axios.get('goods/seller').then(res=>this.seller = res.data.data)
  },
  methods:{
    changeTitle(e){
      // e.target.
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
    a
      flex 1
      text-align center
      font-size 14px
      color rgb(77,85,93)
      &.active
        color red

</style>

