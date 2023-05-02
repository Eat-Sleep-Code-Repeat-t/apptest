<template>
  <div class="Title">
    <div class="container">
      <div class="row">
        <div class="col-xl">
          <h2 class="banner__title text-white">Турниры</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="promo">
    <div class="container text-white">

      <div class="row">
        <div class="col-8 mx-auto ">
          <div class="background__cart">
            <div class="row">

              <div class="col-md-7 space ">

                <div class="evant">
                  <span class="evant__option">Скоро</span>
                </div>

                <div class="textName">
                  <div>
                    <h2 class="textName__tornam">Пари Воин</h2>
                  </div>
                  <div>
                    <h2 class="textName__desc">Добро пожаловать на битву выходного дня в CoinGames! Играя в нашем конкурсе
                      Wagering Warrior, вы можете выиграть до 100 долларов...</h2>
                  </div>
                </div>

                <div class="button__cart">
                  <button class="button__cart__style" type="button" data-bs-toggle="modal"
                    data-bs-target="#regModal">Connect Wallet</button>
                </div>
              </div>

              <div class="col-md-5">
                <div class="backgroundWinner space_back">


                  <div class="winner">
                    <div class="winner__fond">Призовой фонд</div>
                    <div class="winner__tottal">
                      <div class="winner__tottal__ico"></div>
                      <div class="winner__tottal__numb">1 000</div>
                    </div>
                  </div>

                  <div class="blockTime space_1">

                    <div class="blockTime__clock">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="white">
                        <path
                          d="M9.29913 0C4.3287 0 0.299316 4.02951 0.299316 8.99976C0.299316 13.97 4.3287 18 9.29907 18C14.2694 18 18.2991 13.9702 18.2991 8.99976C18.2991 4.02933 14.2695 0 9.29913 0ZM9.92062 10.1003C9.92014 10.1239 9.9166 10.1476 9.9133 10.1713C9.91096 10.189 9.90988 10.2072 9.90586 10.2247C9.90184 10.2428 9.89494 10.2608 9.88906 10.279C9.88204 10.3009 9.8755 10.3228 9.86632 10.3435C9.86458 10.3471 9.86398 10.351 9.86242 10.3546C9.84886 10.3835 9.83314 10.4106 9.81592 10.4363C9.81484 10.4378 9.8134 10.4394 9.81232 10.441C9.7927 10.4698 9.77032 10.4959 9.7468 10.5205C9.74026 10.5272 9.7336 10.5332 9.7267 10.5396C9.706 10.5594 9.68422 10.5774 9.66106 10.5939C9.65392 10.5991 9.64708 10.6045 9.63958 10.6095C9.60988 10.6289 9.57874 10.646 9.54634 10.66C9.53932 10.6632 9.532 10.665 9.52486 10.6678C9.4975 10.6784 9.46978 10.6872 9.44115 10.6938C9.43089 10.6963 9.42076 10.6985 9.41031 10.7004C9.37359 10.7071 9.33639 10.7117 9.29871 10.7117C9.29109 10.7117 9.28329 10.7094 9.27567 10.7091C9.23955 10.7077 9.20379 10.7049 9.16941 10.6975C9.15867 10.6952 9.14811 10.6905 9.13737 10.6876C9.10533 10.6789 9.07401 10.6692 9.04413 10.6558C9.04071 10.6541 9.03711 10.6538 9.03369 10.6522L5.58277 9.02448C5.27185 8.8779 5.13865 8.50692 5.28523 8.19599C5.43181 7.88525 5.80279 7.75187 6.11371 7.89845L8.67669 9.1071V3.73497C8.67669 3.39122 8.95539 3.11252 9.29913 3.11252C9.64288 3.11252 9.92158 3.39122 9.92158 3.73497V10.0891H9.9217C9.9217 10.0928 9.92062 10.0965 9.92062 10.1003Z">
                        </path>
                      </svg>
                    </div>
                    <div class="blockTime__time">
                      <div class="blockTime__time__countdown">00д : 13ч : 00м : 29c</div>
                      <div class="blockTime__time__soon">Скоро</div>
                    </div>

                  </div>

                  <div class="winnerWindow space_1">

                    <div class="winnerWindow__row ">
                      <div class="row">
                        <div class="col">
                          <div class="winnerWindow__row__place">Место</div>
                        </div>
                        <div class="col">
                          <div class="winnerWindow__row__prize">
                            <div class="winnerWindow__row__prize__title">Приз</div>
                            <div class="winnerWindow__row__prize__ico"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="winnerWindow__list">
                      <div class="row">
                        <div class="col">
                          <div class="winnerWindow__list__numb">
                            <div class="winnerWindow__list__numb__count">1</div>
                            <div class="winnerWindow__list__numb__ico"></div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="winnerWindow__list__sum">200</div>
                        </div>
                      </div>
                    </div>

                    <div class="winnerWindow__list">
                      <div class="row">
                        <div class="col">
                          <div class="winnerWindow__list__numb">
                            <div class="winnerWindow__list__numb__count">2</div>
                            <div class="winnerWindow__list__numb__ico"></div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="winnerWindow__list__sum">200</div>
                        </div>
                      </div>
                    </div>

                    <div class="winnerWindow__list">
                      <div class="row">
                        <div class="col">
                          <div class="winnerWindow__list__numb">
                            <div class="winnerWindow__list__numb__count">3</div>
                            <div class="winnerWindow__list__numb__ico"></div>
                          </div>
                        </div>
                        <div class="col">
                          <div class="winnerWindow__list__sum">200</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.banner__title {
  margin-top: 40px;
  font-weight: 700;
  font-size: calc(3.2rem + 0.4vw);

}

.promo {
  margin: 40px 0 20px 0;

}

.background__cart {
  background-color: #17313a;
  border-radius: 8px;
  width: 100%;

  position: relative;
}

.space {
  padding: 30px 30px 10px 30px;
}


.evant {
  text-align: left;

  &__option {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.45;
    display: inline-block;
    padding: 4px 15px;
    border-radius: 100px;
    background: #d4145a;
  }
}

.textName {
  padding-top: 5%;
  text-align: left;

  &__tornam {
    margin-bottom: 4%;
    font-size: 2.3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__desc {
    font-size: 1.8rem;
  }
}


.button__cart {
  position: absolute;

  left: 30px;
  bottom: 30px;

  &__style {

    background-color: #d4145a;
    border: 2px solid #d4145a;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 144px;

  }

  &__style:hover {
    color: #fff;
    background-color: #d4145a !important;
    border: 2px solid #d4145a !important;

    -webkit-box-shadow: 0px 3px 20px 0px #d4145a;
    -moz-box-shadow: 0px 3px 20px 0px #d4145a;
    box-shadow: 0px 3px 20px 0px #d4145a;

  }

}

.background {
  color: #112a34;
}

.space_back {
  padding: 30px;
}

.backgroundWinner {
  background-image: url('@//assets/img/tournamnent/tournament3-avalable_toalpx.webp');
  background-size: cover;
  width: 100%;

  height: 100%;
  position: relative;
  border-radius: 0 10px 10px 0;
}

// .backgroundWinner::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   z-index: 0;
//   background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 20%);
// }

.winner {
  padding-top: 7%;


  &__fond {
    font-size: 2rem;
    font-weight: 600;
  }

  &__tottal {
    position: relative;

    &__ico {
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      top: calc(50% - 10px)
    }

    &__numb {
      font-size: 3rem;
      font-weight: 800;

    }

  }
}


.blockTime {
  background-color: #112a34;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;



  &__clock {
    padding-right: 2%;
  }

  &__time {
    &__countdown {
      font-size: 1.4rem;
      text-align: left;
    }

    &__soon {
      font-size: 1.4rem;
      text-align: left;
    }
  }
}



.winnerWindow {

  background-color: #112a34;
  border-radius: 10px;

  &__row {
    padding: 3%;
    border-bottom: 2px solid #1c4b5e;

    &__place {
      font-size: 1.4rem;
    }

    &__prize {

      &__title {
        font-size: 1.4rem;
      }

      &__ico {}
    }

  }

  &__list {

    padding: 3%;

    &__numb {

      &__count {
        font-size: 1.4rem;
      }

      &__ico {}
    }

    &__sum {
      font-size: 1.4rem;
    }

  }

}


.space_1 {
  margin-top: 4%;
}
</style>


