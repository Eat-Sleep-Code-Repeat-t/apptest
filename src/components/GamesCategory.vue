<template>
  <div class="GamesCategory d-none d-lg-block">
    <div class="container">
      <div class="row">
        <ul class="category__name col-xll-12">
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
</template>

<style scoped lang="scss">

.GamesCategory{
  position: relative;
  margin-top: -170px;
  z-index: 2;
}

.category__name {
  list-style-type: none; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  
}

.category__name__item {
  margin-right: 70px; 
  font-size: 12px;
  
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
  background-color: #7647DC; 
}



</style>


<script></script>
