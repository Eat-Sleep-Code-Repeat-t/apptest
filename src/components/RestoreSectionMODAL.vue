<template>
  <div class="registration">
    <div class="form">
      <div class="container">
        <div class="form-group mx-auto">
          <form @submit.prevent='handleSubmit' method="post" action="/api/auth/signup">
            <h1 class="h2 mb-3 fw-normal">Восстановление пароля</h1>
            <!-- <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
              />
            </div> -->

            <div class="restore-text mx-auto">Пожалуйста, введите эл.почту, которая была использована для создания учетной
              записи на
              coingames.bet Ссылка для сброса пароля будет отправлена на вашу эл.почту в ближайшее время.</div>


            <div class="name-field space1 mx-auto">Пароль *</div>

            <div class="form-floating mx-auto">
              <input type="password" class="form-control" id="password" placeholder="Password" name="userpassword" />
              <label for="floatingInput">Password</label>
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
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterSection",
  methods: {
    handleSubmit() {
      // e.preventDefault()
      // Simple POST request with a JSON body using axios
      const article = {
        // username: document.getElementById("username").value.trim(),
        email: document.getElementById("useremail").value.trim(),
        password: document.getElementById("password").value.trim(),
        roles: ["user"]
      };
      axios.post("http://localhost:9090/api/auth/signup", article, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
        .then(response => this.articleId = response.data.id);
      // console.log('submitted'+e);
    }
  }
};
</script>

<style scoped lang="scss">
.form-group {
  width: 350px;
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
  z-index: 2;
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

.space1 {
  padding-top: 20px;
  padding-bottom: 3px;
}

.form-control {
  font-size: 1.4rem;
}

.checkbox1 {
  color: whitesmoke;
  display: flex;
  padding-left: 5px;
  cursor: pointer;
}

.center-position {
  display: flex;
  padding-top: 4px;
}

.btn-style {
  background-color: transparent;
  border: 2px solid #d4145a;
  transition: .3s;
  margin-top: 30px;
  margin-bottom: 30px;
}

.btn-style:hover {
  background-color: transparent;
  background-color: #d4145a !important;
  border: 2px solid #d4145a !important;

  -webkit-box-shadow: 0px 3px 20px 0px #d4145a;
  -moz-box-shadow: 0px 3px 20px 0px #d4145a;
  box-shadow: 0px 3px 20px 0px #d4145a;
}

.restore-text {
  padding-top: 15px;
  color: whitesmoke;
  text-align: center;
  font-size: 1.3rem;
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
</style>
