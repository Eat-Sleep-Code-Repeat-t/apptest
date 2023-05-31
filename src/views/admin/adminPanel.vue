<template>
  <div class="home">
    <AdminHeaderSection/>
    <AdminTableSection/>

    
  </div>
</template>


<script>

import AdminHeaderSection from "@/components/admin/AdminHeaderSection.vue"
import AdminTableSection from "@/components/admin/AdminTableSection.vue";
import 'animate.css';



export default {
  name: "CasinoPage",
  components: {
    AdminHeaderSection,
    AdminTableSection
},
};
</script>