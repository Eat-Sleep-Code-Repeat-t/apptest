<template>
  <div class="home">
    <HeaderSection />
    <TournamentArea/>
    <FooterSection />
  </div>
</template>


<script>
import TournamentArea from "@/components/TournamentPage/TournamentArea.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';



export default {
  name: "TournamentsPage",
  components: {
    HeaderSection,
    
    TournamentArea,
    
    FooterSection,
    
    
  },
};
</script>