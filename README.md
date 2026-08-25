# Parcoach ｜ 亲导

> 让老师与家长一起，带孩子做项目、学真东西。
> PBL（项目式学习 Project-Based Learning）开源教育资源，面向老师与家长。

## 项目定位

Parcoach（亲导）是面向**老师与家长**的开源教育项目，核心是让孩子以 **PBL（项目式学习）** 的方式学习。

**不需要专业课程开发背景，老师与家长就能带着孩子围绕真实项目探究、动手、产出。** 本项目提供可直接落地的项目式学习方案：PBL 主题项目、教案、任务单、评价与避坑经验。

本项目不服务培训机构，全部内容面向老师与家长：在家、在课堂都能用。

### 核心愿景

让每一次学习，都从孩子自己的项目出发。

## 内容方向（PBL 项目式学习）

- PBL 学习方法论：如何设计一个好的驱动问题（Driving Question）
- 可直接上手的项目式教学方案 / 教案（跨学科主题项目）
- 亲子 / 师生互动项目任务单、练习与产出素材
- 小组协作、展示与评价（Rubric）模板
- 常见执行踩坑与避坑指南
- 家庭 / 课堂启蒙思路（思维、习惯、认知）

## 使用说明

本项目所有资源供免费使用，老师与家长可直接落地到课堂或家庭场景。

## 参与贡献

欢迎老师、家长、教育爱好者一起共建，提交实践经验、改进方案与新的 PBL 项目。

## Skills 一键安装

本项目内置一套 **Parcoach PBL 教案生成 skills**，可一键安装到你的 AI 编程/写作助手（Claude Code、Codex、Cursor、Copilot、Zed、Hermes 等）：

```sh
# 安装全部 5 个自建 skills
npx skills add https://github.com/excellence-wh/parcoach

# 或按需安装指定 skill
npx skills add https://github.com/excellence-wh/parcoach --skill pbl-workflow-orchestrator
npx skills add https://github.com/excellence-wh/parcoach --skill knowledge-point-clarifier
npx skills add https://github.com/excellence-wh/parcoach --skill pbl-lesson-builder
npx skills add https://github.com/excellence-wh/parcoach --skill pbl-feedback-iteration
npx skills add https://github.com/excellence-wh/parcoach --skill pbl-style-guide
```

| skill | 作用 |
| --- | --- |
| `pbl-workflow-orchestrator` | 主编排器：从知识点到教案/课件的全流程调度 |
| `knowledge-point-clarifier` | 澄清盘对知识点（只做澄清，不生成教案） |
| `pbl-lesson-builder` | 生成自包含纯 HTML PBL 教案（含 10+ 交互题） |
| `pbl-feedback-iteration` | 教案交付后的反馈迭代与归因 |
| `pbl-style-guide` | 锁死品牌主题与版式，保证所有教案 UI 统一 |

> 生成的教案为**自包含纯 HTML**（双击即用、可离线、含交互习题），并可在本站 `apps/web` 教案仓库浏览 / 上传。

## 技术栈 / 仓库

pnpm + Turborepo monorepo，全 TypeScript（strict），React 19 + Next.js 16。

| 目录 | 说明 |
| --- | --- |
| `apps/web` | 主站（端口 3100） |
| `apps/docs` | 文档站（端口 3001） |
| `packages/ui` | 共享组件库 `@repo/ui` |
| `packages/eslint-config` | 共享 ESLint 配置 |
| `packages/typescript-config` | 共享 TS 配置 |

### 本地开发

```sh
pnpm install     # 安装依赖
pnpm dev         # 启动全部 dev server（web:3100 / docs:3001）
pnpm --filter web dev   # 只跑 web
```

### 构建 / 校验

```sh
pnpm build         # 构建全部
pnpm lint          # ESLint（warnings 视为失败）
pnpm check-types   # tsc --noEmit
pnpm format        # Prettier 格式化
```

> 注：仓库当前为初始骨架（create-turbo），尚未包含具体业务代码；`pnpm-lock.yaml` 为提交产物，请用 `pnpm` 而非 `npm`/`yarn` 管理依赖。

## License

本项目所有资源免费使用，详见仓库内 License 文件。
