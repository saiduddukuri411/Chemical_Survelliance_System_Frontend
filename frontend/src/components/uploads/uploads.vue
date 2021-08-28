<template>
  <div class="UploadContainer">
    <input
      type="file"
      class="FileInput"
      ref="filePicker"
      accept=".csv"
      @change="( event ) => fileUploaderChange( event ) "
    />
    <div class="CustomPicker" @click="()=>fileSelector()">{{fileString}}</div>
    <div class="SelectorContainer">
      <div
        :class="checkType === 'patient' ? 'CheckBox Active':'CheckBox'"
        @click="() => switchClass('patient')"
      ></div>
      <div class="CheckBoxText">Patients Data</div>
      <div
        :class="checkType === 'sample' ? 'CheckBox Active':'CheckBox'"
        @click="() => switchClass('sample')"
      ></div>
      <div class="CheckBoxText">Samples Data</div>
    </div>
    <div class="UploadBtn" @click="() => dataUploader()">Upload Records</div>
    <div></div>
    <div v-if="errorMessage" class="UploadError">{{errorMessage}}</div>
    <GlobalLoder v-if="loader" />
  </div>
</template>


<script>
import DataUploader from "./helper";

import GlobalLoder from "../globalLoader/loader.vue";

export default {
  name: "Uploads",
  data: () => {
    return {
      fileString: "Please Choose .CSV File",
      checkType: "Not Selected",
      errorMessage: "",
      fileObject:'',
      loader: false
    };
  },
  methods: {
    setInitials: function(){
        
        this.checkType = "Not Selected"
        this.fileString = "Please Choose .CSV File"
        this.fileObject = ''
    },
    switchClass: function(type) {
      this.checkType = type;
    },
    fileSelector: function() {
      this.$refs.filePicker.click();
    },
    fileUploaderChange: function(eventHandler) {
      let file = eventHandler.target.files[0];
      //console.log(eventHandler.target.files[0]);
      this.fileString = `You choose ${file.name}`;
      this.fileObject = file
    },
    triggerError: function(message) {
      this.errorMessage = message;
    },
    switchLoader: function(){
       this.loader = !this.loader
    },
    dataUploader: async function() {
      let data = {
        triggerError: this.triggerError,
        checkType: this.checkType,
        fileString: this.fileString,
        fileObject: this.fileObject,
        setLoader: this.switchLoader,
        setInitials: this.setInitials,
        updateSample: this.updateSamples,
        updatePatients: this.updatePatients
      };

      DataUploader( data )
    },
    updateSamples : async function( records ){
      this.$store.commit("UPDATE_SAMPLES", records);
    },
    updatePatients: async function( records ){
      this.$store.commit("UPDATE_PATIENTS", records )
    }
  },
  components: { GlobalLoder }
};
</script>


<style scoped lang="scss">
@import "./style/uploads.scss";
</style>