<template>
  <view>
    <view class="c-header">
      <input class="title" placeholder="点击添加标题" />
      <view class="tag">
        <text class="left">标签:</text>
        <text class="right">#人机交互 #学习</text>
      </view>
      <view class="locate">
        <text class="left">定位:</text>
        <text class="right"> 学习·人机交互</text>
      </view>
      <view class="aite">
        <text class="left">@:</text>
        <text class="right"></text>
      </view>
      <view class="aite">
        <text class="left">匿名发表：</text>
        <checkbox-group class="radio" >
          <checkbox value="r1" :checked="isChecked" color="#f05cea" />
        </checkbox-group>
        <text class="right"></text>
      </view>
      <view class="upload">
        <uni-file-picker
          v-model="imageValue"
          fileMediatype="image"
          mode="grid"
          @select="select"
        />
      </view>
      <scroll-view scroll-y>
        <textarea
          class="textarea"
          v-model="content"
          :maxlength="-1"
          placeholder="分享此刻想法，或选择模板"
          placeholder-class="textarea-placeholder"
          @input=""
        />
      </scroll-view>
    </view>
    <view class="selectBox">
      <view class="icon-top">
        <view
          class="iconBox"
          v-for="(item, index) in iconList"
          :key="item.id"
          @tap="changeIndex(index)"
        >
          <image
            class="icon"
            :class="{ activeIcon: activeIconIndex === index }"
            :src="item.src"
            mode="scaleToFill"
          />
          <text
            class="iconTitle"
            :class="{ activeIconTitle: activeIconIndex === index }"
            >{{ item.name }}</text
          >
        </view>
      </view>
      <view v-if="activeIconIndex === 0">
        <MB></MB>
      </view>
      <view v-if="activeIconIndex === 1">
        <Tags></Tags>
      </view>
      <view v-if="activeIconIndex === 2">3</view>
      <view v-if="activeIconIndex === 3">4</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import MB from "../components/mb.vue";
import Tags from "../components/tags.vue";
import type { image_value } from "../../../types/publish/index";
import { usePublishStore } from "../../../stores/index";
const publishStore = usePublishStore();
const content = ref<string>();

//处理上传图片
const imageValue = ref<image_value>([]);
const select = (e: any) => {
  console.log("选择文件：", e);
};
const activeIconIndex = ref<number>(0);
const iconList = publishStore.$state.iconList;
const changeIndex = (index: number) => {
  activeIconIndex.value = index;
};

//单选框
const r1 = ref("asd");
const isChecked = ref<boolean>(false);
// const isCheckedFn = (e: any) => {
//   isChecked.value = !isChecked.value;
// };
</script>

<style lang="scss">
@import "../../../styles/publish/create.scss";
</style>
