<template>
  <div class="banner">
    <div class="container">
      <h1 class="banner__title text-start">CoinGames</h1>

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
        <div class="carousel-inner">
          
          <div class="carousel-item active">
            <img src="@/assets/img/banner/1.webp" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block ">
              <h5 class="animate__animated animate__slideInUp style__h5">Метка третьего слайда</h5>
              <p class="animate__animated animate__slideInUp style__p">Некоторый репрезентативный заполнитель для третьего
                слайда.</p>
              <button class="animate__animated animate__slideInUp style__buttom ">Cennect Wallet</button>
            </div>
          </div>

          <div class="carousel-item">
            <img src="@/assets/img/banner/2.webp" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h4 class="animate__animated animate__slideInUp style__h5">Метка третьего слайда</h4>
              <h4 class="animate__animated animate__slideInUp style__p">Некоторый репрезентативный заполнитель для
                третьего
                слайда.</h4>

              <button class="animate__animated animate__slideInUp style__buttom ">Cennect Wallet1</button>
            </div>

          </div>
          <div class="carousel-item">
            <img src="@/assets/img/banner/3.webp" class="d-block w-100" alt="..." />
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

  @media (max-width: 767px) {
    .banner__title {
      font-size: 2.6rem;  
    }
  }

    @media (max-width: 450px) {
      .banner__title {
      font-size: 2.0rem;
    }
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

  .banner__content__block {}

  .style__h5 {
    font-size: 3.5rem;
    font-weight: bold;
    text-align: left;

  }

  .style__p {
    font-size: 2rem;
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
    font-size: 1.2rem;
    font-style: normal;
    max-width: 15%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    display: inline-block;
  }

  @media (max-width: 1200px) {

    .style__h5 {
      font-size: 2.3rem;
    }

    .style__p {
      font-size: 1.6rem;
    }

    .style__buttom {
      font-size: 1rem;
    }

  }

  @media (max-width: 767px) {
    .style__h5 {
      font-size: 1.8rem;
    }

    .style__p {
      font-size: 0.9rem;
    }

    .style__buttom {
      font-size: 0.7rem;
      max-width: 20%;
    }
  }

    @media (max-width: 450px) {
    .style__h5 {
      font-size: 1.5rem;
      
    }

    .style__p {
      font-size: 0.7rem;
    }

    .style__buttom {
      font-size: 0.8rem;
      max-width: 35%;
    }

    .buttons{
      display: none
    }
  
  }

}
</style>
