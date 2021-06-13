<template>
    <div class="globalCardContainer">
        <div :class="[ 'circularNob',isClassActive ? 'darkCircle' : '']"></div>
        <p class="CardContent">{{ item.sampleNumber || `Sample ${item.cartridge}`}}</p>
    </div>
</template>

<script>
export default {
    name: "GlobalCard",
    props: ["item","activeIndex"],
    computed:{
        isClassActive(){
           return this.activeIndex === this.item.createdIndex
        }
    }
}
</script>

<style lang="scss" scoped>
 @import "./style/globalCard.scss";
</style>

