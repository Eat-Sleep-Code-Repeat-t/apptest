<template>
  <div class="Title">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="banner__title text-start text-white">Live Roulette | Лайв Казино</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="BestGameArea">
    <div class="container">
      <div class="row">
        
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/roulette.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/roulette.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
            
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/blackjack_3_hands_double_exposure.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/blackjack_bonus.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="Title">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="banner__title text-start text-white">Live Blackjack | Лайв Казино</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="BestGameArea">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/limitless_blackjack.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/roulette.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Title">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="banner__title text-start text-white">Live Baccarat | Лайв Казино</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="BestGameArea">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/baccarat.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/roulette.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Title">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="banner__title text-start text-white">Game Show | Лайв Казино</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="BestGameArea">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/dead_or_alive_saloon.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-4 col-sm-6 col-6">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/LiveRouletteArea/roulette.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.BestGameArea {
  margin: 30px 0;
}

.banner__title {

  padding-top: 50px;
}

.cartGame {

  width: 100%;
  max-width: 400px;
  padding-bottom: 10px;
  

  position: relative;

  &__block {

    position: relative;

    &__img {
      max-width: 100%;
      height: auto;
      cursor: pointer;

      &:hover {
        filter: grayscale(1);
        transition: .3s;
        
      }

    }

  }
}



.cartGame:hover> .cartGame__block {
  filter: grayscale(1);
  transition: .3s;
}


.cartGame__button_position {
  align-items: center;
}


.cartGame__button {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #d4145a;
  box-shadow: 0 0 15px #ff3d84;
  border: 2px solid #d4145a;
  color: #fff;
  
  opacity: 0;
  transition: bottom .3s ease-in-out, opacity .3s ease-in-out;
}

.cartGame__button__two {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: none;
  border: 2px solid #d4145a;
  border: 2px solid #d4145a;

  opacity: 0;
  transition: bottom .3s ease-in-out, opacity .3s ease-in-out;
}

.cartGame:hover button {
  bottom: 20px;
  opacity: 1;
}

.font {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: bold;
}

</style>