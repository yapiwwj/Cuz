<template>
  <view class="loginBox">
    <view class="img-box">
      <image
        class="img"
        src="../../static/images/login.png"
        mode="scaleToFill"
      />
    </view>
    <view class="title">
      <text class="font">欢迎，小浪花</text>
    </view>
    <view class="subtitle1">
      <text>生活·学习·交友</text>
    </view>
    <view class="subtitle2">
      <text>浙传圈，Cuzer的好帮手</text>
    </view>
    <view class="footer"> </view>
    <view class="circle">
      <view class="logo">
        <image
          src="../../static/images/Next.png"
          mode="scaleToFill"
          @tap="toHome"
        />
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
const toHome = () => {
  uni.switchTab({
    url: "/pages/home/index",
  });
};
</script>

<style lang="scss">
// @import "../../styles/public/font.scss";
@import "../../styles/index/login.scss";
</style>
