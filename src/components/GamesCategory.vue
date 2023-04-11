
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
            <button class="arrow">
              <span class="arrow__icon">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.77466e-08 1.32109C7.26125e-08 1.66118 0.121736 2.00769 0.377386 2.26437L4.28762 6.26723C4.68013
                  6.66904 5.3265 6.66883 5.71875 6.26676L9.62337 2.26437C10.1225 1.75102 10.1286 0.9104 9.62337
                  0.390634C9.13033 -0.122716 8.3147 -0.129133 7.81557 0.390634L4.99733 3.2718L2.18518 0.384211C1.67997
                  -0.129138 0.870419 -0.129132 0.371293 0.390634C0.127816 0.647309 4.31611e-08 0.987411 5.77466e-08
                  1.32109Z"/>
                </svg>
              </span>
            </button>
            <button class="arrow">
              <span class="arrow__icon">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.77466e-08 1.32109C7.26125e-08 1.66118 0.121736 2.00769 0.377386 2.26437L4.28762 6.26723C4.68013
                  6.66904 5.3265 6.66883 5.71875 6.26676L9.62337 2.26437C10.1225 1.75102 10.1286 0.9104 9.62337
                  0.390634C9.13033 -0.122716 8.3147 -0.129133 7.81557 0.390634L4.99733 3.2718L2.18518 0.384211C1.67997
                  -0.129138 0.870419 -0.129132 0.371293 0.390634C0.127816 0.647309 4.31611e-08 0.987411 5.77466e-08
                  1.32109Z"/>
                </svg>
              </span>
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