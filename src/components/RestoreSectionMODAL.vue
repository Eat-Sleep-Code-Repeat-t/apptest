<template>
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
                <h1 class="h1 fw-normal">Restore password</h1>

                <div class="emailLogin">
                  <div class="emailLogin__solid">
                    <div class="emailLogin-style">Email</div>
                  </div>
                  <div class="emailLogin__solid">
                    <div class="emailLogin-style">Phone</div>
                  </div>
                </div>

                <div class="textStyleDesc">
                  Enter the email address you used when registering on the site
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

                  <!-- <div class="checkbox checkbox1">
                    <label class="center-position">
                      <input class="custom-checkbox" type="checkbox" value="remember-me" />
                      <span style="padding-left: 11px; font-size: 1.5rem"
                        >Remember me</span
                      >
                    </label>
                  </div> -->
                </div>
<!-- 
                <div class="forget-pass forget-pass1">
                  <a
                    class="btn-style-froget"
                    data-bs-target="#restorePass"
                    data-bs-toggle="modal"
                  >
                    <span class="text-forget">I forgot my password</span>
                  </a>
                </div> -->

                <button
                  class="w-100 btn btn-lg btn-primary btn-style btn-style1"
                  type="submit"
                >
                Restore access 🔐
                </button>
              </form>

              <!-- <div class="wrap">
                <div class="question space1">Or login via</div>
                <div class="registratin">
                  <a
                    class="btn-style-froget"
                    data-bs-target="#regModal"
                    data-bs-toggle="modal"
                  >
                    <span class="text-forget">Зарегестрироваться ></span>
                  </a>
                </div>
              </div> -->

                <!-- <div class="icoSocialLogin">
                  <img class="icoSocialLogin__position" src="@/assets/img/loginModal/google.png" alt="">
                  <img class="icoSocialLogin__position" src="@/assets/img/loginModal/telegram.png" alt="">
                  <img class="icoSocialLogin__position" src="@/assets/img/loginModal/facebook.png" alt="">
                  <img src="@/assets/img/loginModal/twitter.png" alt="">
                </div> -->
            </div>
          </div>
        </div>
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
  border-radius: 20px;
  color: #020103;
  width: 512px;
  height: 470px;
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
  padding-top: 20px;
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

.center-position {
  display: flex;
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
  
  background-color: #7445d7 !important;
  border: none solid #7445d7 !important;

  -webkit-box-shadow: 0px 3px 20px 0px #7445d7;
  -moz-box-shadow: 0px 3px 20px 0px #7445d7;
  box-shadow: 0px 3px 20px 0px #7445d7;
}

.btn-style1 {

  margin-top: 23px;

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

.icoSocialLogin__position{
  padding-right: 28px;
  
}

.textStyleDesc {
  font-size: 14px;
 
  padding-top: 35px;
}

</style>
