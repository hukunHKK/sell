<template>
  <span>
    c组件:{{msg}}
  </span>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState({
      // msg: 'msg',
      msg:state=>state.news.msg
      // msg:state=>state.news.msg
    }),
    // ...mapGetters({
    //   msg:'msg'
    // })
  }
}
</script>

