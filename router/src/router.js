import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import Sobre from './views/sobre/Sobre.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  linkActiveClass: 'active',
  routes:[
    {path:'/contatos', component: Contatos},
    {path:'/sobre', component: Sobre},
    {path:'/', component: Home}
  ]
})