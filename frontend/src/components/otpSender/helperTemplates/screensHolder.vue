<template>
  <SuccessShower v-if="screenType==='SUCCESS'" />
  <ResetPassword
    v-else-if="screenType==='RESET'"
    :email="email"
    :emailSetter="resetEmail"
    :password="password"
    :passwordSetter="resetPassword"
    :retypePassword="retypePassword"
    :retypePasswordSetter="resetRetypePassword"
    :setScreenType="setScreenType"
    :resetToken="resetToken"
  />
  <OTPTyper
    v-else
    :email="email"
    :setScreenType="setScreenType"
    :password="password"
    :retypePassword="retypePassword"
    :resetToken="resetToken"
    :token="token"
  />
</template>


<script>
import ResetPassword from "./resetPassword.vue";
import OTPTyper from "./otpTyper.vue";
import SuccessShower from "./successShower.vue";

export default {
  name: "OTPScreensHolder",

  data: () => ({
    email: "",
    password: "",
    retypePassword: "",
    token: "",
    screenType: "RESET"
  }),

  methods: {
    resetEmail: function(emailInputEvent) {
      this.email = emailInputEvent.target.value;
    },
    resetPassword: function(passwordInputEvent) {
      this.password = passwordInputEvent.target.value;
    },
    resetRetypePassword: function(retypePasswordEvent) {
      this.retypePassword = retypePasswordEvent.target.value;
    },
    setScreenType: function(type) {
      this.screenType = type;
    },
    resetToken: function(token) {
      this.token = token;
    }
  },

  components: { SuccessShower, ResetPassword, OTPTyper }
};
</script>