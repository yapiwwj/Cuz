<template>
  <view class="hotNewBox">
    <view class="header">
      <text class="title">校园热帖</text>
      <image src="../../../static/images/confeti_3_color.png" mode="scaleToFill" />
    </view>
    <view class="postsBox" v-for="(item, index) in postLists" :key="item.id">
      <image class="img" :src="item.img" mode="scaleToFill" />
      <view class="info">
        <view class="titleBox">
          <text class="title">{{ item.title }}</text>
          <text class="subtitle">{{ item.subtitle }}</text>
        </view>
        <view class="bottomBox">
          <view class="infoBox">
            <image src="../../../static/images/eyes.png" mode="scaleToFill" />
            <text>{{ item.viewCount }}</text>
          </view>
          <view class="infoBox">
            <image src="../../../static/images/comments.png" mode="scaleToFill" />
            <text>{{ item.commentsCount }}</text>
          </view>
          <view class="infoBox" @tap="likes(index)">
            <image :src="item.isLike ? likesSelectIcon : likesIcon
              " mode="scaleToFill" />
            <text :class="{ activeText: item.isLike }">{{
              item.likeCount
            }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="footer">
      <text>暂无更多</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { post_list } from "../../../types/home/index";
import { useHomeStore } from "../../../stores/index";
const homeStore = useHomeStore();
const postLists = reactive<post_list>(homeStore.$state.postLists);

//likes
const likesIcon = ref<string>("../../../static/images/likes.png");
const likesSelectIcon = ref<string>("../../../static/images/likesSelect.png");
const likes = (index: number) => {
  postLists[index].isLike = !postLists[index].isLike;
};
</script>

<style lang="scss">
@import "../../../styles/home/hotnews.scss";
</style>
