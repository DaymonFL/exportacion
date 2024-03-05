/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   extendRoutes: setupLayouts,
// })

const router = createRouter({
  // history: createWebHistory(importprocess.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=> import('@/views/InicioLogin.vue'),
    }
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.jwt;
  if( to.matched.some((record) => record.meta.requiresAuth) ){
    if( !token ){
      next({name: 'Login'});
    }else {
      next();
    }
  } else {
    next();
  }
})

export default router
