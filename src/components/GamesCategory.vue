
import path from 'path';

<template>
  <div class="GamesCategory">
    <div class="container">

      <div class="row border__category">
        <div class="col-xl-10">
          <!-- navbar-menu  -->
          <div class="row">
            <div class="col-xl-11">
              <div class="category__menu  text-white position overflow ">
                <ul class="category__name">
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Лобби</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Слоты</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Новые</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Рулетка</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Блекджеки</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Джекпоты</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Виртуальные игры</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Настольные</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Drops & Win</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Популярн</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Популярн12311231323</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Популярн123123</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xl-1">
              <div class="text-white arrow-posinion">
                <button @click="scrollLeftOrRight('left')" class="arrow" style="padding-right: 20px;">&#60;
                </button>
                <button @click="scrollLeftOrRight('right')" class="arrow"> &#62;
                </button>
              </div>
            </div>

          </div>

        </div>

        <div class="col-xl-2 ">
          <div class="category__menu d-flex justify-content-between">
            <div><button class="bth">Поиск игр</button></div>
            <div><button class="bth">Все провайдеры</button></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.border__category {
  background-color: #17313a;
  border-radius: 8px;
}

.category__menu {
  width: 100%;
  // height: 80px;

  padding: 30px 0;

}

.category {

  &__name {
    list-style: none;
    margin: 0;
    padding: 0;

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

.position {
  position: relative;
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
  padding: 30px 0;
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
      const newPosition = currentScrollPos - containerWidth;
      categoryMenu.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    },
    scrollRight() {
      const categoryMenu = document.querySelector('.category__name');
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

