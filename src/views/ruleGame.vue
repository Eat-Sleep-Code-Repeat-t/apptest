<template>
  <div class="home">
    <HeaderSection />
    <ruleGame/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import ruleGame from "@/components/ContactsUs/contacts/ruleGame.vue"
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';




export default {
  name: "ContactUs",
  components: {
    HeaderSection,
    FooterSection,
    ruleGame
},
};
</script>