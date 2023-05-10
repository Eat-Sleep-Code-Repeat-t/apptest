<template>
  <div class="registration">
    <div class="form">
      <div class="container">
        <div class="form-group">
          <form @submit.prevent="handleSubmit" method="post" action="/api/auth/signup">
            <h1 class="h3 mb-3 fw-normal">Регистрация</h1>
            <!-- <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
              />
            </div> -->

            <div class="name-field space1">Эл.почта *</div>
            <div class="form-floating">
              <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com"
                name="usermail" />
              <label for="floatingInput">Email address</label>
            </div>

            <div class="name-field space1">Пароль *</div>
            <div class="form-floating">
              <input type="password" v-model="password" class="form-control" id="password" placeholder="Password"
                name="userpassword" />
              <label for="floatingInput">Password</label>
            </div>

            <div class="checkbox checkbox1 mb-3">
              <label class="center-position" value="remember-me">
                <input type="checkbox" value="remember-me" />
                <span style="padding-left: 3px; font-size: 1.2rem;">Remember me</span>
              </label>
            </div>

            <button class="w-50 btn btn-lg btn-primary btn-style" type="submit">
              Sign in
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterSection",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // e.preventDefault()
      // Simple POST request with a JSON body using axios
      const article = {
        // username: document.getElementById("username").value.trim(),
        email: this.email.trim(),
        password: this.password.trim(),
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
}

.btn-style:hover {
  background-color: transparent;
  background-color: #d4145a !important;
  border: 2px solid #d4145a !important;

  -webkit-box-shadow: 0px 3px 20px 0px #d4145a;
  -moz-box-shadow: 0px 3px 20px 0px #d4145a;
  box-shadow: 0px 3px 20px 0px #d4145a;
}
</style>
