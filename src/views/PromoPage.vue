<template>
  <div class="home">
    <HeaderSection />
    <PromoArea/>
    <FooterSection />
  </div>
</template>


<script>

import HeaderSection from "@/components/HeaderSection.vue";
// import RegisterSection from "@/components/RegisterSection.vue"; //old
import FooterSection from "@/components/FooterSection.vue";
import PromoArea from "@/components/PromoPage/PromoArea.vue"
import 'animate.css';



export default {
  name: "PromoPage",
  components: {
    HeaderSection,
    FooterSection,
    PromoArea,
    
    
  },
};
</script>