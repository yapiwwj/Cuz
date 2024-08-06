import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type {
  icon_list,
  hot_list,
  tag_list,
  tag,
} from "../../types/publish/index";

export const usePublishStore = defineStore("publishStore", () => {
  /**
   * create
   */
  const iconList = reactive<icon_list>([
    { id: 1, src: "../../../static/images/fire.png", name: "热门模板" },
    { id: 2, src: "../../../static/images/tags.png", name: "标签" },
    { id: 3, src: "../../../static/images/locate.png", name: "定位" },
    { id: 4, src: "../../../static/images/@.png", name: "用户" },
  ]);
  /**
   * mb
   */
  const hotList = reactive<hot_list>([
    {
      id: 1,
      title: "人机交互的学习心得",
      subtitle1: "UI设计案例",
      subtitle2: "#学长学姐建议",
    },
    {
      id: 2,
      title: "高数期末考冲刺",
      subtitle1: "极限、微分、偏导等你来攻破",
      subtitle2: "公式解题，秒了！",
    },
    {
      id: 3,
      title: "大英",
      subtitle1: "速记单词",
      subtitle2: "如何记忆单词？",
    },
  ]);
  /**
   * tags
   */
  const tagList = ref<tag_list>([
    { id: 1, name: "#人机交互" },
    { id: 2, name: "#高数" },
    { id: 3, name: "#大英" },
    { id: 4, name: "#四六级" },
    { id: 5, name: "#python" },
    { id: 6, name: "#线性代数" },
    { id: 7, name: "#概率论" },
    { id: 8, name: "#速成" },
    { id: 9, name: "#编导" },
    { id: 10, name: "#C" },
    { id: 11, name: "#建模" },
    { id: 12, name: "#大物" },
  ]);
  function appendValueInTagList(value: string) {
    const newItem = <tag>{
      id: (tagList.value.length + 1) as number,
      name: `#${value}`,
    };
    tagList.value.push(newItem);
  }

  return {
    iconList,
    hotList,
    tagList,
    appendValueInTagList,
  };
});
