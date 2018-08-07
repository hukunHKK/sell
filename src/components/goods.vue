<template>
  <div id="goods">
    <div class="menu-wrapper">
      <div v-for="(item,index) in goods" :key="index">
        <span v-if="item.type > 0" :class="classMap[item.type]"></span>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
import axios from 'axios'
export default {
  name:'d',
  data(){
    return {
      goods:[]
    }
  },
  created(){
    this.classMap = ['decrease','discount','special','invoice_1','guarantee']
    axios.get('/good/goods').then(res => {
      if(res.data.code === 0){
        this.goods = res.data.data;
      }
    })
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
  #goods
    position absolute
    top 174px
    bottom 48px
    display flex
    .menu-wrapper
      width 80px
      flex 0 0 80px
    .foods-wrapper
      flex 1

</style>


