import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MemberView from '@/views/MemberView.vue'
import MemberList from '@/components/MemberList.vue'
import MemberDetail from '@/components/MemberDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView,
    children:[
      {
        path: 'memberlist',
        name: 'memberlist',
        component: MemberList,
      },
      {
        path: 'memberdetail/:memberId',
        name: 'memberdetail',
        component: MemberDetail,
      },
      // {
      //   path: 'memberupdate',
      //   name: 'memberupdate',
      //   component: MemberUpdate,
      // },
      // {
      //   path: 'memberdelete',
      //   name: 'memberdelete',
      //   component: MemberDelete,
      // },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
