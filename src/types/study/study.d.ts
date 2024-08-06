/**
 * index
 */
export type aside_title = { id: number; title: string[] }[];
/**
 * forum
 */
export type subject = { id: number; title: string; subtitle: string }[];

/**
 * database
 */
// export type college = { id: number; title: string }[];
// export type major = college;
// export type time = college;
// export type grade = college;
// export type Subject = college;

/**test */
interface College {
  id: number;
  name: string;
  major: Major[];
}

interface Major {
  id: number;
  name: string;
  times: Time[];
}

interface Time {
  id: number;
  name: string;
  grades: Grade[];
}

interface Grade {
  id: number;
  name: string;
  subjects: Subjects[];
}
interface Subjects {
  id: number;
  name: string;
}

export type DatabaseList = College[];
