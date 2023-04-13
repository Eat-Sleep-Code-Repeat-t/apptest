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
        <div class="col-2">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="../../src/assets/img/BestGameArea/background.webp">
            </div>
          </div>
        </div>

        <div class="col-2">
          <div class="cartGame">
            <div class="cartGame__block">
              <img class="cartGame__block__img" src="../../src/assets/img/BestGameArea/background.webp">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner__title {

  padding-top: 40px;
  padding-bottom: 20px;
}

.cartGame {
  width: 100%;
  max-width: 275px;
  padding-right: 10px;

  &__block {

    position: relative;

    &__img {
      max-width: 100%;
      height: auto;
      cursor: pointer;
      &:hover{
        filter: grayscale(1);
        transition: .3s;
      }
    }

  }
}

.cartGame__block
 {
  content: ""; 
  position: absolute;
  width: 100%; 
  background-color: rgba(235, 36, 36, 0.8);
 
}

// .cartGame__block:hover::after {
//   content: "Кнопка"; 
//   width: 100%;
//   background-color: orange; 
// }



</style>