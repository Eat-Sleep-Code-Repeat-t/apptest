
import path from 'path';

<template>
  <div class="GamesCategory">
    <div class="container">

      <div class="row border__category  ">
        <div class="col-xl-9">
          <!-- navbar-menu  -->
          <div class="row">
            <div class="col-xl-11">
              <div class="text-white position-relative overflow d-flex justify-content-between left-posion">
                <ul class="category__name">
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Лобби</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Все игры</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Новые</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Популярные</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Live Roulette</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Live Blackjack</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Live Baccarat</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Game Show</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>

        <div class="col-xl-3">
          <div class="category__menu d-flex d-flex justify-content-between">
            <div><button class="bth">Поиск игр</button></div>
            <div><button class="bth">Все провайдеры</button></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">


.left-posion {
  padding-left: 2%;
}

.border__category {
  background-color: #17313a;
  border-radius: 8px;
  padding: 20px 0;
  align-items: center;
  position: relative;
}

.category__name :before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #d4145a;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
  
  
}
.nav-link{
  position: relative;
  padding-bottom: 5px;
}

.category__name__item .nav-link:hover:before {
  transform: scaleX(1);
}


.category__menu {
  width: 100%;
  padding-right: 4%;
}

.category {

  &__name {
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    
    

    white-space: nowrap;
    overflow-x: scroll;
    overflow: hidden;

    &__item {
      display: inline-block;
      padding-right: 25px;
      font-size: 1.4rem;
      font-weight: 400;
      cursor: pointer;
      
    }

  }
}

.arrow {
  color: white;
  background: #17313a;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-out;
}

.bth {
  padding: 10px 20px;

  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  transition: all .3s linear;
  background-color: #0d2129;
  color: rgb(236, 227, 227);

  appearance: none;
  border: none;
  overflow: hidden;
  outline: none;
  cursor: pointer;
}


.overflow {
  overflow-x: auto;
  white-space: nowrap;
  overflow: hidden;
}

.category__menu {
  overflow: hidden;
}

.arrow-posinion {
  // padding: 30px 0;
}

.arrow {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.arrow:focus {
  outline: none;
}

.category__name__item:last-child {
  padding-right: 0;
}
</style>


<script>
export default {
  methods: {
    
    scrollLeftOrRight(direction) {
      if (direction === 'left') {
        this.scrollLeft();
      } else if (direction === 'right') {
        this.scrollRight();
      }
    },

    scrollLeft() {
      const categoryMenu = document.querySelector('.category__name');
      const containerWidth = categoryMenu.parentNode.offsetWidth;
      const currentScrollPos = categoryMenu.scrollLeft;
      const newPosition = currentScrollPos - containerWidth ;
      categoryMenu.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
    },
    scrollRight() {
      const categoryMenu = document.querySelector('.category__name') ;
      const containerWidth = categoryMenu.parentNode.offsetWidth;
      const currentScrollPos = categoryMenu.scrollLeft;
      const newPosition = currentScrollPos + containerWidth;
      categoryMenu.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    },


  }
};
</script>

