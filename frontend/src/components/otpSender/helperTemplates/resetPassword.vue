<template>
  <div class="ResetPasswordConatiner">
    <input
      class="ResetInputScreen"
      type="text"
      placeholder="Email"
      :value="email"
      @change="emailSetter"
    />
    <input
      class="ResetInputScreen"
      type="password"
      placeholder="New Password"
      :value="password"
      @change="passwordSetter"
    />
    <input
      class="ResetInputScreen"
      type="password"
      placeholder="Retype New Password"
      :value="retypePassword"
      @change="retypePasswordSetter"
    />
    <div class="OTPBtn" @click="() => sendOtp()">Send OTP</div>
    <div class="ResetError" v-if="error">{{ error }}</div>
    <GlobalLoader v-if="loader" />
  </div>
</template>

<script>
import { sendOTPHelper } from "./js/otpSender";

import GlobalLoader from "../../globalLoader/loader.vue";

export default {
  name: "ResetPasswordScreen",

  props: [
    "email",
    "emailSetter",
    "password",
    "retypePassword",
    "passwordSetter",
    "retypePasswordSetter",
    "setScreenType",
    "resetToken"
  ],

  methods: {
    sendOtp: async function() {
      await sendOTPHelper(
        this.editError,
        this.setLoader,
        this.email,
        this.password,
        this.retypePassword,
        this.setScreenType,
        this.resetToken
      );
    },

    editError: function(err) {
      this.error = err;
    },
    setLoader: function() {
      this.loader = !this.loader;
    },
  },

  data: () => {
    return {
      error: null,
      loader: null
    };
  },

  components: {
    GlobalLoader
  }
};
</script>

<style scoped lang="scss">
@import "./styles/resetPassword.scss";
</style>>