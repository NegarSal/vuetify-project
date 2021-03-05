import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Billing from '../views/Billing.vue'
import Support from '../views/Support.vue'
import Affilliate  from '../views/Affilliate.vue'
import Account from '../views/Account.vue'
import Deploy from '../components/Deploy.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: Products
  },
  {
    path: '/billing',
    name: 'Biling',
    component: Billing
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/affilliate',
    name: 'Affilliate',
    component: Affilliate
  },
  {
    path: '/account',
    name: 'Account',
    component:Account
  },
  {
    path: '/deploy',
    name: 'Deploy',
    component: Deploy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

