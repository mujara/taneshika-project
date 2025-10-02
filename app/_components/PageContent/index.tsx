import type { Page } from "@/app/_libs/microcms";

type Props = {
  data: Page;
};

export default function Page({ data }: Props) {
  return (
    <main>
      <div
        className="contents__main__article"
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
