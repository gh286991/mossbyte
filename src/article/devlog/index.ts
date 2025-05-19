import fs from "fs";
import path from "path";

function loadMarkdown(slug: string) {
  const filePath = path.join(process.cwd(), "src/article/devlog", `${slug}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
}

export const devlogData = {
  log1: {
    title: "森林關卡設計初體驗",
    date: "2024-01-01",
    content: loadMarkdown("log1"),
  },
  log2: {
    title: "第二篇日誌",
    date: "2024-01-02",
    content: loadMarkdown("log2"),
  },
  // 其他文章...
};