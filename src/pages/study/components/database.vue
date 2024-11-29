<template>
  <scroll-view scroll-y>
    <view class="dataBox">
      <view class="header">
        <text class="title">分类</text>
        <view class="line"></view>
      </view>
      <view class="classify">
        <!-- college -->
        <view class="college">
          <view class="left">
            <text>学院选择</text>
          </view>
          <scroll-view scroll-x style="white-space: nowrap; z-index: 10">
            <view class="right">
              <text class="button" :class="{ active: index1 === activeCollege }" v-for="(item, index1) in classifyList"
                :key="item.id" @tap="changeCollege(index1)">{{ item.name }}
              </text>
            </view>
          </scroll-view>
        </view>
        <!-- major -->
        <view class="college" v-if="isShowMajor">
          <view class="left">
            <text>专业选择</text>
          </view>
          <scroll-view scroll-x style="white-space: nowrap">
            <view class="right">
              <text class="button" :class="{ active2: index2 === activeMajor }"
                v-for="(item, index2) in (classifyList[activeCollege as number].major)" :key="item.id"
                @tap="changeMajor(index2)">{{ item.name }}
              </text>
            </view>
          </scroll-view>
        </view>
        <!-- TIME -->
        <view class="college" v-if="isShowTime">
          <view class="left">
            <text>时间</text>
          </view>
          <scroll-view scroll-x style="white-space: nowrap">
            <view class="right">
              <text class="button" :class="{ active3: index3 === activeTime }" v-for="(item, index3) in  
                (classifyList[activeCollege as number]
                  .major[activeMajor as number].times)" :key="item.id" @tap="changeTime(index3)">{{ item.name }}
              </text>
            </view>
          </scroll-view>
        </view>
        <!-- grade -->
        <view class="college" v-if="isShowGrade">
          <view class="left">
            <text>年级</text>
          </view>
          <scroll-view scroll-x style="white-space: nowrap">
            <view class="right">
              <text class="button" :class="{ active4: index4 === activeGrade }" v-for="(item, index4) in 
                (classifyList[activeCollege as number]
                  .major[activeMajor as number]
                  .times[activeTime as number].grades)" :key="item.id" @tap="changeGrade(index4)">{{ item.name }}
              </text>
            </view>
          </scroll-view>
        </view>
        <!-- subject -->
        <view class="college" v-if="isShowSubject">
          <view class="left">
            <text>学科</text>
          </view>
          <scroll-view scroll-x style="white-space: nowrap">
            <view class="right">
              <text class="button" :class="{ active5: index5 === activeSubject }" v-for="(item, index5) in 
                (classifyList[activeCollege as number]
                  .major[activeMajor as number]
                  .times[activeTime as number]
                  .grades[activeGrade as number].subjects)" :key="item.id" @tap="changeSubject(index5)">{{ item.name }}
              </text>
            </view>
          </scroll-view>
        </view>
        <!-- button -->
        <view class="button" v-if="isButtonShow" @tap="toDatabase">
          <text>确认</text>
        </view>
      </view>
    </view>
    <!-- <view class="footer">
      <image
        class="img"
        src="../../../static/images/man_1.png"
        mode="scaleToFill"
      />
    </view> -->
  </scroll-view>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useStudyStore } from "../../../stores/index";

const studyStore = useStudyStore();
const classifyList = reactive(studyStore.classifyList);

//控制college
const activeCollege = ref<number | string>();
const changeCollege = (index1: number) => {
  activeCollege.value = index1;
  isShowMajor.value = true;
};
//控制major
const isShowMajor = ref<boolean>(false);
const activeMajor = ref<number | string>();
const majorList = reactive<any>([]);
const changeMajor = (index2: number) => {
  activeMajor.value = index2;
  isShowTime.value = true;
};

//控制time
const isShowTime = ref<boolean>(false);
const activeTime = ref<number | string>();
const changeTime = (index3: number) => {
  activeTime.value = index3;
  isShowGrade.value = true;
};

//控制grade
const isShowGrade = ref<boolean>(false);
const activeGrade = ref<number | string>();
const changeGrade = (index4: number) => {
  activeGrade.value = index4;
  isShowSubject.value = true;
};

//控制subject
const isShowSubject = ref<boolean>(false);
const activeSubject = ref<number | string>();
const changeSubject = (index5: number) => {
  activeSubject.value = index5;
  isButtonShow.value = true;
};

//控制button
const isButtonShow = ref<boolean>(false);
const toDatabase = () => {
  uni.navigateTo({
    url: "/pages/database/index",
  });
};
</script>

<style lang="scss">
@import "../../../styles/study/database.scss";
</style>
