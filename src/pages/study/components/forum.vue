<template>
  <scroll-view scroll-y>
    <view class="forumBox">
      <view class="header">
        <text class="title">选择学科 </text>
        <!-- <view class="circle"></view> -->
        <view class="line"></view>
        <view class="icon">
          <view class="iconBox">
            <image :src="iconSrc0" mode="scaleToFill" @tap="changeIcon(0)" />
          </view>

          <view class="iconBox">
            <image :src="iconSrc1" mode="scaleToFill" @tap="changeIcon(1)" />
            <view class="show" v-if="isIconSelect[1] === true">
              <text class="font">升序</text>
              <text class="font">降序</text>
            </view>
          </view>
        </view>
      </view>

      <view class="subjectBox">
        <view class="search">
          <image src="../../../static/images/search.png" mode="scaleToFill" />
          <input v-model="subJect" placeholder="搜索学科..." placeholder-class="input-placeholder" />
        </view>
        <view class="subject" :class="{ active: activeIndex === index }" v-for="(item, index) in subjectList" :key="index"
          @tap="changeIndex(index)">
          <text class="Title" :class="{ activeTitle: activeIndex === index }">{{
            item?.title
          }}</text>
          <text class="subtitle" :class="{ activeSubTitle: activeIndex === index }">{{ item?.subtitle }}</text>
          <text class="confirm" v-if="activeIndex === index" @tap="toForum(item.id)">确定</text>
        </view>
        <!-- <view class="footer">
          <image
            class="img"
            src="../../../static/images/mans_group.png"
            mode="scaleToFill"
          />
        </view> -->
      </view>
      <view class="footer">
        <text>暂无更多</text>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { useStudyStore } from '../../../stores/index'

const studyStore = useStudyStore();
//输入框
const subJect = ref<string>();

//点击效果
const activeIndex = ref<number | string>();
const changeIndex = (index: number) => {
  activeIndex!.value = index;
};

const subjectList = reactive(studyStore.$state.subjectList)

//icon的点击效果
const isIconSelect = ref<boolean[]>([false, false]);
const iconSrc0 = ref<string>("../../../static/images/filter.png");
const iconSrc1 = ref<string>("../../../static/images/sort.png");

const changeIcon = (n: number) => {
  isIconSelect.value[n] = !isIconSelect.value[n];
  if (n === 0 && isIconSelect.value[0] === true) {
    iconSrc0.value = "../../../static/images/filterSelect.png";
  } else {
    iconSrc0.value = "../../../static/images/filter.png";
  }
  if (n === 1 && isIconSelect.value[1] === true) {
    iconSrc1.value = "../../../static/images/sortSelect.png";
  } else {
    iconSrc1.value = "../../../static/images/sort.png";
  }
};

//点击跳转
const toForum = (id: number) => {
  const findData = subjectList.find((item) => item.id === id);
  uni.navigateTo({
    url: `/pages/forum/index?id=${findData?.id}`,
  });
};

</script>

<style lang="scss">
@import "../../../styles/study/forum.scss";
</style>
