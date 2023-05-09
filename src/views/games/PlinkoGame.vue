<template>
  <div class="game">
    <HeaderSection />
    <div class="container">
      <div class="row">
        <div class="col-xl col-lg col-md col-sm mx-auto">
          <div class="game__wrapper">
            <iframe
              src="https://eu-server-w6.ssgportal.com/PlinkoX/Loader.aspx?GameType=OtherGames&GameName=PlinkoX&StartPage=Board&token=c4a1f565-6063-4470-a4d1-cb853ff859f6&Lang=ru&ReturnURL="
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
  name: "PlinkoGame",
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


