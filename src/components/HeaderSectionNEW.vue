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
                  type="text"
                  placeholder="Search for casinos games..."
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

              <div class="btnPosition">
                
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
              </div>
              
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>

  <!-- Modal LOGIN-->
  <div class="offcanvas__modal modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
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
    <div class="offcanvas__modal modal fade" id="regModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
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
     <div class="offcanvas__modal modal fade" id="restorePass" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
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
    RestoreSectionMODAL
  },
  data() {
    // return {
    //   buttonColor: 'transparent',
    //   buttonColor2: 'transparent',
    //   buttonColor3: 'transparent'
    // };
  },
  methods: {
    // toggleButtonColor() {
    //   if (this.buttonColor === 'transparent') {
    //     this.buttonColor = '#d4145a';
    //   } else {
    //     this.buttonColor = 'transparent';
    //   }
    // },
    // toggleButtonColor2() {
    //   if (this.buttonColor2 === 'transparent') {
    //     this.buttonColor2 = '#d4145a';
    //   } else {
    //     this.buttonColor2 = 'transparent';
    //   }
    // },
    // toggleButtonColor3() {
    //   if (this.buttonColor3 === 'transparent') {
    //     this.buttonColor3 = '#d4145a';
    //   } else {
    //     this.buttonColor3 = 'transparent';
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 16px 5% 16px 98px;
  background-color: rgba(19, 20, 32, 0.4);
  z-index: 2;
  backdrop-filter: blur(5px);
}

@media (max-width: 700px) {
  .navbar{
    padding: 16px 5% 16px 78px;
  }
}
.navbar__elements {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 640px) {
  .navbar__elements {
    justify-content: end;
  }
}



.navbar__elements__leftSide {
  display: flex;
  align-items: center;
}

@media (max-width: 640px) {
  .navbar__elements__leftSide{
    display: none;
  }
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
  width: 270px;
  color: #7e7e7e;
}

@media (max-width: 850px) {
  .searchInput__text {
    width: 200px;
  }
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

@media (max-width: 850px) {
  .changeLang {
    padding-right: 20px;
  }
}

@media (max-width: 850px) {
  .changeLang {
    padding-right: 20px;
  }
}

@media (max-width: 680px) {
  .changeLang {
    display: none;
  }
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
  

  -webkit-box-shadow: 0px 3px 20px 0px #7445d7;
  -moz-box-shadow: 0px 3px 20px 0px #7445d7;
  // box-shadow: 0px 3px 20px 0px #7445d7;
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

.container-fluid{
  padding: 0;
}

</style>
