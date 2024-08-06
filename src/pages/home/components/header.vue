<template>
  <view class="header">
    <view class="topBox">
      <image
        class="logo"
        src="../../../static/images/logo.png"
        mode="scaleToFill"
      />
      <!-- <text class="title">Welcome,&nbsp;</text> -->
      <text class="schoolname">浙传圈</text>
    </view>
    <view class="inputBox">
      <image
        class="icon"
        src="../../../static/images/search.png"
        mode="scaleToFill"
      />
      <input
        class="search"
        type="text"
        placeholder="Tips：临近期末，好好复习哦"
      />
      <image
        class="girl"
        src="../../../static/images/girl.png"
        mode="scaleToFill"
      />
    </view>
    <!-- <swiper class="swiper" circular :indicator-dots="true" :duration="500">
      <swiper-item>
        <view class="swiper-item"> A </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">C</view>
      </swiper-item>
    </swiper> -->
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import "../../../styles/home/header.scss";
</style>
