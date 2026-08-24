export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  age: string;
  lessons: number;
  scene: string;
  tag: string;
  grade: string;
  questionCount: number;
  htmlUrl: string;
};

// 教案仓库登记表：新增教案时在此登记，并把自包含 HTML 放到 public/lessons/<slug>.html
export const lessons: Lesson[] = [
  {
    slug: "photosynthesis",
    title: "光合作用：打造「能量管家」",
    subtitle: "植物如何靠光吃饭？孩子动手做实验，弄懂光合作用的条件与产物。",
    age: "9–11 岁",
    lessons: 3,
    scene: "家庭 / 课堂",
    tag: "科学",
    grade: "小学中高年级",
    questionCount: 12,
    htmlUrl: "/lessons/photosynthesis.html",
  },
  {
    slug: "fractions",
    title: "分数：开一家「公平甜品店」",
    subtitle: "分数不是抽象的几分之几——孩子当老板，把蛋糕公平分给客人，真正弄懂分数。",
    age: "7–9 岁",
    lessons: 3,
    scene: "家庭 / 课堂",
    tag: "数学",
    grade: "小学低年级",
    questionCount: 12,
    htmlUrl: "/lessons/fractions.html",
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}
