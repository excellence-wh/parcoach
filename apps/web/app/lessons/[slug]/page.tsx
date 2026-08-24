import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ExternalLink, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getLesson, lessons } from "@/lib/lessons";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "教案未找到 · Parcoach" };
  return { title: `${lesson.title} · Parcoach` };
}

export default async function LessonViewer({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 顶部工具条 */}
      <div className="sticky top-0 z-10 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="container flex h-14 items-center justify-between gap-3">
          <Link
            href="/#library"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> 教案仓库
          </Link>
          <div className="flex items-center gap-2 min-w-0">
            <BookOpen className="size-4 shrink-0 text-primary" />
            <span className="truncate text-sm font-medium">{lesson.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:inline-flex">{lesson.tag}</Badge>
            <Button asChild size="sm" variant="outline">
              <a href={lesson.htmlUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" /> 新窗口打开
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={lesson.htmlUrl} download>
                <Download className="size-4" /> 下载
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* 教案信息条 */}
      <div className="container pt-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="outline">{lesson.age}</Badge>
          <Badge variant="outline">{lesson.lessons} 节课</Badge>
          <Badge variant="outline">{lesson.scene}</Badge>
          <Badge variant="outline">{lesson.questionCount} 道交互题</Badge>
          <span className="text-xs text-muted-foreground/70">本教案为自包含纯 HTML，含交互式题目，可离线使用</span>
        </div>
      </div>

      {/* 教案 HTML 嵌入（iframe） */}
      <div className="container py-5">
        <iframe
          src={lesson.htmlUrl}
          title={lesson.title}
          className="h-[80vh] w-full rounded-xl border border-border/70 bg-white shadow-sm"
        />
      </div>
    </div>
  );
}
