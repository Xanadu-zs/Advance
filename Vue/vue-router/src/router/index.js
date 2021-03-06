import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // hash
  routes: [
    {
      path: '/',
      name: '首页！！',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/Hi',
      name: 'hi组件',
      components: {
        default: Hi,
        left: Hi2,
        right: Hi1
      },
      alias: '/xana'
      // alias重定向！
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'params',
      component: Params
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/goback',
      redirect: '/hi'
      // 重定向！！
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId/:newsTitle'
      // 重定向！！
    }
  ]
})
