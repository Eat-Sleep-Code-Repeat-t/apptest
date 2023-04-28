<template>
  <div class="Title">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="banner__title text-start text-white">Лучшие игры</h2>
        </div>
      </div>
    </div>
  </div>

  <div class="BestGameArea">
    <div class="container">
      <div class="row">
        <div class="col-xl-2 col-md-3 col-sm-4 col-6">
          <div class="cartGame mx-auto">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/BestGameArea/background.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              <button class="cartGame__button__two">Демо</button>
            </div>
          </div>
        </div>

        <div class="col-xl-2 col-md-3 col-sm-4 col-6">
          <div class="cartGame mx-auto">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/BestGameArea/background.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              <button class="cartGame__button__two">Демо</button>
            </div>
          </div>
        </div>

        <div class="col-xl-2 col-md-3 col-sm-4 col-6">
          <div class="cartGame mx-auto">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="@/assets/img/BestGameArea/background.webp">
            </div>
            <div class="cartGame__button_position font">
              <button class="cartGame__button ">Играть</button>
              <button class="cartGame__button__two">Демо</button>
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

  padding-top: 4%;
}

.cartGame {

  width: 100%;
  max-width: 275px;
  padding-right: 10px;
  padding-bottom: 20px;

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
  margin: 60px 0px;
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