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

              <div class="btn">
                <button class="btn__style btn__style__space">
                  <img
                  class=""
                  src="@/assets/img/newMainPage/ButtonLogin.svg"
                />
                </button>
                <button class="btn__style">
                  <img
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
</template>

<script>
export default {};
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

.btn {
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

.btn__style__space {
  margin-right: 20px;
}
</style>
