<template>
  <span>
    d组件:<input v-model="msg">
  </span>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  name:'d',
  data(){
    return {
      msg:this.$store.state.msg
    }
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

