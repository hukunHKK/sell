<template>
  <div>
    头部
  </div>
</template>

<script>
export default {
  components:{  
    // c:c
  },
  created(){
    console.log(this)
  }
}
</script>
<style>
  .router-link-exact-active{
    background-color: chartreuse;
  }
  .router-link-active{
    background-color: brown;
  }
  .t-enter{
    transform: translateX(-100%);
  }
  .t-enter-to{
    transform: translateX(0)
  }
  .t-enter-active{
    transition: all 1s ;
  }
  .t-leave{
    transform: translateX(0);
  }
  .t-leave-to{
    transform: translateX(100%);
  }
  .t-leave-active{
    transition:  all 1s;
  }
  .trans{
    background: #ccc;
    height: 200px;
    width: 100%;
    position: absolute;
  }
</style>


