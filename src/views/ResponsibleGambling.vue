<template>
  <div class="home">
    <HeaderSection />
    <ResponsibleGamblingArea/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import ResponsibleGamblingArea from "@/components/ContactsUs/contacts/ResponsibleGamblingArea.vue"
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';




export default {
  name: "ContactUs",
  components: {
    HeaderSection,
    FooterSection,
    ResponsibleGamblingArea
},
};
</script>