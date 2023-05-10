<template>
  <div class="login">
    <div class="form">
      <div class="container">
        <div class="form-group">
          <div class="row">
            <div class="col">
              <form>
                <h1 class="h2 mb-3 fw-normal">Вход</h1>
                <h2 class="h4 mb-3 fw-normal">С возвращением!</h2>

                <div class="name-field">Эл.почта *</div>
                <div class="form-floating">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="space1">
                  <div class="name-field">Пароль *</div>
                  <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                </div>

                <div class="checkbox checkbox1  mb-3">
                  <label class="center-position">
                    <input type="checkbox" value="remember-me" />
                    <span style="padding-left: 3px; font-size: 1.2rem;">Remember me</span>
                  </label>
                </div>

                <button class="w-50 btn btn-lg btn-primary btn-style" type="submit">
                  Sign in
                </button>
              </form>

              <div class="wrap">
                <div class="question space1">Нет аккаунта?</div>
                <div class="registratin">
                  <button class="btn-style-froget" data-bs-target="#regModal" data-bs-toggle="modal">
                    <span class="text-forget">Зарегестрироваться ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>


  <div class="forget-pass">
    <button class="btn-style-froget" data-bs-target="#restorePass" data-bs-toggle="modal">
      <span class="text-forget">Забыли пароль?</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "LoginSection",
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      console.log('submitted');
    }
  }
};
</script>


<style scoped lang="scss">
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
  z-index: 2;
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

.fw-normal {
  color: white;

}

.form-group {
  width: 350px !important;
  margin: auto;

}

.name-field {

  color: #667b83;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 1.45;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  margin: 0 0 0 10px;
  min-height: 20px;
}

.form-floating {
  display: block;
  border: 2px solid;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: .3s;
}

.form-floating:hover {
  background-color: #d4145a;
  border: 1px solid #d4145a;
  box-shadow: #d4145a;
}

.form-control {
  font-size: 1.4rem;
}

.space1 {
  padding-top: 20px;
  padding-bottom: 3px;
}

.checkbox1 {
  color: whitesmoke;
  display: flex;
  padding-left: 5px;
  cursor: pointer;
}


.center-position {
  display: flex;
}


.forget-pass {
  text-align: end;
  color: whitesmoke;
  font-size: 1.3rem;
  padding-bottom: 30px;
}

.btn-style-froget {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.text-forget {
  color: whitesmoke;
  transition: .2s;
}

.text-forget:hover {
  color: #d4145a;
}

.btn-style {
  background-color: transparent;
  border: 2px solid #d4145a;
  transition: .3s;
}

.btn-style:hover {
  background-color: transparent;
  background-color: #d4145a !important;
  border: 2px solid #d4145a !important;

  -webkit-box-shadow: 0px 3px 20px 0px #d4145a;
  -moz-box-shadow: 0px 3px 20px 0px #d4145a;
  box-shadow: 0px 3px 20px 0px #d4145a;
}

.question {
  color: whitesmoke;
  font-size: 1.3rem;
  transition: color 0.3s linear;
}


.registratin {
  color: whitesmoke;
  font-size: 1.4rem;
  cursor: pointer;
  transition: .3s;
  padding-bottom: 20px;
}

.registratin:hover {
  color: #d4145a;
}
</style>