/**
 * index
 */
export type is_active = boolean;
export type active_index = number;
export type translate_X = number;

interface title {
  id: number;
  name: string;
}
export type Title = title[];

/**
 * create
 */
export type image_value = string[];
export type icon_list = { id: number; src: string; name: string }[];

/**
 * mb
 */
export type hot_list = {
  id: number;
  title: string;
  subtitle1: string;
  subtitle2: string;
}[];

/**
 * tags
 */
interface tag {
  id: number;
  name: string;
}
export type tag_list = tag[];
