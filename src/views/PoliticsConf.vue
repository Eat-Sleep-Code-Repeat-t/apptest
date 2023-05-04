<template>
  <div class="home">
    <HeaderSection />
    <politicConfArea/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import politicConfArea from "@/components/ContactsUs/contacts/politicConfArea.vue"
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';




export default {
  name: "ContactUs",
  components: {
    HeaderSection,
    FooterSection,
    politicConfArea
},
};
</script>