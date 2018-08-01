<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
// import a from './a'
export default {
  name: 'HelloWorld',
  components:{
    // ac:a,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div{
    font-size:20px;
  }
</style>
<style scoped>
  div{
    color: blueviolet;
  }
</style>

