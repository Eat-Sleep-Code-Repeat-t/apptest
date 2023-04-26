
import path from 'path';

<template>
  <div class="GamesCategory">
    <div class="container">

      <div class="row border__category  ">
        <div class="col-xl-9">
          <!-- navbar-menu  -->
          <div class="row">
            <div class="col-xl-12">
              <div class="text-white position-relative overflow d-flex justify-content-between left-posion">
                <ul class="category__name">
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Лобби</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Все игры</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Слоты</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Новые</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Блекджеки</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Джекпоты</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Виртуальыные игры</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Настольные</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Drops & Win</a>
                  </li>
                  <li class="category__name__item">
                    <a class="nav-link" href="#">Популярные</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>

        <div class="col-xl-3">
          <div class="category__menu d-flex d-flex justify-content-between">
            <div>
              <button class="bth">Поиск игр
                
                <div class="ico__serch">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 8.56639C0 3.83531 3.83531 0 8.56639 0C13.2975 0 17.1328 3.83531 17.1328 8.56639C17.1328 10.3124 16.6104 11.9363 15.7135 13.2906L18.3443 15.9213C19.0133 16.5904 19.0133 17.6752 18.3443 18.3443C17.6752 19.0133 16.5904 19.0133 15.9213 18.3443L13.2906 15.7135C11.9363 16.6104 10.3124 17.1328 8.56639 17.1328C3.83531 17.1328 0 13.2975 0 8.56639ZM12.3033 12.0954C12.2661 12.1268 12.2299 12.1599 12.1949 12.1949C12.1599 12.2299 12.1268 12.2661 12.0954 12.3033C11.1748 13.173 9.93286 13.7062 8.56639 13.7062C5.72774 13.7062 3.42656 11.405 3.42656 8.56639C3.42656 5.72774 5.72774 3.42656 8.56639 3.42656C11.405 3.42656 13.7062 5.72774 13.7062 8.56639C13.7062 9.93286 13.173 11.1748 12.3033 12.0954Z">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <button class="bth">Все провайдеры
                <div class="ico__setting">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.33563 11.9498C8.55677 11.9498 9.59243 11.1276 9.91076 10.0031L17.5222 10.0031C17.9257 10.0031 18.25 9.67876 18.25 9.27523C18.25 8.8717 17.9257 8.54741 17.5222 8.54741L9.91064 8.54741C9.5926 7.42626 8.56047 6.60071 7.33563 6.60071C6.11078 6.60071 5.07865 7.42626 4.76061 8.54741L1.48137 8.54741C1.07784 8.54741 0.753543 8.8717 0.753543 9.27523C0.753543 9.67876 1.07784 10.0031 1.48137 10.0031L4.76061 10.0031C5.07865 11.1242 6.11078 11.9498 7.33563 11.9498ZM6.11675 9.27523C6.11675 8.60277 6.66316 8.05636 7.33563 8.05636C8.00809 8.05636 8.5545 8.60277 8.5545 9.27523C8.5545 9.9477 8.00809 10.4941 7.33563 10.4941C6.66316 10.4941 6.11675 9.9477 6.11675 9.27523Z"
                      stroke-width="0.5">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.3458 6.09905C12.5711 6.09905 13.5997 5.27314 13.9173 4.15235L17.5222 4.15235C17.9257 4.15235 18.25 3.82806 18.25 3.42453C18.25 3.021 17.9257 2.6967 17.5222 2.6967L13.9173 2.6967C13.5993 1.57555 12.5671 0.75 11.3423 0.75C10.1174 0.75 9.08531 1.57555 8.76727 2.6967L1.48137 2.6967C1.07784 2.6967 0.753541 3.021 0.753541 3.42453C0.753541 3.82806 1.07784 4.15235 1.48137 4.15235L8.77081 4.15235C9.08885 5.2735 10.121 6.09905 11.3458 6.09905ZM10.1234 3.42453C10.1234 2.75206 10.6698 2.20565 11.3423 2.20565C12.0148 2.20565 12.5612 2.75206 12.5612 3.42453C12.5612 4.09699 12.0147 4.6434 11.3423 4.6434C10.6702 4.6434 10.1234 4.09384 10.1234 3.42453Z"
                      stroke="currentColor" stroke-width="0.5">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.3458 17.7651C12.5709 17.7651 13.6 16.9424 13.9175 15.8184L17.5222 15.8184C17.9257 15.8184 18.25 15.4941 18.25 15.0905C18.25 14.687 17.9257 14.3627 17.5222 14.3627L13.9173 14.3627C13.5993 13.2416 12.5671 12.416 11.3423 12.416C10.1174 12.416 9.08531 13.2416 8.76727 14.3627L1.47783 14.3627C1.0743 14.3627 0.750001 14.687 0.750001 15.0905C0.750001 15.4941 1.0743 15.8184 1.47783 15.8184L8.77081 15.8184C9.08885 16.9395 10.121 17.7651 11.3458 17.7651ZM10.1234 15.0905C10.1234 14.4181 10.6698 13.8717 11.3423 13.8717C12.0148 13.8717 12.5612 14.4181 12.5612 15.0905C12.5612 15.763 12.0147 16.3094 11.3423 16.3094C10.6698 16.3094 10.1234 15.763 10.1234 15.0905Z"
                      stroke="currentColor" stroke-width="0.5">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">


.left-posion {
  // padding-left: 2%;
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
  // padding-right: 4%;
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
  display: flex;
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

.ico__serch{
  padding-left: 7px;
}

.ico__setting{
  padding-left: 7px;
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

