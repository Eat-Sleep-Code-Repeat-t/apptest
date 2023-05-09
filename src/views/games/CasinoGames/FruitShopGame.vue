<template>
  <div class="game">
    <HeaderSection />
    <div class="container">
      <div class="row">
        <div class="col-xl col-lg col-md col-sm mx-auto">
          <div class="game__wrapper">
            <iframe
              src="https://demo.bgaming-network.com/games/FruitMillion/FUN?play_token=d4c777f1-5c94-49a9-ba7e-e9511b758b1c"
              width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>

    </div>
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "AviatorGame",
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>

<style scoped lang="scss">


.game__wrapper {
  padding-top: 30px;
  height: 100%;
}

.game__wrapper iframe {
  height: 600px;
}
</style>


