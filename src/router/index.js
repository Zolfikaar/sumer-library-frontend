import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { props } from "cypress/types/bluebird";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/books",
      name: "books",
      component: () => import("../views/Books/AllBooks.vue"),
    },
    {
      path: "/book/:id",
      name: "book",
      component: () => import("../views/Books/SingleBook.vue"),
      props: true,
    },
    {
      path: "/authors",
      name: "authors",
      component: () => import("../views/Authors/AllAuthors.vue"),
    },
    {
      path: "/authors/:id",
      name: "author",
      component: () => import("../views/Authors/SingleAuthor.vue"),
      props: true,
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/Categories/AllCategories.vue"),
    },
    {
      path: "/categories/:id",
      name: "category",
      component: () => import("../views/Categories/SingleCategory.vue"),
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: { showHeader: false },
    },
  ],
});

export default router;
