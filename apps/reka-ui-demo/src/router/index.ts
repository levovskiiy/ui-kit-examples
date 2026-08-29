import { createRouter, createWebHistory } from 'vue-router'
import ComponentsLayout from '@/views/components/ComponentsLayout.vue'
import ButtonPage from '@/views/components/ButtonPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/components/button',
    },
    {
      path: '/components',
      component: ComponentsLayout,
      children: [
        {
          path: '',
          redirect: '/components/button',
        },
        {
          path: 'button',
          component: ButtonPage,
        },
      ],
    },
  ],
})

export default router
