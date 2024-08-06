<template>
  <view class="study">
    <view class="">
      <Header></Header>
    </view>
    <view class="body">
      <view class="asideBox">
        <view
          class="aside"
          :class="{ active1: id === choseIndex }"
          v-for="(item, id) in asideTitles"
          :key="item.id"
          @tap="changeIndex(id)"
        >
          <view
            class="sideTitle"
            v-for="(title, index) in item.title"
            :key="index"
          >
            <text class="title" :class="{ active2: id === choseIndex }">{{
              title
            }}</text>
          </view>
        </view>
      </view>
      <view class="content">
        <Forum v-if="choseIndex === 0"></Forum>
        <Database v-if="choseIndex === 1"></Database>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Header from "./components/header.vue";
import Forum from "./components/forum.vue";
import Database from "./components/database.vue";
import type { aside_title} from "../../types/study/study";
import { reactive } from "vue";
import { ref } from "vue";

//文字
const asideTitles = reactive<aside_title>([
  {
    id: 1,
    title: ["学", "习", "论", "坛"],
  },
  {
    id: 2,
    title: ["考", "试", "题", "库"],
  },
]);

//是否选中
let choseIndex = ref<number>(0);
const changeIndex = (index: number) => {
  choseIndex.value = index;
};

</script>

<style lang="scss">
@import "../../styles/study/index.scss";
</style>
