<template>
  <div class="game">
    <HeaderSection />
    <div class="container">
      <div class="row">
        <div class="col-xl col-lg col-md col-sm mx-auto">
          <div class="game__wrapper">
            <iframe
              src="https://demo.bgaming-network.com/games/SpaceXY/FUN?play_token=fc08a26d-3733-4fc8-b2c5-98275661e8f5"
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
  name: "SpaceXYGame",
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
  height: 500px;
}
</style>


