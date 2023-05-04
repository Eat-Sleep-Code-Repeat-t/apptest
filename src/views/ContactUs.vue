<template>
  <div class="home">
    <HeaderSection />
    <ContactsUsArea/>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import ContactsUsArea from "@/components/ContactsUs/contacts/contactsUsArea.vue"
import FooterSection from "@/components/FooterSection.vue";
import 'animate.css';




export default {
  name: "ContactUs",
  components: {
    HeaderSection,
    FooterSection,
    ContactsUsArea
},
};
</script>