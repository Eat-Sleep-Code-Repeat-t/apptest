<template>
  <div class="home">
    <HeaderSectionNEWadmin /> 
    <SideBarNew/>
    <BannerSection />
    <GamesCategory />
    <TopGameArea />
    <BestWinnerArea />
    
    <LoyaltySection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSectionNEWadmin from "@/components/HeaderSectionNEWadmin.vue";
import SideBarNew from "@/components/SideBarNew.vue";
import GamesCategory from "@/components/GamesCategory.vue";
import BannerSection from "@/components/BannerSection.vue";
import TopGameArea from "@/components/TopGameArea.vue";
import BestWinnerArea from "@/components/BestWinnerArea.vue";



// import RegisterSection from "@/components/RegisterSection.vue"; //old
import LoyaltySection from "@/components/LoyaltySection.vue";
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';
import "@fontsource/inter";




export default {
  name: "HomeView",
  components: {
    HeaderSectionNEWadmin,
    SideBarNew,
    BannerSection,
    GamesCategory,
    TopGameArea,
    BestWinnerArea,
    FooterSection,
    LoyaltySection,
    
},
};
</script>
