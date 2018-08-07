import {mock} from 'mockjs'
import data from '../data.json'
mock('goods/seller',{
  code:0,
  codeMsg:'成功',
  data:data.seller
})
mock('/good/goods', {
  code: 0,
  codeMsg: '成功',
  data: data.goods
})

mock('/good/ratings', {
  code: 0,
  codeMsg: '成功',
  data: data.ratings
})