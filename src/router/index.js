import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import err from '@/components/err'
import Rating from '@/components/rating'
import Goods from '@/components/goods'
import Sellers from '@/components/sellers'
import app from '@/App'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/header',
      component:Header
    },{
      path: '/Goods',
      name: 'Goods',
      component: Goods,
      // children:[
      //   {
      //     path:'hot',
      //     component:hot
      //   },
      //   {
      //     path:'person',
      //     component:person
      //   }
      // ]
    },
    {
      path: '/rating',
      component: Rating
    },
    {
      path:'/sellers',
      component:Sellers
    },
    {
      path:'*',
      redirect(to){
        console.log(to)
        if(to.path === '/'){
          return 'goods'
        }else{
          return {
            path:'/err',
            query:{
              name:'1',
              age:'2'
            }
          }
        }
      }
    }
  ],
  // mode:'history',
  linkActiveClass:'q',
  linkExactActiveClass:'w'
})
// router.beforeEach((to,from,next)=>{
//   next()
// })
export default router

