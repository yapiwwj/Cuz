<template>  
  <view> {{ subject?.title }}论坛 </view> 
</template>  
  
<script setup lang="ts">  
import { onLoad } from "@dcloudio/uni-app";  
import { ref } from "vue";  
import { useStudyStore } from "../../stores/index";  
  
const studyStore = useStudyStore(); 

//显示querry内容
const subjectId = ref<number>(0);   
let subject = ref();  
  
onLoad((e) => {  
  subjectId.value =  parseInt(e?.id) 
  subject.value = studyStore.$state.subjectList.find((item) => item.id === subjectId.value);  
});  
</script>  
  
<style lang="scss"></style>