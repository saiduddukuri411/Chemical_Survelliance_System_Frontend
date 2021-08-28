<template>
  <div class="LoginContainer">
    <div class="LoginForm">
      <div class="LoginHeader">
        <div
          :class="
            isLogin
              ? 'ToggleLoginButtons ActiveToggleBtn'
              : 'ToggleLoginButtons'
          "
          @click="() => ToggleLoginOption(true)"
        >
          Login
        </div>
        <div
          :class="
            !isLogin
              ? 'ToggleLoginButtons ActiveToggleBtn'
              : 'ToggleLoginButtons'
          "
          @click="() => ToggleLoginOption(false)"
        >
          Signup
        </div>
      </div>

      <input
        class="LoginFormInput"
        placeholder="Email Id"
        type="text"
        @change="emailChanger"
        :value="email"
      />
      <input
        class="LoginFormInput"
        placeholder="Password"
        type="password"
        @change="passwordChanger"
        :value="password"
      />
      <input
        class="LoginFormInput"
        v-if="!isLogin"
        placeholder="Retype Password"
        type="password"
        @change="confirmPassword"
        :value="retryPassword"
      />

      <div
        class="ForgotPasswordBtn"
        v-if="isLogin"
        @click="() => ToggleForgotPasswordScreed()"
      >
        Forgot Password?
      </div>
      <div class="LoginFormBtn" @click="() => toggleLogin()">
        {{ isLogin ? "Login" : "Create An Account" }}
      </div>

      <p class="LoginErrorTag" v-if="errMessage">{{ errMessage }}</p>
    </div>
    <OTPContainer v-if="forgotPassword" :closeOTPScreen = "ToggleForgotPasswordScreed"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { signupUser, loginUser } from "./helper.js";
import OTPContainer from "../otpSender/OTP_Frame.vue";

export default {
  name: "Login",
  data: () => {
    return {
      isLogin: true,
      email: "",
      password: "",
      retryPassword: "",
      errMessage: "",
      forgotPassword: false
    };
  },
  computed: {
    ...mapGetters(["getLoginStatus"])
  },
  methods: {
    ToggleLoginOption(toggleOption) {
      this.isLogin = toggleOption;
      this.email = "";
      this.password = "";
      this.errMessage = "";
      this.retryPassword = "";
    },
    pushErrorMessage(msg) {
      this.errMessage = msg;
    },
    emailChanger(event) {
      this.email = event.target.value;
      this.errMessage = "";
    },
    passwordChanger(event) {
      this.password = event.target.value;
      this.errMessage = "";
    },
    confirmPassword(event) {
      (this.retryPassword = event.target.value), (this.errMessage = "");
    },
    clearInputs() {
      this.email = "";
      this.password = "";
      this.retryPassword = "";
    },
    async toggleLogin() {
      !this.isLogin
        ? await signupUser(
            this.$store,
            "CHANGE_GLOBAL_LOADER_STATE",
            this.email,
            this.password,
            this.retryPassword,
            this.pushErrorMessage,
            this.clearInputs
          )
        : await loginUser(
            this.$store,
            "CHANGE_GLOBAL_LOADER_STATE",
            this.email,
            this.password,
            this.pushErrorMessage,
            this.clearInputs,
            this.$router
          );
    },
    ToggleForgotPasswordScreed() {
      this.forgotPassword = !this.forgotPassword;
    }
  },
  components: {
    OTPContainer
  }
};
</script>

<style scoped lang="scss">
@import "./style/login.scss";
</style>