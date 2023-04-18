<template>
  <div class="home">
    <HeaderSection />
    <BannerSection />
    <FooterSection />
  </div>
</template>


<script>
import BannerSection from "@/components/BannerSection.vue";
import HeaderSection from "@/components/HeaderSection.vue";
// import RegisterSection from "@/components/RegisterSection.vue"; //old
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';



export default {
  name: "PromoPage",
  components: {
    HeaderSection,
    BannerSection,
    
    FooterSection,
    
    
  },
};
</script>