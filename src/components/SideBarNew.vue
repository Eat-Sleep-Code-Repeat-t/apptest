<template>
  <div class="container-fluid">
    <div class="row">
      <div class="left">
        <div class="logoPanda">
          <img class="logoPanda__design" src="@/assets/img/logo.png" alt="" />
        </div>

        <div class="colNavigOne">
          <div class="colNavigOne__one">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/liveCasino.png"
              alt="CasinoLive"
            /> 
            <span class="textStyle">Лайв Казино</span>
          </div>
          <div class="colNavigOne__one">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/casino.png"
              alt="CasinoLive"
            /> 
            <span class="textStyle">Казино</span>
          </div>
          <div class="colNavigOne__one">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/promo.png"
              alt="Casino"
            /> 
            <span class="textStyle">Акции</span>
          </div>
          <div class="colNavigOne__one">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/tournamnent.png"
              alt="Promo"
            /> 
            <span class="textStyle">Лайв Казино</span>
          </div>
        </div>

        <div class="colNavigTwo">
          <div class="colNavigTwo__two">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/polozenie.png"
              alt="Promo"
            /> 
            <span class="textStyle">Условия и положениями</span>
          </div>
          <div class="colNavigTwo__two">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/politycs.png"
              alt="Promo"
            /> 
            <span class="textStyle">Политика конфиденциальности</span>
          </div>
          <div class="colNavigTwo__two">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/respons.png"
              alt="Promo"
            /> 
            <span class="textStyle">Responsible Gambling</span>
          </div>
          <div class="colNavigTwo__two">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/fearGame.png"
              alt="Promo"
            /> 
            <span class="textStyle">Честная игра</span>
          </div>
          <div class="colNavigTwo__two">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/ruleGame.png"
              alt="Promo"
            /> 
            <span class="textStyle">Правила игр</span>
          </div>
        </div>

        <div class="colNavigThree">
          <div class="colNavigThree__three">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/favoriteGame.png"
              alt="Promo"
            /> 
            <span class="textStyle">FAVORITE CASINO</span>
          </div>
          <div class="colNavigThree__three">
            <img class="imgLogo"
              src="@/assets/img/sideBarNew/TOPup.png"
              alt="Promo"
            /> 
            <span class="textStyle">Top-Up</span>
          </div>
          <div class="colNavigThree__three">
            <img class="imgLogo"
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
  position: fixed;
  z-index: 9999;
  overflow: hidden;
}
.left ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
}
.left li {
  width: auto;
  height: 60px;
  line-height: 50px;
  padding-left: 18px;
}
.left li:hover {
  background: black;
}

.left:hover {
  width: 250px;
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
  padding-top: 16px ;
  padding-left: 4px;
}

.colNavigOne{
  padding-top: 55px ;
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

.colNavigTwo .textStyle{
  color:#7E7E7E
}

.colNavigTwo {
  padding-top: 60px ;
  padding-left: 15px;
}

.colNavigTwo__two:not(:last-child) {
  padding-bottom: 30px;
}

.colNavigThree {
  padding-top: 69px ;
  padding-left: 16px;
}

.colNavigThree__three:not(:last-child) {
  padding-bottom: 37px;
}

.exitStyle {
  color:#7E7E7E
}


</style>
