<template>
  <view>
    <view class="button" @click="toPublish">
      <text>发表</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const toPublish = () => {
  wx.switchTab({
    url: "/pages/publish/index",
  });
};
</script>

<style lang="scss" scoped>
@import "../../styles/schoolQ/index.scss";
</style>
