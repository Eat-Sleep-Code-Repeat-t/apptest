<template>
  <div class="home">
    <HeaderSection />
    <fearGameArea/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import fearGameArea from "@/components/ContactsUs/contacts/fearGameArea.vue"
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';




export default {
  name: "ContactUs",
  components: {
    HeaderSection,
    FooterSection,
    fearGameArea
},
};
</script>