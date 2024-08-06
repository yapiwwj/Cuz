<template>
  <view class="scrollBox">
    <scroll-view scroll-x style="white-space: nowrap">
      <view class="infoBox" v-for="(item, index) in hotList" :key="item.id">
        <view class="top">
          <view class="circle"></view>
          <text class="top-title">{{ item.title }}</text>
        </view>
        <view class="subtitle">{{ item.subtitle1 }}</view>
        <view class="subtitle">{{ item.subtitle2 }}</view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { usePublishStore } from "../../../stores/index";
const publishStore = usePublishStore();

const hotList = publishStore.$state.hotList;
</script>

<style lang="scss">
@import "../../../styles/publish/mb.scss";
</style>
