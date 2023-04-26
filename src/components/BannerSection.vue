<template>
  <div class="banner">
    <div class="container">
      <h1 class="banner__title text-start">CoinGames</h1>

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/banner/1.webp" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block ">
              <h5 class="animate__animated animate__slideInUp style__h5">Метка третьего слайда</h5>
              <p class="animate__animated animate__slideInUp style__p">Некоторый репрезентативный заполнитель для третьего
                слайда.</p>
              <button class="animate__animated animate__slideInUp style__buttom ">Cennect Wallet</button>
            </div>
          </div>

          <div class="carousel-item">
            <img src="../assets/img/banner/2.webp" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h4 class="animate__animated animate__slideInUp style__h5">Метка третьего слайда</h4>
              <h4 class="animate__animated animate__slideInUp style__p">Некоторый репрезентативный заполнитель для
                третьего
                слайда.</h4>
              
                <button class="animate__animated animate__slideInUp style__buttom ">Cennect Wallet1</button>
            
            </div>

          </div>
          <div class="carousel-item">
            <img src="../assets/img/banner/3.webp" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 class="animate__animated animate__slideInUp style__h5">Метка третьего слайда</h5>
              <p class="animate__animated animate__slideInUp style__p">Некоторый репрезентативный заполнитель для третьего
                слайда.</p>
              <button class="animate__animated animate__slideInUp style__buttom ">Cennect Wallet</button>
            </div>
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5 class="animate__animated animate__slideInUp style__h5">Метка третьего слайда</h5>
            <p class="animate__animated animate__slideInUp style__p">Некоторый репрезентативный заполнитель для третьего
              слайда.</p>
            <button class="animate__animated animate__slideInUp style__buttom ">Cennect Wallet</button>
          </div>
        </div>
        <div class="buttons">
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

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

  margin-bottom: 20px;


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

    width: 4%;
    height: 13%;

    top: 90%;
    transform: translateY(-50%);

    right: 3%;
  }

  .carousel-control-next-icon {
    width: 50%;
    height: 50%;
  }

  .carousel-control-prev {
    background-color: #d4145a;
    width: 4%;
    height: 13%;

    top: 90%;
    transform: translateY(-50%);

    left: 85%;
  }

  .carousel-control-prev-icon {
    width: 50%;
    height: 50%;
  }

  .carousel-caption {
    display: flex !important;
    flex-direction: column;
    justify-content: flex-start;

    // right: auto;
    left: 5%;
    padding-bottom: 0;

  }

  .banner__content__block {

  }

  .style__h5 {
    font-size: 2vw;
    font-weight: bold;
    text-align: left;

  }

  .style__p {
    font-size: 1.3vw;
    text-align: left;
  }

  .button__block {
    max-width: 100%;
    max-height: 100%;
  }

  .style__buttom {
    background-color: #d4145a;
    border: none;
    color: #fff;
    font-size: 0.9vw;
    font-style: normal;
    max-width: 15%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;;
    display: inline-block;
  }



}
</style>
