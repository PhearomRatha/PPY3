import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
const routes = [
  {
    path: '/', // The path to the About Us page
    name: 'home',
    component: HomeView,  // Load the AboutUs component when this route is visited
  },
  {
    path: '/about_us', // The path to the About Us page
    name: 'about us',
    component: () => import('@/views/AboutUsView.vue'),  // Load the AboutUs component when this route is visited
  },
  {
    path: '/sing_up', // The path to the About Us page
    name: 'Sing Up',
    component: () => import('@/views/SignupView.vue'),  // Load the AboutUs component when this route is visited
  },
  {
    path: '/sing_in', // The path to the About Us page
    name: 'Sing In',
    component: () => import('@/views/SigninView.vue'),  // Load the AboutUs component when this route is visited
  },

  {
    path:'/detail_course/:courseId',
    name:'detail_course',
    component:()=> import('@/views/CourseDeetailView.vue')
  }
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // Routes will define which component to show for each URL
});

export default router;
