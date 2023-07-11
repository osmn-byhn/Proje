import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/guestView/HomeView.vue'
import Dashboard from '../views/userView/Dashboard.vue'
import LoginView from '../views/guestView/LoginView.vue'
import SignupView from '../views/guestView/SignupView.vue'
import ForgotPasswordView from '../views/guestView/ForgotPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignupView
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  ]
})

export default router
