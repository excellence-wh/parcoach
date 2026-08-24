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
  UploadCloud,
  ListChecks,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { lessons } from "@/lib/lessons";

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
    desc: "基于盘对结果生成自包含纯 HTML 教案，含 10+ 交互题。",
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

const lessonCount = lessons.length;

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
            <a href="#library" className="hover:text-foreground transition-colors">教案仓库</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills 体系</a>
            <a href="#workflow" className="hover:text-foreground transition-colors">工作流</a>
            <Link href="/upload" className="hover:text-foreground transition-colors">上传教案</Link>
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
      <section id="library" className="section">
        <div className="container">
          <p className="eyebrow">LESSON LIBRARY</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="h2">教案仓库</h2>
              <p className="sub">
                目前收录 <strong className="text-primary">{lessonCount}</strong> 份由 skills 生成的自包含纯 HTML 教案，
                每份内含至少 10 道交互式题目，双击即用、可离线使用。
              </p>
            </div>
            <Button asChild size="lg" className="gap-2">
              <Link href="/upload">
                <UploadCloud className="size-4" /> 上传教案
              </Link>
            </Button>
          </div>

          {/* 教案卡片网格 */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {lessons.map((l) => (
              <Link key={l.slug} href={`/lessons/${l.slug}`} className="group">
                <Card className="h-full overflow-hidden border-border/70 transition-shadow hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg text-white" style={{ background: "var(--grad)" }}>
                        <Layers className="size-5" />
                      </div>
                      <Badge variant="secondary">{l.tag}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{l.title}</CardTitle>
                    <CardDescription>{l.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{l.age}</Badge>
                      <Badge variant="outline">{l.lessons} 节课</Badge>
                      <Badge variant="outline">{l.scene}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ListChecks className="size-4 text-primary" />
                      {l.questionCount} 道交互式题目
                      <ArrowRight className="ml-auto size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* 统一规范说明 */}
          <Card className="mt-8 overflow-hidden border-border/70">
            <CardHeader>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent-foreground/5 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <Badge variant="secondary">统一规范</Badge>
              </div>
              <CardTitle className="text-lg">所有教案共享同一套品牌模板</CardTitle>
              <CardDescription>
                森林绿 + 暖橙、衬线标题、固定的每节课卡片与三问版式。由
                <code className="mx-1 rounded bg-muted px-1">pbl-lesson-builder</code> + 统一模板生成的教案，
                无论谁生成、无论知识点是什么，视觉与交互逻辑都保持一致。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Palette className="size-4 text-primary" /> 品牌 token 锁死配色与字体</div>
              <div className="flex items-center gap-2"><Wand2 className="size-4 text-primary" /> 每节课三问固定格式</div>
              <div className="flex items-center gap-2"><ListChecks className="size-4 text-primary" /> 至少 10 道交互式题目，点击即反馈</div>
              <div className="flex items-center gap-2"><PlayCircle className="size-4 text-primary" /> 自包含纯 HTML，双击即用、可离线分发</div>
            </CardContent>
          </Card>
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
