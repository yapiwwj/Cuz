<template>
  <view>
    <view class="header">
      <view class="title" :class="{ activeTitle: activeIndex === index }" v-for="(item, index) in titleList"
        :key="item.id" @tap="changeIndex(index)">{{ item.name }}
      </view>
    </view>
    <view> </view>
    <view class="contain">
      <view v-if="activeIndex === 0">
        <Create></Create>
      </view>
      <view v-if="activeIndex === 1">
        <Question></Question>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import Create from "./components/create.vue";
import Question from "./components/question.vue";
import type {
  Title,
  is_active,
  active_index,
  translate_X,
} from "../../types/publish/index";

//索引change
const isActive = ref<is_active>(false);
const activeIndex = ref<active_index>(0);
const translateX = ref<translate_X>(0);

const titleList = ref<Title>([
  { id: 1, name: "创作" },
  { id: 2, name: "提问" },
]);
const changeIndex = (index: number) => {
  activeIndex.value = index;
};
</script>

<style lang="scss">
@import "../../styles/publish/index.scss";
</style>
