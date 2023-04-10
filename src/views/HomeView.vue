<template>
  <div class="home">
    <HeaderSection />
    <BannerSection />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <RegisterSection />
    <LoyaltySection />
    <FooterSection />
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import RegisterSection from "@/components/RegisterSection.vue";
import LoyaltySection from "@/components/LoyaltySection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HomeView",
  components: {
    HeaderSection,
    BannerSection,
    FooterSection,
    LoyaltySection,
    RegisterSection
  },
};
</script>
