<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import leftArrowIcon from '@/components/icons/arrowLeft.vue'

let showLoginForm = ref(true);
let showPassword = ref(false);
let showConfPassword = ref(false);

const togglePasswordVisibility = (form) => {
  if (form == "login" || form == "signup") {
    let passwordField = document.querySelector("form .input-field .pswrd");
    showPassword.value = !showPassword.value;

    if (showPassword.value) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  } else {
    let confPasswordField = document.querySelector(
      "form .input-field .confPassword"
    );
    showConfPassword.value = !showConfPassword.value;

    if (showConfPassword.value) {
      confPasswordField.type = "text";
    } else {
      confPasswordField.type = "password";
    }
  }
};
/************************** Login Functions *****************************/
const loginEmail = ref("");
const loginPassword = ref("");
const handleLogin = () => {
  // validation goes here

  let userData = {
    username: loginEmail.value,
    password: loginPassword.value,
  };
  submitLogin(userData);
};

const submitLogin = async (data) => {
  let res = await axios.post("http://localhost:3000/auth/login", data);

  let token = res.data.accessToken;
  let userId = res.data.userId;

  let loggedInUserData = {
    id: userId,
    token: token,
  };
  // console.log(token);
  localStorage.setItem("userData", JSON.stringify(loggedInUserData));
  // redirecting to login page
  router.push({ path: "user/" + userId });
};

/************************** signup Functions *****************************/
const email = ref("");
const username = ref("");
const password = ref("");
const passwordLengthErr = ref(true);
const confPassword = ref("");
let matchPasswords = ref(true);

const handleUserData = () => {
  // check password length
  if (password.value.length >= 4) {
    passwordLengthErr.value = true;
  } else {
    passwordLengthErr.value = false;
  }

  // check password confirmation
  if (confPassword.value !== password.value) {
    matchPasswords.value = false;
  } else {
    matchPasswords.value = true;
  }

  if (matchPasswords.value) {
    // prepare data to send to the server
    let userData = {
      email: email.value,
      username: username.value,
      password: password.value,
      confPassword: confPassword.value,
    };

    // send data
    submitSignup(userData);
  }
};

const submitSignup = async (data) => {
  let res = await axios.post("http://localhost:3000/auth/register", data);

  // redirecting to login page
  router.push({ name: "login" });
};
</script>

<template>
  <div class="login__header">
    <button class="go_back" @click="$router.go(-1)"><leftArrowIcon /> Go Back</button>
  </div>

  <div class="login-wrapper">
    <div class="form-wrapper">
      <div class="login-form" v-if="showLoginForm">
        <h2>Login</h2>

        <form @submit.prevent="handleLogin()">
          <div class="input-field">
            <input type="text" name="email" required v-model="loginEmail" />
            <label>Email or Username</label>
          </div>
          <div class="input-field">
            <input
              type="password"
              name="password"
              required
              class="pswrd"
              v-model="loginPassword"
            />
            <span
              class="show-password"
              @click="togglePasswordVisibility('login')"
              >{{ showPassword ? "HIDE" : "SHOW" }}</span
            >
            <label>Password</label>
          </div>
          <div class="button">
            <button type="submit">Login</button>
          </div>
        </form>

        <div class="show-signup-form">
          Don't have an account?
          <span @click="showLoginForm = !showLoginForm">Sign Up</span>
        </div>
      </div>

      <div class="signup-form" v-else>
        <h2>Signup</h2>

        <form @submit.prevent="handleUserData()">
          <div class="input-field">
            <input type="email" name="email" required v-model="email" />
            <label>Email</label>
          </div>
          <div class="input-field">
            <input type="text" name="userName" required v-model="username" />
            <label>Username</label>
          </div>
          <div class="input-field">
            <input
              type="password"
              name="password"
              required
              class="pswrd"
              v-model="password"
            />
            <span
              class="show-password"
              @click="togglePasswordVisibility('signup')"
              >{{ showPassword ? "HIDE" : "SHOW" }}</span
            >
            <label>Password</label>
            <span class="passwords-length" v-if="!passwordLengthErr"
              >Passwords Must be 8 characters or more</span
            >
          </div>
          <div class="input-field">
            <input
              type="password"
              name="confPassword"
              required
              class="confPassword"
              v-model="confPassword"
            />
            <span
              class="show-password showConfPassword"
              @click="togglePasswordVisibility('conf')"
              >{{ showConfPassword ? "HIDE" : "SHOW" }}</span
            >
            <label>Confirm Password</label>
            <span class="passwords-not-match" v-if="!matchPasswords"
              >Passwords Must be matched</span
            >
          </div>
          <div class="button">
            <!-- <div class="inner"></div> -->
            <button type="submit">Signup</button>
          </div>
        </form>

        <div class="show-login-form">
          have an account?
          <span @click="showLoginForm = !showLoginForm">Login</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login__header{
  position: absolute;
}
.login__header .go_back{
  border-radius: 10px;
  border: unset;
  width: 100px;
  height: 50px;
  margin: 20px 0 0 20px;
}
.login__header .go_back:hover{
  cursor: pointer;
  background-color: #dcdcdc;
  transition: all ease-in .1s;
}
.login__header .go_back svg{margin-right: 5px;}
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh 
}
.form-wrapper {
  box-shadow: #dce1eb 0px 4px 12px;
  width: 450px;
  padding: 20px;
  border-radius: 10px;
  height: 560px;
  background-color: #fff;
}

.signup-form h2,
.login-form h2 {
  font-size: 40px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
}
.signup-form form,
.login-form form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup-form form .button,
.login-form form .button {
  margin-top: 30px;
}
.signup-form .input-field,
form .button,
.login-form .input-field,
form .button {
  margin: 10px 25px;
  position: relative;
  height: 50px;
  width: 100%;
}
.signup-form .input-field input,
.login-form .input-field input {
  height: 100%;
  width: 100%;
  border: 1px solid silver;
  padding-left: 15px;
  outline: none;
  font-size: 19px;
  transition: 0.3s;
}
.signup-form .input-field input:focus,
.login-form .input-field input:focus {
  border: 1px solid #1da1f2;
}
.signup-form .input-field label,
span.show-password,
.login-form .input-field label,
span.show-password {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.signup-form .input-field label,
.login-form .input-field label {
  left: 15px;
  font-size: 18px;
  color: gray;
  pointer-events: none;
  transition: 0.3s;
}
.signup-form span.show-password,
.login-form span.show-password {
  right: 20px;
  color: #111;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  -moz-user-select: -moz-none;
  -webkit-user-select: -webkit-none;
  user-select: none;
  visibility: hidden;
}
.signup-form input:valid ~ span.show-password {
  visibility: visible;
}
.login-form input:valid ~ span.show-password {
  visibility: visible;
}
.signup-form input:focus ~ label,
.signup-form input:valid ~ label,
.login-form input:focus ~ label,
.login-form input:valid ~ label {
  transform: translateY(-33px);
  background: white;
  font-size: 16px;
  color: #1da1f2;
}
.signup-form .button button,
.login-form .button button {
  width: 100%;
  height: 100%;
  border: none;
  background-size: 200%;
  background-image: linear-gradient(to left, #00dbde, #fc00ff, #00dbde);
  outline: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
}
.signup-form .button button:hover,
.login-form .button button:hover {
  background-position: right;
}
.signup-form .input-field input,
.signup-form .button button,
.login-form .input-field input,
.login-form .button button {
  border-radius: 10px;
}
/* Show signup form */
.signup-form .show-login-form,
.login-form .show-signup-form {
  font-family: "Noto Sans", sans-serif;
  margin: 20px;
}
.signup-form .show-login-form span,
.login-form .show-signup-form span {
  color: #1da1f2;
  text-decoration: none;
}
.signup-form .show-login-form span:hover,
.login-form .show-signup-form span:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
