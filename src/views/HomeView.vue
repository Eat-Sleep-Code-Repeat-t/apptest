<template>
  <div class="home">
    <HeaderSection />
    <BannerSection />
    <GamesCategory />
    <LoyaltySection />
    <FooterSection />
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
import HeaderSection from "@/components/HeaderSection.vue";
// import RegisterSection from "@/components/RegisterSection.vue";
import LoyaltySection from "@/components/LoyaltySection.vue";
import FooterSection from "@/components/FooterSection.vue";
import GamesCategory from "@/components/GamesCategory.vue";

export default {
  name: "HomeView",
  components: {
    HeaderSection,
    GamesCategory,
    BannerSection,
    FooterSection,
    LoyaltySection,
    // RegisterSection
  },
};
</script>
