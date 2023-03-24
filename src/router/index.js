import { createRouter, createWebHistory } from 'vue-router'


import login from '@/views/login.vue'
import register from '@/views/register.vue'
import write from '@/views/Write.vue'
import home from '@/views/Home.vue'
import w3 from '@/components/w3.vue'
import test from '@/components/test.vue'
import test2 from '@/components/test2.vue'
import coding from '@/components/coding.vue'


const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/write',
    name: 'write',
    component: write
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/w3/:id',
    name: 'w3',
    component: w3
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/test2',
    name: 'test2',
    component: test2
  },
  {
    path: '/coding',
    name: 'coding',
    component: coding
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
