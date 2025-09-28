import Link from "next/link";
import { Archive } from "@/app/_libs/microcms";
import Date from "../Date";

type Props = {
  articles?: Archive[];
};

export default function SideArchiveList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <ul className="sidePageList">
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/archive/${article.id}`}>
            <span><Date date={article.publishedAt ?? article.createdAt} /></span>
            <span>{article.title}</span>
          </Link>
          {/* /.archiveListBox__inner */}
        </li>
      ))}
      </ul>
    </>
  );
}