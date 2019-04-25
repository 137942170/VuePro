import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import HomePage from '@/pages/HomePage'
import Content from '@/pages/Content'
import ContentList from '@/pages/ContentList'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/Content',
        component: Content
      },
      {
        path: '/HomePage',
        component: HomePage
      },
      {
        path: '/ContentList/:id',
        component: ContentList
      }
    ]
  }]
})
