<template>
  <div>
    <div class="header">
      <div class="container-fluid">
        <nav class="navbar">
          <div class="navbar__elements">
            <div class="navbar__elements__leftSide">
              <div class="ico">
                <img
                  class="ico__search"
                  src="@/assets/img/newMainPage/search.svg"
                  alt="search"
                />
              </div>
              <div class="searchInput">
                <input
                  class="searchInput__text"
                  width="20px"
                  type="text"
                  placeholder="Search for casinos, games and more..."
                />
              </div>
            </div>
            <div class="navbar__elements__rightSide">
              <div class="changeLang">
                <div class="changeLang__option">en</div>
                <div class="changeLang__ico">
                  <img
                    class="changeLang__ico__style"
                    src="@/assets/img/newMainPage/arrow.svg"
                    alt="chose lang"
                  />
                </div>
              </div>

              <!-- <div class="btnPosition">
                
                <button class="btn__style btn__style__space">
                  <img
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#regModal"
                  src="@/assets/img/newMainPage/ButtonLogin.svg"
                />
                </button>


                <button class="btn__style">
                  <img
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  class=""
                  src="@/assets/img/newMainPage/Buttonregist.svg"
                />
                </button>
              </div> -->

              <div class="loginPlace">
                <div class="loginPlace__Profile-holder">
                  <div class="loginPlace__Profile">
                    <div class="loginPlace__Profile__one">
                      <div class="loginPlace__Profile__one__upper">
                        <div class="loginPlace__Profile__one__avatar">
                          <img
                            class="loginPlace__Profile__one__avatar__style"
                            src="../assets/img/newMainPage/iconamoon.jpg"
                            alt=""
                          />
                        </div>
                        <div class="loginPlace__Profile__one__detail">
                          <div class="loginPlace__Profile__one__detail__logo">
                            WinPanda
                          </div>
                          <div class="loginPlace__Profile__one__detail__level">
                            1 Level - 10💎
                          </div>
                        </div>
                        <div class="loginPlace__Profile__one__mesg">
                          <div class="loginPlace__Profile__one__mesg__border">
                            <img
                              class="loginPlace__Profile__one__mesg__border__style"
                              src="../assets/img/newMainPage/msg.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div class="loginPlace__Profile__one__gift">
                          <div class="loginPlace__Profile__one__gift__count">
                            <div
                              class="loginPlace__Profile__one__gift__count__cen"
                            >
                              <img
                                class="loginPlace__Profile__one__gift__count__cen__imgGift"
                                src="../assets/img/newMainPage/gift.png"
                                alt=""
                              />
                            </div>
                            <div
                              class="loginPlace__Profile__one__gift__count__up"
                            >
                              4
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="loginPlace__Profile__accordion">
                        <div
                          class="field__profile field__profile__top distance"
                        >
                          <div class="profileLevel">
                            <div>1 Level</div>
                            <div>10/100 💎</div>
                          </div>
                          <div>
                            <label
                              for="customRange2"
                              class="form-label"
                            ></label>
                            <input
                              type="range"
                              class="form-range"
                              min="0"
                              max="10"
                              id="customRange2"
                            />
                          </div>
                        </div>
                        <div class="field__profile distance">
                          Account ID 48154999
                        </div>
                        <div class="field__profile distance fiedlStyle">
                          <img
                            class="styleIco-small"
                            src="../assets/img/newMainPage/iconamoon.jpg"
                            alt=""
                          />
                          <div class="fiedlStyle__text">My profile</div>
                        </div>
                        <div class="distance fiedlStyle">
                          <img
                            class="styleIco-off"
                            src="../assets/img/newMainPage/log-off.png"
                            alt=""
                          />
                          <div class="styleIco-off-text">Exit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="loginPlace__Balance-holder">
                  <div class="loginPlace__Balance">
                    <div class="loginPlace__Balance__one">
                      <div class="loginPlace__Balance__one__Wallet">
                        <img
                          class="loginPlace__Balance__one__Wallet__imgStyle"
                          src="../assets/img/newMainPage/wallet.png"
                          alt=""
                        />
                      </div>
                      <div class="loginPlace__Balance__one__Total">
                        <div class="loginPlace__Balance__one__Total__Name">
                          Balance
                        </div>
                        <div class="loginPlace__Balance__one__Total__Index">
                          20 000 ₴
                        </div>
                      </div>
                      <div class="loginPlace__Balance__one__Button">
                        <button class="loginPlace__Balance__one__Button__style">
                          Replenish
                        </button>
                      </div>
                    </div>

                    <div class="loginPlace__Balance__accordion">
                      <div class="field__profile__top">
                        <div class="distance1">
                          <div class="styleBalance">
                            <div>Real balance</div>
                            <div>20 000 ₴</div>
                          </div>
                          <div class="styleBalance">
                            <div>Bonus balance</div>
                            <div>20 000 ₴</div>
                          </div>
                        </div>
                        <div class="field__profile__top distance1">
                          <div class="styleBalance">Cashback 1 000 ₴</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <!-- Modal LOGIN-->
  <div
    class="offcanvas__modal modal fade"
    id="loginModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div> -->
        <div class="modal-body">
          <div class="col">
            <LoginSection />
          </div>
        </div>
        <!-- <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
      </div>
    </div>
  </div>

  <!-- Modal REGISTRATION -->
  <div
    class="offcanvas__modal modal fade"
    id="regModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <div class="container">
            <RegisterSection />
            <!-- <div class="row">
                <div class="col-xl">
                </div>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Restore-->
  <div
    class="offcanvas__modal modal fade"
    id="restorePass"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <div class="col">
            <RestoreSectionMODAL />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterSection from "@/components/RegisterSection.vue";
import LoginSection from "@/components/LoginSection.vue";
import RestoreSectionMODAL from "@/components/RestoreSectionMODAL.vue";

export default {
  name: "HeaderSection",
  components: {
    LoginSection,
    RegisterSection,
    RestoreSectionMODAL,
  },
  data() {
    return {
      buttonColor: "transparent",
      buttonColor2: "transparent",
      buttonColor3: "transparent",
    };
  },
  methods: {
    toggleButtonColor() {
      if (this.buttonColor === "transparent") {
        this.buttonColor = "#d4145a";
      } else {
        this.buttonColor = "transparent";
      }
    },
    toggleButtonColor2() {
      if (this.buttonColor2 === "transparent") {
        this.buttonColor2 = "#d4145a";
      } else {
        this.buttonColor2 = "transparent";
      }
    },
    toggleButtonColor3() {
      if (this.buttonColor3 === "transparent") {
        this.buttonColor3 = "#d4145a";
      } else {
        this.buttonColor3 = "transparent";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 16px 103px 16px 98px;
  background-color: rgba(19, 20, 32, 0.4);
  z-index: 2;
  backdrop-filter: blur(5px);
}
.navbar__elements {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.navbar__elements__leftSide {
  display: flex;
  align-items: center;
}
.ico {
  display: inline-block;
}

.ico__search {
  display: block;
  background-color: #7647dc;
  padding: 14px 22px;
  border-radius: 20px;
}

.ico__search:hover {
  background-color: #7445d7 !important;
  border: solid 0 #7445d7 !important;

  -webkit-box-shadow: 0px 3px 20px 0px #7445d7;
  -moz-box-shadow: 0px 3px 20px 0px #7445d7;
  box-shadow: 0px 3px 20px 0px #7445d7;
}

.searchInput {
  text-align: center;
  padding-left: 20px;
}
.searchInput__text {
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  height: 17px;
  border: none;
  outline: none;
  width: 600px;
  color: #7e7e7e;
}

.searchInput__text::placeholder {
  color: #7e7e7e;
}
.search__text {
}
.navbar__elements__rightSide {
  display: flex;
}
.changeLang {
  display: flex;
  align-items: center;
  padding-right: 76px;
}
.changeLang__option {
  text-transform: uppercase;
  padding-right: 17px;

  font-weight: 500;
  font-size: 14px;
}
.changeLang__ico {
}

.changeLang__ico__style {
  display: flex;
  justify-content: center;
  // align-items: center;
}

.btnPosition {
  align-self: center;
  display: flex;
}
.btn__style {
  display: block;
  background-color: #7647dc;
  padding: 14px 22px;
  border-radius: 20px;
  border: none;
  outline: none;
}

.btn__style:hover {
  background-color: #7445d7 !important;
  border: none solid #7445d7 !important;

  -webkit-box-shadow: 0px 3px 20px 0px #7445d7;
  -moz-box-shadow: 0px 3px 20px 0px #7445d7;
  box-shadow: 0px 3px 20px 0px #7445d7;
}

.btn__style__space {
  margin-right: 20px;
}

//modalSTyle

.offcanvas__modal .modal-content {
  background-color: transparent;
  border: transparent;
}

.modal-header {
  border-bottom: none;
}

.btn-close {
  filter: invert(100%);
}

.loginPlace {
  display: flex;
  align-items: center;

  height: 100%;

  position: relative;

  &__Profile {
    background: #1b1c2c;
    display: flex;
    width: 289px;
    border-radius: 19px;
    border: 1px solid #7647dc;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    &-holder {
      position: relative;

      display: flex;
      align-items: center;

      width: 289px;
      height: 100%;

      margin-right: 14px;
      margin-bottom: 12px;
    }

    &__one {
      &__upper {
        padding: 9px 10px 9px 10px;
        display: flex;
        align-items: center;
      }

      &__avatar {
        padding-right: 11px;

        &__style {
          width: 38px;
          border-radius: 30px;
          filter: brightness(80%);
        }
      }

      &__detail {
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        padding-right: 22px;

        &__logo {
        }
        &__level {
        }
      }

      &__mesg {
        padding-right: 14px;
        &__border {
          border-left: 1px solid #ffffff;
          border-right: 1px solid #ffffff;
          padding: 7px 16px 7px 16px;

          &__style {
            width: 20px;
          }
        }
      }

      &__gift {
        &__count {
          display: flex;
          &__cen {
            &__imgGift {
              width: 20px;
            }
          }

          &__up {
            width: 15px;
            height: 15px;
            border-radius: 13px;
            background: #7647dc;
            margin-top: -7px;
            margin-left: -1px;
          }
        }
      }
    }
  }

  &__Balance {
    width: 227px;
    border-radius: 19px;
    border: 1px solid #7647dc;
    background: #1b1c2c;

    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    &-holder {
      position: relative;

      display: flex;
      align-items: center;

      width: 227px;
      height: 100%;

      margin-bottom: 12px;
    }

    &__one {
      padding: 9px 0 9px 10px;
      display: flex;
      align-items: center;

      &__Wallet {
        padding-right: 10px;
        padding-bottom: 9px;

        &__imgStyle {
          width: 20px;
          height: 23px;
        }
      }

      &__Total {
        font-size: 14px;
        font-weight: 500;
        text-align: left;
        padding-right: 16px;

        &__Name {
        }
        &__Index {
        }
      }

      &__Button {
        &__style {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          border: none;
          background-color: transparent;

          font-size: 14px;
          font-weight: 500;
          color: #ffffff;

          padding: 5px 11px;
          border-radius: 9px;
          background: #7445d7;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}

.loginPlace__Profile__accordion {
  max-height: 0;
  overflow: hidden;
  // padding: 0 10px;
  transition: max-height 0.4s ease;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}

.loginPlace__Profile:hover .loginPlace__Profile__accordion {
  max-height: 500px;
}

.loginPlace__Balance__accordion {
  max-height: 0;
  overflow: hidden;
  // padding: 0 10px;
  transition: max-height 0.4s ease;
}

.loginPlace__Balance:hover .loginPlace__Balance__accordion {
  max-height: 500px;
}

.field__profile {
  border-bottom: 1px solid #414141;
}

.field__profile__top {
  border-top: 1px solid #414141;
}

.distance {
  padding: 10px 15px;
}

.profileLevel {
  display: flex;
  justify-content: space-between;
}

.fiedlStyle {
  display: flex;
  align-items: center;

  &__text {
    padding-left: 10px;
  }
}
.styleIco-small {
  border-radius: 30px;
  filter: brightness(80%);
  width: 31px;
  height: 31px;
}

.styleIco-off {
  width: 21px;
  margin-left: 5px;
}

.styleIco-off-text {
  padding-left: 14px;
}

.styleBalance {
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

.distance1 {
  padding: 14px 15px;
}
</style>
