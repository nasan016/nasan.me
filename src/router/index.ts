import { createRouter, createWebHistory } from 'vue-router'
import  Home  from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/Home',
    name: 'Home',
    component: Home
    },
    {
      path: '/',
      name: 'Main',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  ]
})

export default router
