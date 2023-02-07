import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue"
import ProductDetails from "@/views/ProductDetails.vue"
import CheckoutView from "@/views/CheckoutView.vue"
import RatingView from '@/views/RatingView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component:LoginView,
    props: true
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
    props: true
  },
  {
    path: '/product-detail/:id',
    name: 'product-detail',
    component: ProductDetails,
    props: true
  },
  {
    path: '/rating',
    name: 'rating',
    component: RatingView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
