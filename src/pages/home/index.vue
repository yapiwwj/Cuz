<template>
  <view>
    <Header></Header>
    <scroll-view scroll-y :scroll-with-animation="true">
      <Function></Function>
      <HotNews></HotNews>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup>
import Header from "./components/header.vue";
import Function from "./components/function.vue";
import HotNews from "./components/hotNews.vue";
</script>

<style lang="scss">
page {
  background-color: #f8f8f8;
}
</style>
