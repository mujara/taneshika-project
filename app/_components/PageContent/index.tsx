import type { Page } from "@/app/_libs/microcms";

type Props = {
  data: Page;
};

export default function Page({ data }: Props) {
  return (
    <main>
      <div className="contents__main__article">
        {data.content.map((block, index) => {
          if (block.fieldId === "richEditor") {
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: block.richEditor }}
              />
            );
          } else if (block.fieldId === "htmlEditor") {
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: block.htmlEditor }}
              />
            );
          }
          return null;
        })}
      </div>
    </main>
  );
}
