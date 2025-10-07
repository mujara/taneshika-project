import Link from "next/link";
import type { Archive } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import TagList from "../TagList";

type Props = {
  data: Archive;
};

export default function Article({ data }: Props) {
  return (
    <main>
      <Date date={data.publishedAt ?? data.createdAt} />
      <Link href={`/archive/category/${data.category.id}`}>
        <Category category={data.category} />
      </Link>

      {data.mokuji && data.mokuji.trim() !== "" && (
        <div
          className="contents__main__mokuji"
          dangerouslySetInnerHTML={{
            __html: data.mokuji,
          }}
        />
      )}

      <div className="contents__main__article">
        {data.content.map((block, index) => {
          if (block.fieldType === "richEditor") {
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: block.richEditor }}
              />
            );
          } else if (block.fieldType === "textarea") {
            return (
              <pre key={index} className="whitespace-pre-wrap">
                {block.textarea}
              </pre>
            );
          }
          return null;
        })}
      </div>

      <TagList tags={data.tag} />
    </main>
  );
}