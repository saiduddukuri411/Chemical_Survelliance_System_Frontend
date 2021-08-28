<template>
    <div class = "OTPBackdrop"></div>
    <div class = "OTPCloser" @click="closeOTPScreen">X</div>
    <div class = "OTPContainer">
        <OTPScreens />
    </div>
</template>



<script>

import OTPScreens from "./helperTemplates/screensHolder.vue";

export default {
    name: "OTP Frame",   
    props: [ "closeOTPScreen" ],
    components: { OTPScreens }
    
}
</script>

<style scoped lang="scss">

@import "./style/OTP_Frame.scss";

</style>

