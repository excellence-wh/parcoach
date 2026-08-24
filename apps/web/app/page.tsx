import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Sparkles,
  Workflow,
  Puzzle,
  Map,
  GitBranch,
  Wand2,
  CheckCircle2,
  Palette,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skills = [
  {
    stage: "阶段 0 · 路由",
    name: "pbl-workflow-orchestrator",
    desc: "主编排器：判断当前阶段、调度各 skill、传递交接物。",
    icon: Workflow,
  },
  {
    stage: "阶段 1 · 澄清盘对",
    name: "knowledge-point-clarifier",
    desc: "只做澄清：通过追问帮家长/老师把知识点「盘对」。",
    icon: Map,
  },
  {
    stage: "阶段 2 · 生成教案",
    name: "pbl-lesson-builder",
    desc: "基于盘对结果生成 8 模块 PBL 教案，每节课含三问。",
    icon: BookOpen,
  },
  {
    stage: "阶段 3 · 导出交付物",
    name: "pdf / pptx / html-ppt",
    desc: "一键导出文档 / PPT / HTML 演示，遵循统一品牌主题。",
    icon: FileText,
  },
  {
    stage: "阶段 4 · 反馈迭代",
    name: "pbl-feedback-iteration",
    desc: "反馈归因到对应阶段精准修订，不盲目重做。",
    icon: GitBranch,
  },
  {
    stage: "统一规范",
    name: "pbl-style-guide",
    desc: "锁死品牌 token 与版式映射，保证所有教案 UI 统一。",
    icon: Palette,
  },
];

const lessons = [
  { title: "光合作用：打造「能量管家」", age: "9–11 岁", path: "/lessons/photosynthesis", tag: "科学" },
  { title: "分数：开一家「公平甜品店」", age: "7–9 岁", path: "/lessons/fractions", tag: "数学" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 导航 */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif text-lg font-bold">
              P
            </div>
            <span className="font-serif text-lg font-semibold">Parcoach 亲导</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#skills" className="hover:text-foreground transition-colors">Skills 体系</a>
            <a href="#lessons" className="hover:text-foreground transition-colors">教案仓库</a>
            <a href="#workflow" className="hover:text-foreground transition-colors">工作流</a>
            <a href="#about" className="hover:text-foreground transition-colors">关于</a>
          </nav>
          <Button asChild size="sm">
            <a href="https://github.com/excellence-wh/parcoach" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-100" style={{ background: "var(--grad-soft)" }} />
        <div className="container relative py-24 md:py-32">
          <Badge variant="secondary" className="mb-6 gap-1.5">
            <Sparkles className="size-3.5" /> 开源 · PBL 项目式学习
          </Badge>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            让老师与家长一起，
            <br />
            带孩子<span className="text-primary">做项目、学真东西</span>。
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Parcoach（亲导）是一套面向老师与家长的
            <strong className="text-foreground"> PBL 教案生成体系</strong>：
            输入一个知识点，系统带你澄清、盘对，生成可直接落地的项目式教案，
            并用统一品牌风格导出为文档或课件。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href="#workflow">
                了解工作流 <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="#lessons">看教案示例</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 什么是 Parcoach / 流水线 */}
      <section id="workflow" className="section">
        <div className="container">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 className="h2">五阶段流水线，一键从知识点到教案</h2>
          <p className="sub">
            不再依赖临时发挥——每个阶段由独立 skill 负责，交接物明确，输出统一。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              ["0", "路由", "识别意图，是否走全流程"],
              ["1", "澄清盘对", "问清定义、边界、对象、目标、约束"],
              ["2", "生成教案", "8 模块 PBL 教案 + 每节课三问"],
              ["3", "导出交付", "文档 / PPT / HTML，品牌统一"],
              ["4", "反馈迭代", "归因到阶段，精准修订"],
            ].map(([n, t, d], i) => (
              <Card key={n} className="relative border-border/70 shadow-sm">
                <CardHeader className="pb-2">
                  <div
                    className="mb-2 flex size-9 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: "var(--grad)" }}
                  >
                    {n}
                  </div>
                  <CardTitle className="text-base">{t}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{d}</CardDescription>
                </CardContent>
                {i < 4 && (
                  <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-5 -translate-y-1/2 text-primary md:block" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills 体系 */}
      <section id="skills" className="section-alt section">
        <div className="container">
          <p className="eyebrow">SKILLS</p>
          <h2 className="h2">Skill 体系</h2>
          <p className="sub">
            自建 skill 组成完整编排链路；配合安装的 <code>pdf / pptx / html-ppt / ui-ux-pro-max / web-design-guidelines</code> 完成产出。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.name} className="transition-shadow hover:shadow-md">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-accent-foreground/5 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <Badge variant="secondary">{s.stage}</Badge>
                    </div>
                    <CardTitle className="font-mono text-sm tracking-tight">{s.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 教案仓库 */}
      <section id="lessons" className="section">
        <div className="container">
          <p className="eyebrow">LESSON LIBRARY</p>
          <h2 className="h2">教案仓库</h2>
          <p className="sub">
            已按统一规范生成的示例教案，全都套用品牌主题，打开即用、风格统一。
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {/* 示例教案 */}
            <Card className="overflow-hidden border-border/70">
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg text-white" style={{ background: "var(--grad)" }}>
                    <BookOpen className="size-5" />
                  </div>
                  <Badge variant="secondary">示例教案</Badge>
                </div>
                {lessons.map((l) => (
                  <Card key={l.title} className="mt-3">
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-medium">{l.title}</p>
                        <p className="text-sm text-muted-foreground">{l.age} · <Badge variant="outline" className="ml-1">{l.tag}</Badge></p>
                      </div>
                      <Link href={l.path} className="text-primary hover:underline">
                        <FileText className="size-5" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </CardHeader>
            </Card>

            {/* 统一规范 */}
            <Card className="overflow-hidden border-border/70">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent-foreground/5 text-primary">
                    <CheckCircle2 className="size-5" />
                  </div>
                  <Badge variant="secondary">统一规范</Badge>
                </div>
                <CardTitle className="text-lg">享受多快好省</CardTitle>
                <CardDescription>
                  所有教案共享同一套品牌模板——森林绿 + 暖橙、衬线标题、
                  固定的每节课卡片与三问版式。任何知识点生成的结果，视觉都保持一致。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Palette className="size-4 text-primary" /> 品牌 token 锁死配色与字体</div>
                <div className="flex items-center gap-2"><Wand2 className="size-4 text-primary" /> 每节课三问固定格式</div>
                <div className="flex items-center gap-2"><PlayCircle className="size-4 text-primary" /> 一键导出文档 / PPT / 演示</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 关于 / CTA */}
      <section id="about" className="section-alt section">
        <div className="container text-center">
          <Puzzle className="mx-auto mb-4 size-10 text-primary" />
          <h2 className="h2">每一个孩子，都可以从自己的项目出发</h2>
          <p className="sub mx-auto">
            Parcoach 是开源项目，欢迎老师、家长与教育爱好者一起共建 PBL 教案与经验。
            所有资源供家庭免费使用。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href="https://github.com/excellence-wh/parcoach" target="_blank" rel="noopener noreferrer">
                去 GitHub 围观 <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border/60 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-sm font-bold">P</div>
            <span>Parcoach 亲导 · 开源 PBL 教育</span>
          </div>
          <Separator className="md:hidden" />
          <div className="flex items-center gap-2">
            <span>Powered by Turborepo · Next.js · shadcn/ui</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
