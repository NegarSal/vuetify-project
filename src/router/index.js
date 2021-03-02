import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Billing from '../views/Billing.vue'
import Support from '../views/Support.vue'
import Affilliate  from '../views/Affilliate.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/Billing',
    name: 'Biling',
    component: Billing
  },
  {
    path: '/Support',
    name: 'Support',
    component: Support
  },
  {
    path: '/Affilliate',
    name: 'Affilliate',
    component: Affilliate
  },
  {
    path: '/Account',
    name: 'Account',
    component:Account
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
