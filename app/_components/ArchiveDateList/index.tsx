"use client";
import { useRouter } from "next/navigation";
import { Archive } from "@/app/_libs/microcms";

// ユーティリティ: YYYY/MM 形式に変換
const formatYearMonth = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}/${month}`;
};

type Props = {
  articles?: Archive[];
};

export default function ArchiveDateList({ articles }: Props) {
  const router = useRouter();

  if (!articles) return null;
  if (articles.length === 0) return <p>記事がありません。</p>;

  // --- 月ごとにグループ化 ---
  const grouped: Record<string, Archive[]> = articles.reduce((acc, article) => {
    // publishedAt が undefined の場合はスキップ
    if (!article.publishedAt) return acc;

    const key = formatYearMonth(article.publishedAt);
    if (!acc[key]) acc[key] = [];
    acc[key].push(article);
    return acc;
  }, {} as Record<string, Archive[]>);

  // --- 年月を降順ソート（新しい順に並べる） ---
  const sortedKeys = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1));

  // セレクトボックスを選ぶと移動
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;

    const { year, month } = JSON.parse(value);

    router.push(`/archive/date/${year}/${month}`);
  };

  return (
    <label className="contents__selectDate">
      <select id="archive-select" defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Ask for the moon
        </option>
        {sortedKeys.map((key) => {
          const [year, month] = key.split("/");
          return (
            <option key={key} value={JSON.stringify({ year, month })}>
              {year}年{month}月 ({grouped[key].length})
            </option>
          );
        })}
      </select>
    </label>
  );
}
