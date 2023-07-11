<template>
  <div class="GamesCategory">
    <div class="container">
      <div class="row">
        <div class="col-12 styleLeft">
          <ul class="category__name">
            <li class="category__name__item active">
              <a class="nav-link" href="#">Lobby</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Slots</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">New</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Roulette</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Blackjacks</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Jackpots</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Virtual games</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Desk</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Drops & Win</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">Popular</a>
            </li>
            <li class="category__name__item">
              <a class="nav-link" href="#">The best games</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.GamesCategory {
  position: relative;
  margin-top: -170px;
  z-index: 2;

}

.styleLeft {
  padding-left: 20px;
}

@media (max-width: 1326px) {
  .GamesCategory {
    margin-top: -120px;
  }
}

@media (max-width: 1150px) {
  .GamesCategory {
    margin-top: -80px;
  }
}

@media (max-width: 950px) {
  .GamesCategory {
    margin-top: -10px;
  }
}

@media (max-width: 850px) {
  .GamesCategory {
    margin-top: 10px;
  }
}

@media (max-width: 750px) {
  .GamesCategory {
    margin-top: -50px;
  }
}

.category__name {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: initial;
  
}

@media (max-width: 1500px) {
  .category__name {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: thin;
    padding-bottom: 23px;
    
  }
}


/* Стили для скролл-бара */
.category__name::-webkit-scrollbar {
  width: 154px; /* Ширина скролл-бара */
  height: 2px;
  
}

.category__name::-webkit-scrollbar-track {
  background-color: transparent; /* Цвет фона трека */
  margin-bottom: 10px;
}

.category__name::-webkit-scrollbar-thumb {
  background-color: #7647dc; /* Цвет ползунка */
  border-radius: 3px; /* Скругление углов ползунка */
  
}

.category__name::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Цвет ползунка при наведении */
}



@media (max-width: 1430px) {
  .category__name {
    justify-content: center;
  }
}

@media (max-width: 1000px) {
  .category__name {
    justify-content: flex-start;
  }
}

.category__name__item {
  font-size: 12px;
  padding: 10px 16px;
}

.category__name__item:hover {
  border-radius: 20px;
  font-weight: bold;

  background-color: #7647dc;
  box-sizing: border-box; /* Добавляем это свойство */
}

.category__name__item:last-child {
  margin-right: 0;
}

.category__name__item a {
  color: white;
  text-decoration: none;
}

.category__name__item.active {
  border-radius: 20px;
  font-weight: bold;
  padding: 10px 16px;
  background-color: #7647dc;
}
</style>

<script></script>
