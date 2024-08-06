import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import type { subject, DatabaseList } from "../../types/study/study";

export const useStudyStore = defineStore("studyStore", {
  state: () => ({
    /**
     * forum
     */
    subjectList: reactive<subject>([
      {
        id: 1,
        title: "人机交互与界面设计",
        subtitle: "Design Of HCI & User Interface",
      },
      {
        id: 2,
        title: "高等数学",
        subtitle: "Advanced Mathematics",
      },
      { id: 3, title: "线性代数", subtitle: "Linear Algebra" },
      {
        id: 4,
        title: "概率论",
        subtitle: "Probability Theory",
      },
      {
        id: 5,
        title: "离散数学",
        subtitle: "Discrete Mathematics",
      },
      {
        id: 6,
        title: "计算机图形学",
        subtitle: "Computer Graphics",
      },
      {
        id: 7,
        title: "数据结构与算法",
        subtitle: "Data Structures And Algorithms",
      },
      {
        id: 8,
        title: "考研",
        subtitle: "Graduate School Entrance Examination",
      },
      {
        id: 9,
        title: "四六级",
        subtitle: "CET-4 & CET-6",
      },
    ]),
    /**
     * database
     */
    classifyList: reactive<DatabaseList>([
      {
        id: 1,
        name: "媒体工程学院",
        major: [
          {
            id: 1,
            name: "数字媒体技术",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "高等数学（上）",
                      },
                      {
                        id: 2,
                        name: "python",
                      },
                      {
                        id: 3,
                        name: "大英",
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "大一（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "高等数学（下）",
                      },
                      {
                        id: 2,
                        name: "线性代数",
                      },
                      {
                        id: 3,
                        name: "大学物理（上）",
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "大二（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "概率论",
                      },
                      {
                        id: 2,
                        name: "大学物理（下）",
                      },
                      {
                        id: 3,
                        name: "三维建模",
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "大二（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "人机交互与界面设计",
                      },
                      {
                        id: 2,
                        name: "java",
                      },
                      {
                        id: 3,
                        name: "计算机图形学",
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "大三（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "专业A",
                      },
                      {
                        id: 2,
                        name: "专业B",
                      },
                      {
                        id: 3,
                        name: "专业C",
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "大三（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "专业A",
                      },
                      {
                        id: 2,
                        name: "专业B",
                      },
                      {
                        id: 3,
                        name: "专业C",
                      },
                    ],
                  },
                ],
              },
              {
                id: 2,
                name: "期末",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "高等数学（上）",
                      },
                      {
                        id: 2,
                        name: "python",
                      },
                      {
                        id: 3,
                        name: "大英",
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "大一（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "高等数学（下）",
                      },
                      {
                        id: 2,
                        name: "线性代数",
                      },
                      {
                        id: 3,
                        name: "大学物理（上）",
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "大二（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "概率论",
                      },
                      {
                        id: 2,
                        name: "大学物理（下）",
                      },
                      {
                        id: 3,
                        name: "三维建模",
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "大二（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "人机交互与界面设计",
                      },
                      {
                        id: 2,
                        name: "java",
                      },
                      {
                        id: 3,
                        name: "计算机图形学",
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "大三（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "专业A",
                      },
                      {
                        id: 2,
                        name: "专业B",
                      },
                      {
                        id: 3,
                        name: "专业C",
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "大三（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "专业A",
                      },
                      {
                        id: 2,
                        name: "专业B",
                      },
                      {
                        id: 3,
                        name: "专业C",
                      },
                    ],
                  },
                ],
              },
              {
                id: 3,
                name: "小测",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "高等数学（上）",
                      },
                      {
                        id: 2,
                        name: "python",
                      },
                      {
                        id: 3,
                        name: "大英",
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "大一（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "高等数学（下）",
                      },
                      {
                        id: 2,
                        name: "线性代数",
                      },
                      {
                        id: 3,
                        name: "大学物理（上）",
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "大二（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "概率论",
                      },
                      {
                        id: 2,
                        name: "大学物理（下）",
                      },
                      {
                        id: 3,
                        name: "三维建模",
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "大二（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "人机交互与界面设计",
                      },
                      {
                        id: 2,
                        name: "java",
                      },
                      {
                        id: 3,
                        name: "计算机图形学",
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "大三（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "专业A",
                      },
                      {
                        id: 2,
                        name: "专业B",
                      },
                      {
                        id: 3,
                        name: "专业C",
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: "大三（下）",
                    subjects: [
                      {
                        id: 1,
                        name: "专业A",
                      },
                      {
                        id: 2,
                        name: "专业B",
                      },
                      {
                        id: 3,
                        name: "专业C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "软件工程(传媒大数据)",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "java",
                      },
                      {
                        id: 2,
                        name: "数据结构",
                      },
                      {
                        id: 3,
                        name: "JAVA EE软件架构",
                      },
                      {
                        id: 4,
                        name: "数据库原理与应用",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "网络工程",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "TCP/IP内核分析及应用",
                      },
                      {
                        id: 2,
                        name: "IPv6技术",
                      },
                      {
                        id: 3,
                        name: "通信原理",
                      },
                      {
                        id: 4,
                        name: "Linux网络环境",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "播音主持艺术学院",
        major: [
          {
            id: 1,
            name: "播音与主持艺术",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "播音与主持艺术A",
                      },
                      {
                        id: 2,
                        name: "播音与主持艺术B",
                      },
                      {
                        id: 3,
                        name: "播音与主持艺术C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "礼仪文化方向",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "礼仪文化方向A",
                      },
                      {
                        id: 2,
                        name: "礼仪文化方向B",
                      },
                      {
                        id: 3,
                        name: "礼仪文化方向C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "影视配音方向",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "影视配音方向A",
                      },
                      {
                        id: 2,
                        name: "影视配音方向B",
                      },
                      {
                        id: 3,
                        name: "影视配音方向C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "电视艺术学院",
        major: [
          {
            id: 1,
            name: "文艺编导",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "广播电视编导A",
                      },
                      {
                        id: 2,
                        name: "广播电视编导B",
                      },
                      {
                        id: 3,
                        name: "广播电视编导C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "电视节目制作",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "电视节目制作A",
                      },
                      {
                        id: 2,
                        name: "电视节目制作B",
                      },
                      {
                        id: 3,
                        name: "电视节目制作C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "影视摄影",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "影视摄影A",
                      },
                      {
                        id: 2,
                        name: "影视摄影B",
                      },
                      {
                        id: 3,
                        name: "影视摄影C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "动画与数字艺术学院",
        major: [
          {
            id: 1,
            name: "动画专业",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "动画视听语言",
                      },
                      {
                        id: 2,
                        name: "动画运动规律",
                      },
                      {
                        id: 3,
                        name: "FLASH动画",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "漫插画方向",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "形式构成语言",
                      },
                      {
                        id: 2,
                        name: "漫画背景设计",
                      },
                      {
                        id: 3,
                        name: "漫画角色造型",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "数字媒体艺术",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "艺术概论",
                      },
                      {
                        id: 2,
                        name: "视听语言",
                      },
                      {
                        id: 3,
                        name: "电影数字中间片（DI）",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "国际文化传播学院",
        major: [
          {
            id: 1,
            name: "双语播音",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "双语播音A",
                      },
                      {
                        id: 2,
                        name: "双语播音B",
                      },
                      {
                        id: 3,
                        name: "双语播音C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "英语",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "英语A",
                      },
                      {
                        id: 2,
                        name: "英语B",
                      },
                      {
                        id: 3,
                        name: "英语C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "华策电影学院",
        major: [
          {
            id: 1,
            name: "表演",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "表演",
                      },
                      {
                        id: 2,
                        name: "台词",
                      },
                      {
                        id: 3,
                        name: "形体",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "导演",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "视听语言",
                      },
                      {
                        id: 2,
                        name: "电影作品分析",
                      },
                      {
                        id: 3,
                        name: "中外电影史",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "影视摄影与制作",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "电影导演基础",
                      },
                      {
                        id: 2,
                        name: "电影摄影",
                      },
                      {
                        id: 3,
                        name: "电影特效",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 7,
        name: "设计艺术学院",
        major: [
          {
            id: 1,
            name: "艺术设计",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "艺术设计A",
                      },
                      {
                        id: 2,
                        name: "艺术设计B",
                      },
                      {
                        id: 3,
                        name: "艺术设计C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "戏剧影视美术设计",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "戏剧影视美术设计A",
                      },
                      {
                        id: 2,
                        name: "戏剧影视美术设计B",
                      },
                      {
                        id: 3,
                        name: "戏剧影视美术设计C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "视觉传达设计",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "视觉传达设计A",
                      },
                      {
                        id: 2,
                        name: "视觉传达设计B",
                      },
                      {
                        id: 3,
                        name: "视觉传达设计C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "文化创意与管理学院",
        major: [
          {
            id: 1,
            name: "媒体创意方向",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "媒体创意导论",
                      },
                      {
                        id: 2,
                        name: "创造性思维",
                      },
                      {
                        id: 3,
                        name: "电视栏目创意与策划",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "广告学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "品牌研究",
                      },
                      {
                        id: 2,
                        name: "整合营销传播",
                      },
                      {
                        id: 3,
                        name: "广告市场调查与统计",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "公共关系学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "电影导演基础",
                      },
                      {
                        id: 2,
                        name: "电影摄影",
                      },
                      {
                        id: 3,
                        name: "电影特效",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "文学院",
        major: [
          {
            id: 1,
            name: "汉语言文学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "汉语言文学A",
                      },
                      {
                        id: 2,
                        name: "汉语言文学B",
                      },
                      {
                        id: 3,
                        name: "汉语言文学C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "戏剧影视文学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "戏剧影视文学A",
                      },
                      {
                        id: 2,
                        name: "戏剧影视文学B",
                      },
                      {
                        id: 3,
                        name: "戏剧影视文学C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "汉语国际教育",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "汉语国际教育A",
                      },
                      {
                        id: 2,
                        name: "汉语国际教育B",
                      },
                      {
                        id: 3,
                        name: "汉语国际教育C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "新闻传播学院",
        major: [
          {
            id: 1,
            name: "广播电视学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "广播电视学A",
                      },
                      {
                        id: 2,
                        name: "广播电视学B",
                      },
                      {
                        id: 3,
                        name: "广播电视学C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "新闻学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "新闻学A",
                      },
                      {
                        id: 2,
                        name: "新闻学B",
                      },
                      {
                        id: 3,
                        name: "新闻学C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "传播学",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "传播学A",
                      },
                      {
                        id: 2,
                        name: "传播学B",
                      },
                      {
                        id: 3,
                        name: "传播学C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 11,
        name: "音乐学院",
        major: [
          {
            id: 1,
            name: "音乐表演",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "音乐表演A",
                      },
                      {
                        id: 2,
                        name: "音乐表演B",
                      },
                      {
                        id: 3,
                        name: "音乐表演C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "舞蹈编导",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "舞蹈编导A",
                      },
                      {
                        id: 2,
                        name: "舞蹈编导B",
                      },
                      {
                        id: 3,
                        name: "舞蹈编导C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "艺术与科技",
            times: [
              {
                id: 1,
                name: "期中",
                grades: [
                  {
                    id: 1,
                    name: "大一（上）",
                    subjects: [
                      {
                        id: 1,
                        name: "艺术与科技A",
                      },
                      {
                        id: 2,
                        name: "艺术与科技B",
                      },
                      {
                        id: 3,
                        name: "艺术与科技C",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]),
  }),
});
