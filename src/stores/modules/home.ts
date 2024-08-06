import { defineStore } from "pinia";
import { reactive } from "vue";
import type {
  post_list,
  icon_list,
  more_list,
  more,
} from "../../types/home/index";
import img1 from "../../static/images/post1.png";
import img2 from "../../static/images/post2.png";
import img3 from "../../static/images/post3.png";
import img4 from "../../static/images/math.png";
import moreIcon from "../../static/images/cake.png";

export const useHomeStore = defineStore("homeStore", () => {
  /**
   * hotNews
   */
  const postLists = reactive<post_list>([
    {
      id: 1,
      img: img1,
      title: "寻我·与时代共鸣",
      subtitle: "选手名单抢先看！",
      time: "2024-02-32-11:22",
      viewCount: "1.2w",
      commentsCount: "2.5k",
      likeCount: "1.0w",
      isLike: false,
    },
    {
      id: 2,
      img: img2,
      title: "热辣小火锅暖胃又暖心",
      subtitle: "秋风渐起天渐凉，热腾腾的小火锅上线咯！",
      time: "2024-01-30-11:22",
      viewCount: "1.0w",
      commentsCount: "2.0k",
      likeCount: "9.0k",
      isLike: false,
    },
    {
      id: 3,
      img: img3,
      title: "诗颂新时代，勇当先行者",
      subtitle: "青春诗会，等你报名！",
      time: "2024-04-22-18:22",
      viewCount: "1.0w",
      commentsCount: "2.3k",
      likeCount: "8.5k",
      isLike: false,
    },
    {
      id: 4,
      img: img4,
      title: "蹲一个线代大佬，这几步是为啥啊？",
      subtitle: "研究半天都没研究明白...",
      time: "2024-02-32-11:22",
      viewCount: "0.9w",
      commentsCount: "2.3k",
      likeCount: "8.4k",
      isLike: false,
    },
    {
      id: 5,
      img: img2,
      title: "热辣小火锅暖胃又暖心",
      subtitle: "秋风渐起天渐凉，热腾腾的小火锅上线咯！",
      time: "2024-01-30-11:22",
      viewCount: "0.5w",
      commentsCount: "2.1k",
      likeCount: "8.1k",
      isLike: false,
    },
    {
      id: 6,
      img: img3,
      title: "诗颂新时代，勇当先行者",
      subtitle: "青春诗会，等你报名！",
      time: "2024-04-22-18:22",
      viewCount: "0.4w",
      commentsCount: "2.1k",
      likeCount: "8.0k",
      isLike: false,
    },
  ]);
  /**
   * function
   */
  const moreList = reactive<more_list>([
    {
      id: 1,
      title: "周边美食",
      img: moreIcon,
    },
    {
      id: 2,
      title: "周边美食",
      img: moreIcon,
    },
    {
      id: 3,
      title: "周边美食",
      img: moreIcon,
    },
    {
      id: 4,
      title: "周边美食",
      img: moreIcon,
    },
    {
      id: 5,
      title: "周边美食",
      img: moreIcon,
    },
    {
      id: 6,
      title: "周边美食",
      img: moreIcon,
    },
  ]);

  return {
    postLists,
    moreList
  };
});
