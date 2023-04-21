<template>
  <div class="home">
    <HeaderSection />
    <BannerSection />
    <MenuCategoryCasino />
    <CasinoAreaGames/>
    <FooterSection />
  </div>
</template>


<script>
import BannerSection from "@/components/BannerSection.vue";
import MenuCategoryCasino from "@/components/CasinoPage/MenuCategoryCasino.vue";
import CasinoAreaGames from "@/components/CasinoPage/CasinoAreaGames.vue"
import HeaderSection from "@/components/HeaderSection.vue";

import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';



export default {
  name: "CasinoPage",
  components: {
    HeaderSection,
    BannerSection,
    MenuCategoryCasino,
    CasinoAreaGames,
    FooterSection,
    
    
  },
};
</script>