<template>
  <div class="home">
    <HeaderSection />
    <BannerSection />
    <MenuCategoryofLiveCasino/>
    <LiveRouletteArea/>
    <FooterSection />
  </div>
</template>


<script>
import BannerSection from "@/components/BannerSection.vue";
import MenuCategoryofLiveCasino from "@/components/liveCasino/MenuCategoryofLiveCasino.vue";
import LiveRouletteArea from "@/components/liveCasino/LiveRouletteArea.vue"
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';



export default {
  name: "LiveCasino",
  components: {
    HeaderSection,
    MenuCategoryofLiveCasino,
    BannerSection,
    LiveRouletteArea,
    FooterSection,
    
    
  },
};
</script>