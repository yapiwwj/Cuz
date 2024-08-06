<template>
  <view>
    <text>课表</text>
    <view class="example-body">
      <uni-datetime-picker
        type="date"
        :clear-icon="false"
        v-model="single"
        @maskClick="maskClick"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const single = ref();

const maskClick = (e: any) => {
  console.log("maskClick事件:", e);
};
</script>

<style lang="scss"></style>
