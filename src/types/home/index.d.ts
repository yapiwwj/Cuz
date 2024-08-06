/**
 * funvtion
 */
interface more {
  id:number,
  title?: string;
  img: string;
}
export type more_list = more[];
/**
 * hotNews
 */
export type post_list = {
  id: number;
  img: string;
  title: string;
  subtitle?: string;
  time: string;
  viewCount: string;
  commentsCount: string;
  likeCount: string;
  isLike: boolean;
}[];

export type icon_list = {
  id: number;
  img: string;
}[];
