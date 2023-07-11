<template>
  <div class="banner">
    <div class="container-fluid">
      <!-- <h1 class="banner__title text-start">CoinGames</h1> -->

      <div
        id="carouselExampleIndicators"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/img/banner/1.png"
              class="d-block w-100 style-mobile"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4 class="animate__animated animate__flipInX style__p">
                Create your own casino
              </h4>
              <h3 class="animate__animated animate__flipInX style__h5">
                Create a casino with
              </h3>
              <h4 class="animate__animated animate__flipInX style__h5">
                <span class="style__h5-color">over 50%</span> conversion rate🔥
              </h4>
              <div class="buttonPosition">
                <button
                  class="animate__animated animate__flipInX style__buttom"
                >
                  Add a casino 🎰
                </button>

                <button
                  class="animate__animated animate__flipInX style__buttomTwo"
                >
                  More details 🃏
                </button>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="@/assets/img/banner/2.png"
              class="d-block w-100 style-mobile"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4 class="animate__animated animate__flipInX style__p">
                Create your own casino
              </h4>
              <h3 class="animate__animated animate__flipInX style__h5">
                Create a casino with
              </h3>
              <h4 class="animate__animated animate__flipInX style__h5">
                <span class="style__h5-color">over 50%</span> conversion rate🔥
              </h4>
              <div class="buttonPosition">
                <button
                  class="animate__animated animate__flipInX style__buttom"
                >
                  Add a casino 🎰
                </button>
                <button
                  class="animate__animated animate__slideInUp style__buttomTwo"
                >
                  More details 🃏
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="buttons">
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> -->
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
  margin-top: -84px;
  z-index: 1;

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
      font-size: 2rem;
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

    top: 166px;
    left: 90px;
  }

  @media (max-width: 1500px) {
    .carousel-caption {
      top: 128px;
    }
  }

  @media (max-width: 1360px) {
    .carousel-caption {
      top: 110px;
    }
  }

  @media (max-width: 768px) {
    .carousel-caption {
      left: 27px;
    }
  }

  .banner__content__block {
  }

  .style__h5 {
    font-size: 3.5rem;
    font-weight: 700;
    text-align: left;
  }

  @media (max-width: 768px) {
    .style__h5-width {
      width: 190px;
    }
  }

  .style__h5-color {
    color: #7647dc;
  }

  .style__p {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    padding-bottom: 10px;
  }

  @media (max-width: 790px) {
    .style__p {
      display: none;
    }
  }

  .cl .button__block {
    max-width: 100%;
    max-height: 100%;
  }

  .buttonPosition {
    align-self: flex-start;
    padding-top: 20px;
  }

  @media (max-width: 800px) {
    .buttonPosition {
      display: none;
    }
  }

  .style__buttom {
    background: #7647dc;
    border-radius: 20px;
    padding: 15.5px 23.5px;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;
  }

  .style__buttom:hover {
    background-color: #7445d7 !important;
    // border: none solid #7445d7 !important;

    -webkit-box-shadow: 0px 3px 20px 0px #7445d7;
    -moz-box-shadow: 0px 3px 20px 0px #7445d7;
    box-shadow: 0px 3px 20px 0px #7445d7;
  }

  .style__buttomTwo {
    background-color: transparent;
    border: none;

    border: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    font-style: normal;

    padding-left: 37px;
  }

  @media (max-width: 1200px) {
    .style__h5 {
      font-size: 28px;
    }
  }

  @media (max-width: 767px) {
    .banner__title {
      font-size: 2.6rem;
    }
  }
}

@media (max-width: 767px) {
  .style-mobile {
    width: 920px !important;
    height: 366px;
  }
}

.carousel-indicators {
  z-index: 0;
}

@media (max-width: 767px) {
  .carousel-indicators {
    z-index: 2;
    justify-content: start;
    left: -82px;
    bottom: 105px;
   
  }
}

@media (max-width: 626px) {
  .carousel-indicators {
    left: -64px;
   
  }
}

@media (max-width: 500px) {
  .carousel-indicators {
    left: -45px;
   
  }
}

@media (max-width: 420px) {
  .carousel-indicators {
    left: -36px;
   
  }
}

@media (max-width: 377px) {
  .carousel-indicators {
    left: -28px;
   
  }
}

@media (max-width: 361px) {
  .carousel-indicators {
    
    bottom: 66px;
  }
}


.container-fluid {
  padding: 0;
}
</style>
