<template>
  <div class="Container">
    <div class="CardContainer">
      <p class="Desc">{{ `Select  ${title} Below` }}</p>
      <div class="CardGrid" v-if="getData() != null">
        <GlobalCard
          v-for="(item, index) in getData().data"
          :key="index + 1"
          :item="{ ...item, createdIndex: index }"
          :activeIndex="activeCardIndex"
          @click="changeCardIndex({ ...item, createdIndex: index })"
        />
      </div>
    </div>
    <div class="CardContentContainer">
      <div class="CardContent">
        <p v-if="cardData === null" class = "InActiveCard">Please Select Sample</p>
        <div v-else class="dataHolder">
          <p class="ContentCardTitle">{{ title }}</p>
          <p v-for="(item, index) in getConfinedData()"  :key="index" >
              {{`${item.name}: ${cardData[ item.key ]} `}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalCard from "../globalCard/globalCard.vue";

export default {
  name: "SharedUi",
  props: ["title", "getData", "value"],
  components: {
    GlobalCard
  },
  data() {
    return {
      data: this.getData,
      cardData: null,
      activeCardIndex: null,
      reqShownData: [
        { key: "cartridge", name: "Cartridge" },
        { key: "date", name: "Date" },
        { key: "gender", name: "Gender" },
        { key: "age", name: "Age" },
        { key: "hospitalZip", name: "Hospital Zip" },
        { key: "homeZip", name: "Home Zip" },
        { key: "suspectedAgent", name: "Suspected Agent" },
        { key: "effects", name: "Effects" },
        { key: "secondaryEffect", name: "Secondary Effects" },
        { key: "hasNarcan", name: "Has Narcane" },
        { key: "numberOfDoses", name: "Number Of Doses" },
        { key: "hasResponse", name: "Has Response" },
        { key: "hasDrip", name: "Has Drip" },
        { key: "otherTherapies", name: "Other Therapies" },
        { key: "sampleNumber", name: "Sample Number" },
        { key: "drugDetected", name: "Drug Detected" },
        { key: "concentration", name: "Concentration" },
        { key: "drugClassificationLevel1", name: "Drug Classification Level1" },
        { key: "drugClassificationLevel2", name: "Drug Classification Level2" },
        { key: "tags", name: "Tags" }
      ]
    };
  },
  methods: {
    changeCardIndex(item) {
      this.activeCardIndex = item.createdIndex;
      this.cardData = item;
    },
    getConfinedData(){
      return this.reqShownData.filter( data => data.key in this.cardData)
    }
  }
};
</script>

<style scoped lang="scss">
@import "./styles/sharedUi.scss";
</style>