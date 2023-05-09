<template>
  <div class="game">
    <HeaderSection />
    <div class="container">
      <div class="row">
        <div class="col-xl col-lg col-md col-sm mx-auto">
          <div class="game__wrapper">
            <iframe
              src="https://demo.bgaming-network.com/games/WildCashX9990/FUN?play_token=78a17066-9718-4ca9-ac7c-f034aeed34c9"
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
  name: "JetX3Game",
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


