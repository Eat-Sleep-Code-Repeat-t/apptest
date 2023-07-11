<template>
  <div class="container-fluid d-block d-sm-none">
    <div class="row">
      <div :class="['left', { show: isMenuVisible }]">
        <div class="buttonMenu">
          <button @click="toggleStyle" class="buttonMenu__Show">
            <img
              :class="['buttonMenu__Show_img', { rotate: isMenuVisible }]"
              src="../assets/img/sideBarNew/arrow.svg"
              alt=""
            />
          </button>

          <div class="backgroundStyle">
            <div class="colNavigOne">
              <div class="colNavigOne__one space1 height">
                <img
                  class="imgLogo"
                  src="../assets/img/sideBarBotton/liveCasino.png"
                  alt="CasinoLive"
                />
                <div class="textStyle">Лайв Казино</div>
              </div>

              <div class="colNavigOne__one">
                <img
                  class="imgLogo"
                  src="../assets/img/sideBarBotton/casino.png"
                  alt="CasinoLive"
                />
                <div class="textStyle">Казино</div>
              </div>

              <div class="logoPanda">
                <img
                  class="logoPanda__design"
                  src="../assets/img/sideBarNew/logoM.png"
                  alt=""
                />
              </div>

              <div class="colNavigOne__one space1">
                <img
                  class="imgLogo"
                  src="../assets/img/sideBarBotton/gift.png"
                  alt="Casino"
                />
                <div class="textStyle">Акции</div>
              </div>
              <div class="colNavigOne__one">
                <img
                  class="imgLogo"
                  src="../assets/img/sideBarBotton/tournam.png"
                  alt="Promo"
                />
                <div class="textStyle">Турниры</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end left -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    toggleStyle() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  position: fixed;
  /* left: 0; */
  bottom: -86px;
  width: 100%;
  height: 117px;
  transition: width 0.5s;
  z-index: 9999;
  overflow: hidden;
  padding-top: 4px;
  padding-bottom: 32px;
}

.left.show {
  bottom: 0px;
  transition: 1s;
}

.buttonMenu__Show_img.rotate {
  transform: none;
}

.backgroundStyle {
  background: #131420;
}

// .left:hover {
//   bottom: 5px;
//   transition: bottom 0.3s ease;
// }

.logoPanda {
  padding: 0 27px 7px 27px;
}

.colNavigOne {
  background: #131420;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colNavigOne__one {
}

.space1 {
  padding-right: 21px;
}

.height {
  padding-top: 19px;
}

.imgLogo {
  padding-bottom: 3px;
}

.textStyle {
  width: 60px;
  flex-direction: column;
  font-weight: 500;
  font-size: 15px;
}

.colNavigOne .textStyle {
  color: #7e7e7e;
}

.exitStyle {
  color: #7e7e7e;
}

.buttonMenu {
}

.buttonMenu__Show {
  background-color: #131420;
  border: none;
  padding: 7px 39px;
  border-radius: 10px 10px 0px 0px;
}
.buttonMenu__Show_img {
  vertical-align: middle;
  transform: rotate(180deg);
}
</style>
