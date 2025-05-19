import { devlogData } from "@/article/devlog";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return Object.keys(devlogData).map((slug) => ({ slug }));
}

export default async function DevlogPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  if (!slug || typeof slug !== 'string') {
    return <div>無效的文章參數</div>;
  }
  const post = devlogData[slug as keyof typeof devlogData];
  if (!post) return <div>文章不存在</div>;

  return (
    <main className="prose mx-auto">
      <div className="pixel-font text-sm sm:text-base text-moss-light mb-1 break-words">
        <ReactMarkdown >{post.content}</ReactMarkdown>
      </div>

    </main >
  );
} 