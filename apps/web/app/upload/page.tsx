"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, UploadCloud, FileCheck, Info, CheckCircle2, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type LessonMeta = {
  title: string;
  age: string;
  tag: string;
  lessons: string;
  scene: string;
};

export default function UploadPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<number>(0);
  const [meta, setMeta] = useState<LessonMeta>({
    title: "",
    age: "",
    tag: "",
    lessons: "",
    scene: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onPickFile = (f: File | undefined) => {
    if (!f) return;
    setFileName(f.name);
    setFileSize(f.size);
  };

  const setField = (k: keyof LessonMeta, v: string) => setMeta((m) => ({ ...m, [k]: v }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-10">
        <Link href="/#library" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> 返回教案仓库
        </Link>

        <h1 className="font-serif text-3xl mb-2">上传教案</h1>
        <p className="mb-8 text-muted-foreground">
          教案是自包含纯 HTML 文件（由 skills 生成或按统一规范制作，含交互式题目）。填写信息并上传，即可收录到教案仓库。
        </p>

        {!submitted ? (
          <>
            {/* 文件选择 */}
            <Card className="mb-5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base"><UploadCloud className="size-5 text-primary" /> 1. 选择教案文件（.html）</CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  ref={inputRef}
                  type="file"
                  accept=".html,.htm"
                  className="hidden"
                  onChange={(e) => onPickFile(e.target.files?.[0])}
                />
                <button
                  onClick={() => inputRef.current?.click()}
                  className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-10 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <UploadCloud className="size-8" />
                  <span className="text-sm">点击选择或拖入教案 HTML 文件</span>
                </button>
                {fileName && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted p-3 text-sm">
                    <FileCheck className="size-4 text-primary" />
                    <span className="truncate font-medium">{fileName}</span>
                    <Badge variant="outline" className="ml-auto shrink-0">{(fileSize / 1024).toFixed(1)} KB</Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 教案信息 */}
            <Card className="mb-5">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base"><Info className="size-5 text-primary" /> 2. 教案信息</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">标题 *</span>
                  <input
                    value={meta.title}
                    onChange={(e) => setField("title", e.target.value)}
                    className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="如：太阳系漫游指南"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">学科</span>
                  <input
                    value={meta.tag}
                    onChange={(e) => setField("tag", e.target.value)}
                    className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="如：科学 / 数学"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">年龄段</span>
                  <input
                    value={meta.age}
                    onChange={(e) => setField("age", e.target.value)}
                    className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="如：9–11 岁"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-sm font-medium">课时</span>
                  <input
                    value={meta.lessons}
                    onChange={(e) => setField("lessons", e.target.value)}
                    className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="如：4 节课"
                  />
                </label>
                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="text-sm font-medium">使用场景</span>
                  <input
                    value={meta.scene}
                    onChange={(e) => setField("scene", e.target.value)}
                    className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="如：家庭 / 课堂"
                  />
                </label>
              </CardContent>
            </Card>

            {/* 提交 */}
            <div className="flex items-center justify-end gap-3">
              <p className="mr-auto text-xs text-muted-foreground">* 为必填项</p>
              <Button
                size="lg"
                className="gap-2"
                disabled={!fileName || !meta.title}
                onClick={() => setSubmitted(true)}
              >
                <CheckCircle2 className="size-4" /> 提交教案
              </Button>
            </div>
          </>
        ) : (
          /* 提交成功 */
          <Card className="border-emerald-300 bg-emerald-50">
            <CardHeader>
              <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="size-6" />
              </div>
              <CardTitle className="text-xl">收到！教案进入收录流程</CardTitle>
              <CardDescription className="text-emerald-800/80">
                感谢你的贡献。教案 <strong>{meta.title || fileName}</strong> 已提交，
                经过格式与版权审核后收录进教案仓库。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">{fileName}</Badge>
              {meta.age && <Badge variant="outline">{meta.age}</Badge>}
              {meta.tag && <Badge variant="outline">{meta.tag}</Badge>}
              {meta.lessons && <Badge variant="outline">{meta.lessons}</Badge>}
              {meta.scene && <Badge variant="outline">{meta.scene}</Badge>}
            </CardContent>
          </Card>
        )}

        {/* 说明 */}
        <Card className="mt-8">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base"><GitBranch className="size-5 text-primary" /> 教案规范与贡献方式</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>一份合格的教案必须是 <strong>自包含纯 HTML</strong>：</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>内含所有内容（封面 / 目标 / 每节课三问 / 习题 / Rubric / 适配 / 扩展）</li>
              <li>内含 <strong>至少 10 道交互式题目</strong>（点击即反馈，内联 JS，不依赖网络）</li>
              <li>引用统一的品牌风格，双击即可在浏览器打开、可离线使用</li>
            </ul>
            <p className="pt-2">
              也欢迎到 <a className="underline" href="https://github.com/excellence-wh/parcoach" target="_blank" rel="noopener noreferrer">GitHub</a> 通过 Issue / PR 贡献教案，或使用
              <code className="mx-1 rounded bg-muted px-1">pbl-lesson-builder</code> skill 自动生成。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
