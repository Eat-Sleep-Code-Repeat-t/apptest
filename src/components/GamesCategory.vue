
import path from 'path';

<template>
  <div class="GamesCategory">
    <div class="container">
      <div class="row ">

        <div class="col-xl-9">
          <div class="category__menu  text-white">
            <ul class="category__name">
              <li class="category__name__item">Лобби</li>
              <li class="category__name__item">Слоты</li>
              <li class="category__name__item">Новые</li>
              <li class="category__name__item">Рулетка</li>
              <li class="category__name__item">Блекджеки</li>
              <li class="category__name__item">Джекпоты</li>
              <li class="category__name__item">Виртуальные игры</li>
              <li class="category__name__item">Настольные</li>
              <li class="category__name__item">Drops & Win</li>
              <li class="category__name__item">Популярн</li>
            </ul>
          </div>
        </div>

        <div class="col-xl-1 d-flex justify-content-between">
          <div class="category__menu   text-white">
            <button class="arrow">&#60;
            </button>
            <button class="arrow"> &#62;
            </button>

          </div>
        </div>

        <div class="col-xl-2 d-flex justify-content-between">
          <div class="category__menu align-content-around">
            <button>Поиск игр</button>
            <button>Все провайдеры</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category__menu {
  padding: 30px 0;

}

.category {

  &__name {
    list-style: none;
    margin: 0;
    padding: 0;

    &__item {
      display: inline-block;
      margin-right: 30px;
      font-size: 1.4rem;
      font-weight: 400;
    }

  }
}

.arrow {
  color: var(--mc-baseMain);
  background: var(--mc-bg700);
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-out;
  pointer-events: initial;
}

.arrow__icon {
  color: white;
}
</style>