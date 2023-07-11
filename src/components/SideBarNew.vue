<template>
  <div class="container-fluid">
    <div class="row">
     
      <div class="left">
        <div class="logoPanda">
          <img class="logoPanda__design" src="@/assets/img/logo.png" alt="" />
        </div>

        <div class="colNavigOne">
          <div class="colNavigOne__one">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/liveCasino.png"
              alt="CasinoLive"
            />
            <span class="textStyle">Лайв Казино</span>
          </div>
          <div class="colNavigOne__one">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/casino.png"
              alt="CasinoLive"
            />
            <span class="textStyle">Казино</span>
          </div>
          <div class="colNavigOne__one">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/promo.png"
              alt="Casino"
            />
            <span class="textStyle">Акции</span>
          </div>
          <div class="colNavigOne__one">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/tournamnent.png"
              alt="Promo"
            />
            <span class="textStyle">Лайв Казино</span>
          </div>
        </div>

        <div class="colNavigTwo">
          <div class="colNavigTwo__two">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/polozenie.png"
              alt="Promo"
            />
            <span class="textStyle">Условия и положениями</span>
          </div>
          <div class="colNavigTwo__two">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/politycs.png"
              alt="Promo"
            />
            <span class="textStyle">Политика конфиденциальности</span>
          </div>
          <div class="colNavigTwo__two">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/respons.png"
              alt="Promo"
            />
            <span class="textStyle">Responsible Gambling</span>
          </div>
          <div class="colNavigTwo__two">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/fearGame.png"
              alt="Promo"
            />
            <span class="textStyle">Честная игра</span>
          </div>
          <div class="colNavigTwo__two">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/ruleGame.png"
              alt="Promo"
            />
            <span class="textStyle">Правила игр</span>
          </div>
        </div>

        <div class="colNavigThree">
          <div class="colNavigThree__three">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/favoriteGame.png"
              alt="Promo"
            />
            <span class="textStyle">FAVORITE CASINO</span>
          </div>
          <div class="colNavigThree__three">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/TOPup.png"
              alt="Promo"
            />
            <span class="textStyle">Top-Up</span>
          </div>
          <div class="colNavigThree__three">
            <img
              class="imgLogo"
              src="@/assets/img/sideBarNew/log-off.png"
              alt="Promo"
            />
            <span class="textStyle exitStyle">Выход</span>
          </div>
        </div>

        <!-- <ul>
          <a href="#">
            <li class="item-menu">
              <span class="glyphicon glyphicon-home"></span>
              <span class="menu">Trang Chủ</span>
            </li>
          </a>
          <a href="#">
            <li class="item-menu">
              <span class="glyphicon glyphicon-book"></span>
              <span class="menu">Manga</span>
            </li>
          </a>
          <a href="#">
            <li class="item-menu">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="menu">Light Novel</span>
            </li>
          </a>
          <a href="#">
            <li class="item-menu">
              <span class="glyphicon glyphicon-list"></span>
              <span class="menu">Danh Sách</span>
            </li>
          </a>
          <a href="#">
            <li class="item-menu">
              <span class="glyphicon glyphicon-envelope"></span>
              <span class="menu"> Liên Hệ</span>
            </li>
          </a>
          <a href="#">
            <li class="item-menu">
              <span class="glyphicon glyphicon-credit-card"></span>
              <span class="menu">Ủng Hộ</span>
            </li>
          </a>
          <li class="item-menu">
            <span class="glyphicon glyphicon-search"></span>
            <input class="t_search" type="text" placeholder="Tìm Kiếm" />
          </li>
        </ul> -->
      </div>
      <!-- end left -->
      <div class="right">
        <!-- content -->
      </div>

    </div>
  
    <div class="leftMobile ">
        <div class="leftMobile__logoPanda">
          <button
            class="leftMobile__logoPanda__button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"
          >
            <img
              class="leftMobile__logoPanda__button__design"
              src="../assets/img/sideBarNew/menuGam.svg"
              alt=""
            />
          </button>
        </div>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasLeft"
          aria-labelledby="offcanvasLeftLabel"
        >
          <div class="offcanvas-body">
            <button
              type="button"
              class="text-reset btn-closeStyle"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <img
                class="logoPanda__design"
                src="../assets/img/sideBarNew/closeButtonGam.png"
                alt=""
              />
            </button>

            
            <div class="searchMob">
              <div class="searchMob__ico">
                <img src="../assets/img/sideBarNew/search.svg" alt="" />
              </div>
              <div class="searchMob__input">
                <input class="searchMob__input__style" placeholder="Search game" type="text" name="" id="" />
              </div>
            </div>

            <div class="colNavigTwo">
              <div class="colNavigTwo__two">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/polozenie.png"
                  alt="Promo"
                />
                <span class="textStyle">Условия и положениями</span>
              </div>
              <div class="colNavigTwo__two">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/politycs.png"
                  alt="Promo"
                />
                <span class="textStyle">Политика конфиденциальности</span>
              </div>
              <div class="colNavigTwo__two">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/respons.png"
                  alt="Promo"
                />
                <span class="textStyle">Responsible Gambling</span>
              </div>
              <div class="colNavigTwo__two">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/fearGame.png"
                  alt="Promo"
                />
                <span class="textStyle">Честная игра</span>
              </div>
              <div class="colNavigTwo__two">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/ruleGame.png"
                  alt="Promo"
                />
                <span class="textStyle">Правила игр</span>
              </div>
            </div>

            <div class="colNavigThree">
              <div class="colNavigThree__three">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/favoriteGame.png"
                  alt="Promo"
                />
                <span class="textStyle">FAVORITE CASINO</span>
              </div>
              <div class="colNavigThree__three">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/TOPup.png"
                  alt="Promo"
                />
                <span class="textStyle">Top-Up</span>
              </div>
              <div class="colNavigThree__three">
                <img
                  class="imgLogo"
                  src="@/assets/img/sideBarNew/log-off.png"
                  alt="Promo"
                />
                <span class="textStyle exitStyle">Выход</span>
              </div>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left {
  text-align: left;
  position: fixed;
  left: 0;
  top: 0;
  width: 74px;
  height: 100%;
  background: #131420;
  white-space: nowrap;
  transition: width 0.5s;
  z-index: 9999;
  overflow: hidden;
}

@media (max-width: 1025px) {
  .left {
    display: none;
    // width: 310px;
    // transform: translateX(-100%);
  }

  //MOBILE
  .leftMobile {
    text-align: left;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.5s;
    z-index: 4;
    overflow: hidden;

    &__logoPanda {
      padding: 16px 16px;
      &__button {
        background-color: transparent;
        border: none;
        z-index: 3;

        &__design {
        }
      }
    }

    .offcanvas {
      background-color: #131420;
      max-width: 73%;
    }

    .btn-closeStyle {
      background-color: transparent;
      border: none;
    }
  }
}

// .left ul {
//   padding: 0;
//   list-style-type: none;
//   text-align: left;
// }
// .left li {
//   width: auto;
//   height: 60px;
//   line-height: 50px;
//   padding-left: 18px;
// }
// .left li:hover {
//   background: black;
// }

.left:hover {
  width: 310px;
}

.left .item-menu {
  height: 50px;
  overflow: hidden;
  color: #fff;
}
.left a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
span.menu {
  padding-left: 17px;
}
.t_search {
  color: black;
  height: 35px;
  margin-left: 15px;
  width: 190px;
}

.logoPanda {
  padding-top: 16px;
  padding-left: 4px;
}

.colNavigOne {
  padding-top: 55px;
  padding-left: 16px;
}

.colNavigOne__one:not(:last-child) {
  padding-bottom: 30px;
}

.imgLogo {
  width: 26px;
}

.textStyle {
  padding-left: 25.5px;
  font-weight: 500;
  font-size: 15px;
}

@media (max-width: 767px) {
  .imgLogo {
    width: 20px;
  }

  .textStyle {
    padding-left: 17px;
    font-size: 14px;
    font-weight: 500;
  }
}

.colNavigTwo .textStyle {
  color: #7e7e7e;
}

.colNavigTwo {
  padding-top: 60px;
  padding-left: 15px;
}

.colNavigTwo__two:not(:last-child) {
  padding-bottom: 30px;
}

.colNavigThree {
  padding-top: 69px;
  padding-left: 16px;
}

@media (max-width: 767px) {
  .colNavigThree {
    padding-top: 38px;
  }
  .colNavigTwo {
    padding-top: 38px;
}

}

.colNavigThree__three:not(:last-child) {
  padding-bottom: 37px;
}

.exitStyle {
  color: #7e7e7e;
}

.searchMob {
  margin-top: 41px;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #1B1C2C;
  &__ico {
  }

  &__input {
    padding-left: 15px;
    align-items: center;

    &__style {
      font-size: 15px;
      font-weight: 500;
      color: #7E7E7E;

      background: transparent;
      border: transparent;
      outline: none;

      padding-bottom: 3px;

    }
  }
}
</style>
