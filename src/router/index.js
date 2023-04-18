import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LiveCasino from "../views/LiveCasino.vue";
import CasinoPage from "../views/CasinoPage.vue";
import PromoPage from "../views/PromoPage.vue";
import TournomentPage from "../views/TournamentsPage.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/livecasino",
    name: "LiveCasino",
    component: LiveCasino,
  },

  {
    path: "/casino",
    name: "Casino",
    component: CasinoPage,
  },
  {
    path: "/promo",
    name: "PromoPage",
    component: PromoPage,
  },

  {
    path: "/tournaments",
    name: "TornomentPage",
    component: TournomentPage,
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
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
  {
    path: "/SpaceXY",
    name: "SpaceXY",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/SpaceXY.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
