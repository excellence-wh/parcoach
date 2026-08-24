import Link from "next/link";
import { ArrowLeft, BookOpen, Target, CheckSquare, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const lessons = [
  {
    n: 1, name: "第 1 节 · 发现：植物真的在「吃饭」吗？",
    meta: "阶段目标：唤起好奇，建立「植物需要光」的初步认识 · 材料：两株绿植、纸箱",
    q: [
      ["pre", "🎯", "课前启发", "你觉得植物跟我们一样需要吃东西吗？它吃的「饭」藏在哪里？"],
      ["mid", "💡", "课中引导", "如果把一株植物一直放在黑暗里，你猜会发生什么？为什么？"],
      ["post", "✅", "课后小结", "今天你发现了什么？还有什么没弄明白的地方？"],
    ],
  },
  {
    n: 2, name: "第 2 节 · 实验：光到底起了什么作用？",
    meta: "阶段目标：设计对比实验，观察「有光/无光」差异 · 材料：两株同种苗、铝箔、台灯",
    q: [
      ["pre", "🎯", "课前启发", "上一次观察后，你觉得「光」对植物的作用有多大？如果只给光不给水会怎样？"],
      ["mid", "💡", "课中引导", "怎样才能证明是「光」而不是「空气」让叶片变绿？你的对照组怎么设计？"],
      ["post", "✅", "课后小结", "从数据里你得出什么结论？如果重来一次，哪里要改？"],
    ],
  },
  {
    n: 3, name: "第 3 节 · 作品：设计「能量管家」方案",
    meta: "阶段目标：整合所学，产出方案并展示 · 材料：纸、笔、旧杂志、彩笔",
    q: [
      ["pre", "🎯", "课前启发", "如果你是植物的「能量管家」，你会优先保证它的哪三件事？"],
      ["mid", "💡", "课中引导", "你的方案会不会漏掉水或二氧化碳？怎么验证它真的有用？"],
      ["post", "✅", "课后小结", "你觉得这套「营养来源」的道理，还能用到生活里哪些地方？"],
    ],
  },
];

export default function PhotosynthesisLesson() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-10">
        <Link href="/#lessons" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> 返回教案仓库
        </Link>

        {/* 封面 */}
        <div className="rounded-2xl p-8 md:p-10" style={{ background: "var(--grad-soft)" }}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Parcoach · PBL 教案</p>
          <h1 className="font-serif text-3xl md:text-4xl">光合作用：为我们的教室花园打造「能量管家」</h1>
          <p className="mt-3 text-muted-foreground">植物如何靠光吃饭？孩子动手做一个小实验，弄懂光合作用的条件与产物。</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>3 节课</Badge>
            <Badge variant="secondary">9–11 岁</Badge>
            <Badge variant="outline">家庭 / 课堂</Badge>
          </div>
        </div>

        {/* 驱动问题 */}
        <div className="mt-6 rounded-xl border-l-4 border-amber-500 bg-accent-foreground/5 p-4">
          <p className="text-lg">
            <Sparkles className="mr-2 inline size-5 text-amber-500" />
            <strong className="text-amber-600">驱动问题：</strong>
            「如果太阳突然消失一个月，我们班的绿植会怎样？我们怎样为它设计一套『能量管家』方案？」
          </p>
        </div>

        {/* 学习目标 */}
        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">学习目标</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["知识", "能说出光合作用的条件（光、水、二氧化碳）与产物（有机物、氧气）。"],
            ["能力", "观察记录、提出假设、对比实验、用图表表达数据。"],
            ["情感", "对自然产生好奇，愿意为植物负责，敢于猜想与试错。"],
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
                    <span
                      className={
                        "text-sm font-semibold " +
                        (type === "pre" ? "text-primary" : type === "mid" ? "text-amber-600" : "text-emerald-600")
                      }
                    >
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
                <tr><td className="p-3 font-medium">探究</td><td className="p-3">主动猜想并验证</td><td className="p-3">能按步骤观察</td><td className="p-3">需提醒才参与</td></tr>
                <tr><td className="p-3 font-medium">表达</td><td className="p-3">能清楚讲出原理</td><td className="p-3">能部分复述</td><td className="p-3">表达较模糊</td></tr>
                <tr><td className="p-3 font-medium">作品</td><td className="p-3">方案完整可行</td><td className="p-3">方案基本完整</td><td className="p-3">方案不完整</td></tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* 适配 & 扩展 */}
        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">家庭 / 课堂适配</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <Card><CardContent className="p-4"><p className="font-medium text-primary">家庭</p><p className="mt-1 text-sm text-muted-foreground">单娃亲子协作；用家里绿植 + 台灯即可；材料全部就地取材。</p></CardContent></Card>
          <Card><CardContent className="p-4"><p className="font-medium text-primary">课堂</p><p className="mt-1 text-sm text-muted-foreground">分组每组一株，3 节各 40 分钟；第 3 节小组互评。</p></CardContent></Card>
        </div>

        <h2 className="mt-10 mb-4 font-serif text-2xl text-primary">扩展与下一步</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>光合作用 ↔ 呼吸作用的区别（进阶）</li>
          <li>做一个「植物日记」持续一周观察</li>
          <li>调查家里每种植物需要的光照位置</li>
        </ul>

        <Separator className="my-10" />
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="size-4" /> <Target className="size-4" /> <CheckSquare className="size-4" /> 生成自 Parcoach PBL 教案体系
        </p>
      </div>
    </div>
  );
}
