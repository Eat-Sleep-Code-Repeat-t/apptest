<template>
  <div class="twoBlock">
    <div class="login">
      <div class="form">
        <div class="container">
          <div class="text-end">
            <button
              type="button"
              class="btn-close btn-closeStyle"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="for m-group">
            <div class="row">
              <div class="col">
                <form>
                  <h1 class="h1 fw-normal">Create an account</h1>

                  <div class="emailLogin">
                    <div class="emailLogin__solid">
                      <div class="emailLogin-style">Email</div>
                    </div>
                    <div class="emailLogin__solid">
                      <div class="emailLogin-style">Phone</div>
                    </div>
                  </div>

                  <div class="fieldPositions">
                    <div class="name-field">Email</div>
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput" class="colorLabel"
                        >name@example.com</label
                      >
                    </div>

                    <div class="name-field spaceField">Password</div>
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword" class="colorLabel"
                        >Password</label
                      >
                    </div>

                    <div class="checkbox checkbox1">
                      <label class="center-position">
                        <input class="checkboxStyle" type="checkbox" value="remember-me" />
                        <span class="checkboxStyleOne"
                          >Error Password</span
                        >
                      </label>
                    </div>

                    <div class="checkbox checkbox1">
                      <label  class="center-position">
                        <input class="checkboxStyle" type="checkbox" value="remember-me" />
                        <span class="checkboxStyleText"
                          >I am 21 years old, able-bodied, have no gambling addiction and familiar with <span style="color:#7647DC">Site rules</span>  and <span style="color:#7647DC">Public offer</span> .
I am warned that persons who do not meet any of these conditions are prohibited from participating in the gambling game.</span
                        >
                      </label>
                    </div>
                    <div class="checkbox checkbox1">
                      <label class="center-position">
                        <input class="checkboxStyle" type="checkbox" value="remember-me" />
                        <span class="checkboxStyleText"
                          >I want to receive promotional messages, casino news, bonuses and exclusive offers.</span
                        >
                      </label>
                    </div>
                  </div>

                  <div class="forget-pass forget-pass1">
                    <a
                      class="btn-style-froget"
                      data-bs-target="#restorePass"
                      data-bs-toggle="modal"
                    >
                      <!-- <span class="text-forget">I forgot my password</span> -->
                    </a>
                  </div>

                  <button
                    class="w-100 btn btn-lg btn-primary btn-style btn-style1"
                    type="submit"
                  >
                    Login 🎉
                  </button>
                </form>

                <div class="wrap">
                  <div class="question space1">Or login via</div>
                  <div class="registratin">
                    <a
                      class="btn-style-froget"
                      data-bs-target="#regModal"
                      data-bs-toggle="modal"
                    >
                      <!-- <span class="text-forget">Зарегестрироваться ></span> -->
                    </a>
                  </div>
                </div>

                <div class="icoSocialLogin">
                  <img
                    class="icoSocialLogin__position"
                    src="@/assets/img/loginModal/google.png"
                    alt=""
                  />
                  <img
                    class="icoSocialLogin__position"
                    src="@/assets/img/loginModal/telegram.png"
                    alt=""
                  />
                  <img
                    class="icoSocialLogin__position"
                    src="@/assets/img/loginModal/facebook.png"
                    alt=""
                  />
                  <img src="@/assets/img/loginModal/twitter.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wonBonus">
      <div class="winTitle">Almost won over with bonuses</div>
      <div class="totalWin">100 000 ₴</div>

      <div class="Spins">and 300 free spins</div>

      <div class="imgPandaStyle">
      <img class="imgPandaStyle-result" src="../assets/img/loginModal/chips.png" alt="">
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "LoginSection",
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      console.log("submitted");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 0;
}
.login {
  background-color: #ffffff;

  padding: 20px 22px;
  border-radius: 20px 0 0 20px;
  color: #020103;
  
  box-sizing: border-box;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 0;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-closeStyle {
}

.fw-normal {
  padding-top: 14px;
  color: #020103;
  font-weight: 900 !important;
  font-size: 32px !important;
  line-height: 39px;
}

.emailLogin {
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
}

.emailLogin-style {
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
}

.emailLogin-style {
  border-bottom: 3px solid black;
  padding-bottom: 10px;
  width: 234px;
}

//fields

.fieldPositions {
  padding-top: 46px;
}

.form-group {
  width: 427px !important;
  margin: auto;
}

.name-field {
  padding-bottom: 9px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.45;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  margin: 0 0 0 10px;
  min-height: 20px;
}

.spaceField {
  padding-top: 24px;
}

.form-floating {
  display: block;

  border-radius: 10px;
  font-size: 1.2rem;
  transition: 0.3s;

  background: #1b1c2c;
  // border: 2px solid #7647DC;
  border-radius: 19px;
}

.form-control {
  display: block;

  border-radius: 10px;
  font-size: 1.6rem;
  transition: 0.3s;

  background: #1b1c2c;
  border: 2px solid #7647dc;
  border-radius: 19px;

  font-style: normal;
  font-weight: 500;

  line-height: 17px;
  color: #ffffff;
  padding-left: 24px;

  height: 57px;
}

.colorLabel {
  color: #515154;
  padding-left: 26px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.checkbox1 {
  color: #000000;
  display: flex;
  padding-left: 5px;

  cursor: pointer;
  font-size: 14px;
  line-height: 17px;

  padding-top: 10px;
}

.checkboxStyleOne {
  padding-left: 11px; 
  font-size: 1.3rem;
  text-align: left;
  padding-bottom: 40px;
}

.checkboxStyleText {
  padding-left: 11px; 
  font-size: 1.3rem;
  text-align: left;
  padding-bottom: 24px;
}

.checkboxStyle{
  transform: scale(1.3);
}

.center-position {
  display: flex;
  align-items: baseline;
}

.forget-pass {
  text-align: end;
  color: #000000;
  font-size: 1.3rem;
  padding-bottom: 30px;
}

.btn-style-froget {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.text-forget {
  color: #7445d7;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  transition: 0.2s;
  text-decoration-line: underline;
}

.text-forget:hover {
  color: #7445d7;
}

.btn-style {
  background-color: transparent;
  border: 2px solid #7445d7;
  transition: 0.3s;
}

.btn-style:hover {
  background-color: transparent;
  background-color: #7445d7 !important;
  border: 2px solid #7445d7 !important;

  -webkit-box-shadow: 0px 3px 20px 0px #7445d7;
  -moz-box-shadow: 0px 3px 20px 0px #7445d7;
  box-shadow: 0px 3px 20px 0px #7445d7;
}

.btn-style1 {
  height: 57px;
  background: #7445d7;
  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;

  font-weight: 500;
  font-size: 15px;
}

.question {
  padding-top: 9px;
  color: #000000;
  font-size: 14px;
  transition: color 0.3s linear;
}

.registratin {
  color: whitesmoke;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s;
  padding-bottom: 20px;
}

.registratin:hover {
  color: #d4145a;
}

.icoSocialLogin {
  padding-top: 20px;
}

.icoSocialLogin__position {
  padding-right: 28px;
}

//right side
.wonBonus {
  background: linear-gradient(180deg, #7647dc 0%, #000000 100%);
  text-align: left;
  
  padding-left: 43px;
  padding-right: 62px;
  max-width: 399px;

  border-radius: 0 20px 20px 0;
}

.twoBlock {
  display: flex;
  position: relative;
  width: 512px;
  height: 912px;
}

.winTitle {
  padding-top: 54px;
  font-weight: 700;
  font-size: 32px;
  line-height: 38.73px;
  width: 294px;
}
.totalWin {
  padding-top: 40px;
  font-size: 57px;
  font-weight: 700;
}
.Spins {
  padding-top: 48px;
  font-size: 32px;
  font-weight: 700;
}

.imgPandaStyle{
  
}

.imgPandaStyle-result{
  width: 484px;
    position: absolute;
    left: 90%;
}



</style>
