# Parcoach ｜ 亲导

> 赋能普通家长，做孩子的家庭成长教练
> Empower parents to be their kid's coach at home.
> Open-source practical family-education resources for every family.

## 项目定位

Parcoach（亲导）是面向普通家庭的开源教育项目。
**不需要专业教师背景，普通家长就可以在家引导、教育自己的孩子。**

本项目不服务培训机构，全部内容面向父母：提供可直接落地的引导方法、亲子教案、练习素材、习惯培养方案、避坑经验。

### 核心愿景

每一位家长，都可以成为孩子的私人成长教练。

## 内容方向

- 家庭教育实操方法论
- 家长可直接上手的家庭教学方案
- 亲子互动练习、小任务素材
- 常见育儿踩坑与避坑指南
- 家庭启蒙思路（思维、习惯、认知）

## 使用说明

本项目所有资源供家庭免费使用。

## 参与贡献

欢迎家长、教育爱好者一起共建，提交实践经验、改进方案。

## 技术栈 / 仓库

pnpm + Turborepo monorepo，全 TypeScript（strict），React 19 + Next.js 16。

| 目录 | 说明 |
| --- | --- |
| `apps/web` | 主站（端口 3000） |
| `apps/docs` | 文档站（端口 3001） |
| `packages/ui` | 共享组件库 `@repo/ui` |
| `packages/eslint-config` | 共享 ESLint 配置 |
| `packages/typescript-config` | 共享 TS 配置 |

### 本地开发

```sh
pnpm install     # 安装依赖
pnpm dev         # 启动全部 dev server（web:3000 / docs:3001）
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

本项目所有资源供家庭免费使用，详见仓库内 License 文件。
