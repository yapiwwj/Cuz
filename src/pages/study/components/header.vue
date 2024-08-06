<template>
  <view class="headerBox">
    <view class="left" @tap="toTimeTable">
      <text class="date" :style="{ opacity: opacity }">June,11th</text>
      <text class="week" :style="{ opacity: opacity }">第十五周</text>
    </view>
    <view class="right">
      <image
        class="avatar"
        src="../../../static/images/avatar.png"
        mode="scaleToFill"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { onUnmounted } from "vue";
import { ref } from "vue";
import { onMounted } from "vue";

//opacity变化
const opacity = ref(1);
let timer: number;
onMounted(() => {
  timer = setInterval(() => {
    opacity.value = opacity.value === 1 ? 0 : 1;
  }, 2000);
});
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});

//去课表
const toTimeTable=()=>{
  uni.navigateTo({
    url:'/components/timetable',
  })
}
</script>

<style lang="scss">
@import "../../../styles/study/header.scss";
</style>
