<template>
  <view class="tagsBox">
    <view class="tagTitle">
      <text>常用标签</text>
    </view>
    <view class="scrollBox2">
      <view class="infoBox">
        <view class="info" :class="{ activeTag: index === activeIndex }" v-for="(item, index) in tagList" :key="item.id"
          @tap="changeIndex(index)">
          <text>{{ item.name }}</text>
        </view>
      </view>
      <view class="zdyButton" @tap="openPoup"><text>自定义标签</text> </view>
    </view>
    <view class="buttonBox" v-if="isButtonShow">
      <text class="button">发表</text>
    </view>

    <uni-popup ref="popupRef" type="center" :border-radius="'10px 10px 0 0'">
      <uni-popup-dialog mode="input" title="标签" value="请输入" :duration="2000" :before-close="true" @close="close"
        @confirm="confirm"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { usePublishStore } from "../../../stores/index";

const publishStore = usePublishStore();
const { tagList } = storeToRefs(publishStore);

//change tags &active
const activeIndex = ref<number>();
const changeIndex = (index: number) => {
  activeIndex.value = index;
  showButton();
};

//show publish-button
const isButtonShow = ref<boolean>(false);
const showButton = () => {
  isButtonShow.value = true;
};

//pop
const popupRef = ref();
const openPoup = () => {
  popupRef.value.open();
};
const confirm: UniHelper.UniPopupDialogOnConfirm = (value: any) => {
  publishStore.appendValueInTagList(value);
  popupRef.value.close();
};

const close: UniHelper.UniPopupDialogOnClose = () => {
  popupRef.value.close();
};
</script>

<style lang="scss">
@import "../../../styles/publish/tags.scss";
</style>
