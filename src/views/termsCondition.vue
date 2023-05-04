<template>
  <div class="home">
    <HeaderSection />
    <TermsConditionsArea/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import TermsConditionsArea from "@/components/ContactsUs/contacts/TermsConditionsArea.vue"
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';




export default {
  name: "ContactUs",
  components: {
    HeaderSection,
    FooterSection,
    TermsConditionsArea
},
};
</script>