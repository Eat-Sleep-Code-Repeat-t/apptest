<template>
  <div class="home">
    <HeaderSectionNEW /> 
    <SideBarNew/>
    


    <BannerSection />
    <GamesCategory />
    <BestGameArea />
    <BestWinnerArea />
    <LoyaltySection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSectionNEW from "@/components/HeaderSectionNEW.vue";
import SideBarNew from "@/components/SideBarNew.vue";


import BannerSection from "@/components/BannerSection.vue";
// import RegisterSection from "@/components/RegisterSection.vue"; //old
import LoyaltySection from "@/components/LoyaltySection.vue";
import FooterSection from "@/components/FooterSection.vue";
import GamesCategory from "@/components/GamesCategory.vue";
import BestGameArea from "@/components/BestGameArea.vue";
import BestWinnerArea from "@/components/BestWinnerArea.vue";
import 'animate.css';
import "@fontsource/inter";




export default {
  name: "HomeView",
  components: {
    HeaderSectionNEW,
    SideBarNew,
    GamesCategory,
    BestGameArea,
    BannerSection,
    BestWinnerArea,
    FooterSection,
    LoyaltySection,
    
},
};
</script>
