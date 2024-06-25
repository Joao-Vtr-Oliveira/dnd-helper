import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlignmentView from '@/views/AlignmentView.vue'
import MonsterView from '@/views/MonsterView.vue'
import MonsterInfoView from '@/views/MonsterInfoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/alignment',
    name: 'alignment',
    component: AlignmentView
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: MonsterView
  },
  {
    path: '/monster/:id',
    name: 'monster-info',
    component: MonsterInfoView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
