<template>
  <div class="banner">
    <div class="container">
      <h1 class="banner__title text-start">CoinGames</h1>
      
      <!-- <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/banner/1.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner/2.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner/3.webp"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <div class="buttons">
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
};
</script>

<style scoped lang="scss">
.banner {
  &__title {
    color: #fff;
    margin: 1.9rem 0;
    font-weight: 700;
    font-size: 3.6rem;
    font-style: normal;
    line-height: 1.2;
  }
  .carousel-control-next {
    background-color: #d4145a;
    top: auto;
    width: 40px;
    height: 40px;
  }
  .carousel-control-prev {
    background-color: #d4145a;
    top: auto;
    width: 40px;
    height: 40px;
  }
}
</style>
