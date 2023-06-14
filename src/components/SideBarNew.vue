<template>
  <div class="container-fluid">
    <div class="row">
      <div class="left">

<div class="logoPanda">
  <img class="logoPanda__design" src="" alt="">
</div>

<div class="colNavigOne">
  <div class="colNavigOne__casinoLive"></div>
  <div class="casino__casinoLive"></div>
  <div class="promo__casinoLive"></div>
  <div class="tournaments__casinoLive"></div>
</div>


<div class="colNavigTwo">

</div>


<div class="colNavigThree">
  
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
</style>
