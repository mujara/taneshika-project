import Image from "next/image";
import Link from "next/link";
import { Archive } from "@/app/_libs/microcms";
import TagList from "../TagList";
import Date from "../Date";

type Props = {
  articles?: Archive[];
};

export default function ArchiveList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      {articles.map((article) => (
        <div className="archiveListBox__inner" key={article.id}>
          <Link href={`/archive/${article.id}`}>
            <div className="archiveListBox__date">
              <Date date={article.publishedAt ?? article.createdAt} />
            </div>
            <div className="archiveListBox__title">
              <h2>{article.title}</h2>
            </div>
          </Link>
          <TagList tags={article.tag} />
          <Link href={`/archive/${article.id}`}>
            <div className="archiveListBox__sentence">
              {article.description}
              {/* /.archiveListBox__sentence */}
            </div>
            <figure className="archiveListBox__arrow"><span>
              <Image src="/img/common/imgArrow01.svg" alt="more" fill />
            </span></figure>
          </Link>
          {/* /.archiveListBox__inner */}
        </div>
      ))}
    </>
  );
}
