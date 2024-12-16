import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../views/ProductList.vue";
import CreateProduct from "../views/CreateProduct.vue";
import UserIfno from "../views/UserInfo.vue";
import ApiFetchTest from "../views/ApiFetchTest.vue";
import HomePage from "@/views/HomePage.vue";
import LouisHomework from "@/views/LouisHomework.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/productList",
    name: "product-list",
    component: ProductList,
  },
  {
    path: "/createProduct",
    name: "create-product",
    component: CreateProduct,
  },
  {
    path: "/userInfo",
    name: "user-info",
    component: UserIfno,
  },
  {
    path: "/Api-Test",
    name: "api-test",
    component: ApiFetchTest,
  },
  {
    path: "/louishomework",
    name: "louis-homework",
    component: LouisHomework,
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
