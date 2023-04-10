<template>
  <div class="registration">
    <div class="form">
      <div class="container">
        <div class="form-group">
          <form @submit.prevent='handleSubmit' method="post" action="/api/auth/signup">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
              />
              <input
                type="email"
                class="form-control"
                id="useremail"
                placeholder="name@example.com"
                name="useremail"
              />
              <input
                type="password"
                class="form-control"
                id="password"
                name="userpassword"
              />
              <label for="floatingInput">Email address</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
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
  methods:{
    handleSubmit(){
        // e.preventDefault()
          // Simple POST request with a JSON body using axios
          const article = {
            username: document.getElementById("username").value.trim(),
            email: document.getElementById("useremail").value.trim(),
            password: document.getElementById("password").value.trim(),
            roles: ["user"]
          };
          axios.post("http://localhost:9090/api/auth/signup", article , {
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
</style>
