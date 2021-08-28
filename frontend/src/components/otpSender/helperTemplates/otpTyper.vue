<template>
  <div class="OTPTyperContainer">
    <div class="EmailText">Check: {{email}}</div>
    <input
      class="OTPTyperBox"
      placeholder="Type OTP"
      type="text"
      :value="otp"
      @change="changeOTPInput"
    />
    <div class="OTPContainerBtnHolder">
      <div class="OTPContainerBtn" @click="() => verifyOTP()">Submit</div>
      <div class="OTPContainerBtn" @click="() => resendOTPToUser()">Resend OTP</div>
      <div class="OTPContainerBtn" @click="() => getBackToResetScreen()">Back</div>
    </div>

    <div class="ResetError" v-if="error">{{ error }}</div>
    <GlobalLoader v-if="loader" />
  </div>
</template>

<script>
import GlobalLoader from "../../globalLoader/loader.vue";
import { sendOTPHelper } from "./js/otpSender";
import { verifyUserOTP } from "./js/otpSender";

export default {
  name: "OTPTyperScreen",
  props: [
    "email",
    "setScreenType",
    "password",
    "retypePassword",
    "resetToken",
    "token"
  ],
  methods: {
    getBackToResetScreen: function() {
      this.setScreenType("RESET");
    },
    editError: function(err) {
      this.error = err;
    },
    setLoader: function() {
      this.loader = !this.loader;
    },
    resendOTPToUser: async function() {
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
    changeOTPInput: function(event) {
      this.otp = event.target.value;
    },
    verifyOTP: async function() {
      await verifyUserOTP(
        this.editError,
        this.setLoader,
        this.password,
        this.token,
        this.setScreenType,
        this.otp
      );
    }
  },
  data: () => {
    return {
      error: null,
      loader: null,
      otp: ""
    };
  },
  components: { GlobalLoader },
  mounted: function() {
    console.log(this.email, this.password, this.retypePassword);
  }
};
</script>

<style scoped lang="scss">
@import "./styles/otpTyper.scss";
</style>