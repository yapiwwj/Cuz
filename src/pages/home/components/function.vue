<template>
  <view class="functionBox">
    <view class="left">
      <view class="schoolActivity">
        <view class="info">
          <image class="infoImg" src="../../../static/images/schoolActivity.png" mode="scaleToFill" />
          <text class="infoTitle">校园活动</text>
        </view>
        <view class="subTitleBox">
          <text class="subtitle">浙传又双叒叕有活动啦</text>
        </view>
        <image class="arrow" src="../../../static/images/arrow.png" mode="scaleToFill" />
      </view>
      <view class="cat">
        <view class="info">
          <image class="infoImg" src="../../../static/images/cat.png" mode="scaleToFill" />
          <!-- <text class="infoTitle">咪咪协会</text> -->
        </view>
        <view class="subTitleBox">
          <text class="subtitle">咪咪协会</text>
          <text class="sub2"> “凡我弟子，喵喵喵喵”</text>
        </view>
        <image class="arrow" src="../../../static/images/arrow.png" mode="scaleToFill" />
      </view>
      <view class="dz">
        <view class="info">
          <image class="infoImg" src="../../../static/images/dz.png" mode="scaleToFill" />
          <text class="infoTitle">寻找搭子</text>
          <text class="subtitle">美食、电影、游玩</text>
        </view>
        <image class="arrow" src="../../../static/images/arrow.png" mode="scaleToFill" />
      </view>
    </view>
    <view class="right">
      <view class="zycy">
        <view class="info">
          <image class="infoImg" src="../../../static/images/zy.png" mode="scaleToFill" />
          <text class="infoTitle">志愿参与</text>
          <text class="subtitle">找不到志愿？宝子快来！</text>
        </view>
        <image class="arrow" src="../../../static/images/arrow.png" mode="scaleToFill" />
      </view>
      <view class="often" @tap="openPoup">
        <swiper class="swiper" circular :indicator-dots="true" :duration="500">
          <swiper-item>
            <view class="fnBox" style="display: flex; flex-wrap: wrap">
              <view class="fn" v-for="(item, index) in moreList" :key="item.id" style="padding: 5px">
                <image :src="item.img" mode="scaleToFill" style="width: 40px; height: 40px" />
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view>B</view>
          </swiper-item>
        </swiper>

        <text class="more">更多功能</text>
      </view>
      <view class="footerImg">
        <image src="../../../static/images/leave.png" mode="scaleToFill" />
      </view>
      <!-- <view class="xyq">
        <view class="info">
          <image
            class="infoImg"
            src="../../../static/images/xyq.png"
            mode="scaleToFill"
          />
          <text class="infoTitle">咪咪协会</text>
          <text class="subtitle">喵喵教聚集地</text>
        </view>
        <image
          class="arrow1"
          src="../../../static/images/arrow.png"
          mode="scaleToFill"
        />
      </view> -->
    </view>
    <view class="popBox">
      <uni-popup ref="popup" type="center" border-radius="10px 10px 0 0" style="display: flex; justify-content: center">
        <!-- <text class="title">更多功能</text> -->
        <swiper class="swiper" circular :indicator-dots="true" :duration="500">
          <swiper-item>
            <view class="popFnBox" style="display: flex; flex-wrap: wrap; justify-content: center">
              <view class="fn" v-for="(item, index) in moreList" :key="index" style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  padding: 5px;
                " @tap="toFn(item.id)">
                <image :src="item.img" mode="scaleToFill" style="width: 60px; height: 60px" />
                <text>{{ item.title }}</text>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item uni-bg-green">B</view>
          </swiper-item>
        </swiper>
      </uni-popup>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useHomeStore } from "../../../stores/index";
import { storeToRefs } from "pinia";
const homeStore = useHomeStore();
const { moreList } = storeToRefs(homeStore);
//弹出层
const popup = ref();
const openPoup = () => {
  popup.value.open();
};

//跳转
const toFn = (id: number) => {
  uni.navigateTo({
    url: "/pages/home/fn/map",
  });
};
</script>

<style lang="scss">
@import "../../../styles/home/function.scss";
</style>
