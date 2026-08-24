import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const lessons = [
  {
    n: 1, name: "第 1 节 · 感知：什么叫「平均分」？",
    meta: "阶段目标：建立「整体平均分成几份」的直觉 · 材料：彩纸、剪刀、橡皮泥蛋糕",
    q: [
      ["pre", "🎯", "课前启发", "把一块披萨平均分给 3 个人，每个人得到的一样多吗？你怎么知道？"],
      ["mid", "💡", "课中引导", "如果切成两块一大一小，还算「平均」吗？为什么平均分那么重要？"],
      ["post", "✅", "课后小结", "今天你用什么办法保证「一样多」？"],
    ],
  },
  {
    n: 2, name: "第 2 节 · 表示：把分数写出来",
    meta: "阶段目标：认识分子分母，能把「分的结果」用分数表示 · 材料：纸盘、记号笔、彩纸",
    q: [
      ["pre", "🎯", "课前启发", "如果想告诉别人「一块蛋糕分成 4 份、拿走 3 份」，有哪几种说法？"],
      ["mid", "💡", "课中引导", "分母和分子各代表什么？为什么「拿走的份数」写在上面？"],
      ["post", "✅", "课后小结", "3/4 里，哪个是「分成了几份」，哪个是「拿了几份」？"],
    ],
  },
  {
    n: 3, name: "第 3 节 · 应用：开张甜品店，公平分餐",
    meta: "阶段目标：综合运用分数解决「公平分餐」问题并展示 · 材料：纸盘、彩笔、卡片",
    q: [
      ["pre", "🎯", "课前启发", "店里来了 4 个客人，只有 1 块蛋糕，怎么让每个客人都满意？"],
      ["mid", "💡", "课中引导", "这里用到了哪个分数？客人再多一个（5 个）呢？"],
      ["post", "✅", "课后小结", "今天你用分数解决了什么真问题？还有哪里能用到分数？"],
    ],
  },
];

export default function FractionsLesson() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-10">
        <Link href="/#lessons" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> 返回教案仓库
        </Link>

        {/* 封面 */}
        <div className="rounded-2xl p-8 md:p-10" style={{ background: "var(--grad-soft)" }}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Parcoach · PBL 教案</p>
          <h1 className="font-serif text-3xl md:text-4xl">分数：开一家「公平甜品店」</h1>
          <p className="mt-3 text-muted-foreground">分数不是抽象的几分之几——孩子当老板，把蛋糕公平分给客人，真正弄懂分数。</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>3 节课</Badge>
            <Badge variant="secondary">7–9 岁</Badge>
            <Badge variant="outline">家庭 / 课堂</Badge>
          </div>
        </div>

        {/* 驱动问题 */}
        <div className="mt-6 rounded-xl border-l-4 border-amber-500 bg-accent-foreground/5 p-4">
          <p className="text-lg">
            <Sparkles className="mr-2 inline size-5 text-amber-500" />
            <strong className="text-amber-600">驱动问题：</strong>
            「如果一块蛋糕要分给 4 个客人，怎样分才算『公平』？我们怎样开一家能公平分餐的甜品店？」
          </p>
        </div>

        {/* 学习目标 */}
        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">学习目标</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["知识", "理解分数的含义：整体被平均分成几份、取其中的几份；认识分子分母。"],
            ["能力", "实际操作平均分、比较同分母分数大小、用实物和图画表达分数。"],
            ["情感", "体会「公平」的数学意义，愿意动手试错，敢于表达自己的分法。"],
          ].map(([t, d]) => (
            <Card key={t}>
              <CardHeader className="pb-1"><CardTitle className="text-primary text-base">{t}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">{d}</p></CardContent>
            </Card>
          ))}
        </div>

        {/* 每节课三问 */}
        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">每节课（含三问）</h2>
        {lessons.map((l) => (
          <Card key={l.n} className="mb-5">
            <CardHeader>
              <CardTitle className="text-lg">{l.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{l.meta}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              {l.q.map(([type, ic, label, text]) => (
                <div key={type} className="flex items-start gap-3">
                  <span className="mt-0.5 text-base">{ic}</span>
                  <div>
                    <span className={"text-sm font-semibold " + (type === "pre" ? "text-primary" : type === "mid" ? "text-amber-600" : "text-emerald-600")}>
                      {label}
                    </span>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Rubric */}
        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">评价 Rubric</h2>
        <Card>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full text-sm">
              <thead className="bg-muted text-left text-muted-foreground">
                <tr><th className="p-3 font-medium">维度</th><th className="p-3">优</th><th className="p-3">良</th><th className="p-3">待改进</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-medium">理解</td><td className="p-3">能说清平均分与分子分母</td><td className="p-3">能在提示下说出含义</td><td className="p-3">分不清分子分母</td></tr>
                <tr><td className="p-3 font-medium">操作</td><td className="p-3">能独立平均分并写分数</td><td className="p-3">能跟着步骤完成</td><td className="p-3">需大量帮助</td></tr>
                <tr><td className="p-3 font-medium">应用</td><td className="p-3">能把分数用于真实问题</td><td className="p-3">能在引导下应用</td><td className="p-3">仅会机械写分数</td></tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* 适配 & 扩展 */}
        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">家庭 / 课堂适配</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Card><CardContent className="p-4"><p className="font-medium text-primary">家庭</p><p className="mt-1 text-sm text-muted-foreground">亲子模拟「甜品店」角色扮演；用真实蛋糕/披萨盒；材料家里都有。</p></CardContent></Card>
          <Card><CardContent className="p-4"><p className="font-medium text-primary">课堂</p><p className="mt-1 text-sm text-muted-foreground">分组各开一个「甜品店」互相点单；3 节各 40 分钟；第 3 节公开展示。</p></CardContent></Card>
        </div>

        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">扩展与下一步</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>比较分数大小：1/2 和 1/3 谁大？（进阶）</li>
          <li>做一个「分数披萨」手工，贴满厨房</li>
          <li>调查生活里的分数：时钟、食谱、体育比分</li>
        </ul>

        <Separator className="my-10" />
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="size-4" /> 生成自 Parcoach PBL 教案体系
        </p>
      </div>
    </div>
  );
}
