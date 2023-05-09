<template>
  <div class="game">
    <HeaderSection />
    <div class="container">
      <div class="row">
        <div class="col-xl col-lg col-md col-sm mx-auto">
          <div class="game__wrapper">
            <iframe
              src="https://eu-server-w2.ssgportal.com/FootballX/Loader.aspx?GameType=OtherGames&GameName=FootballX&StartPage=Board&token=bd32385d-7f07-4f4e-9d1b-b264314db1a8&Lang=ru&ReturnURL=&Skin="
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
  name: "FootballXGame",
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


