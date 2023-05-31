import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LiveCasino from "../views/LiveCasino.vue";
import CasinoPage from "../views/CasinoPage.vue";
import PromoPage from "../views/PromoPage.vue";
import TournomentPage from "../views/TournamentsPage.vue";
import ContactUs from "../views/ContactUs.vue";
import PoliticsConf from "../views/PoliticsConf.vue";
import ResponsGambling from "../views/ResponsibleGambling.vue";
import fairGame from "../views/fairGame.vue";
import ruleGame from "../views/ruleGame.vue"
import termsCondition from "../views/termsCondition.vue"


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
    path: "/contacts/contactus",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/contacts/politics",
    name: "PoliticsConf",
    component: PoliticsConf,
  },
  {
    path: "/contacts/respons",
    name: "ResponsGambling",
    component: ResponsGambling,
  },
  {
    path: "/contacts/fairgames",
    name: "fairGame",
    component: fairGame,
  },
  {
    path: "/contacts/rules",
    name: "ruleGame",
    component: ruleGame,
  },
  {
    path: "/contacts/terms",
    name: "termsCondition",
    component: termsCondition,
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
    name: "SpaceXYGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/SpaceXYGame.vue"),
  },
  {
    path: "/aviator",
    name: "AviatorGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/AviatorGame.vue"),
  },
  {
    path: "/balloon",
    name: "BaloonGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/BalloonGame.vue"),
  },
  {
    path: "/footballX",
    name: "FootballXGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/FootballXGame.vue"),
  },
  {
    path: "/jetx3",
    name: "Jetx3Game",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/JetX3Game.vue"),
  },
  {
    path: "/Plinko",
    name: "plinkoGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/PlinkoGame.vue"),
  },
  {
    path: "/casinofr",
    name: "casinofr",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/CasinoGames/CasinoFrGame.vue"),
  },
  {
    path: "/DivineFortuneMegaways",
    name: "DivineFortuneMegaways",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/CasinoGames/DivineFortuneMegaways.vue"),
  },
  {
    path: "/fruitshop",
    name: "FruitShopGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/games/CasinoGames/FruitShopGame.vue"),
  },


  // --------------- ADMIN -------------------------

    {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin/adminPanel.vue"),
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
