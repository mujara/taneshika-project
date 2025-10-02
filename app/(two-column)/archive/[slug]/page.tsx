import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArchiveDetail } from "@/app/_libs/microcms";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Article from "@/app/_components/Article";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ dk?: string }>;
};

// メタデータ
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const { dk } = (await searchParams) ?? {};

  const data = await getArchiveDetail(slug, { draftKey: dk });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

// ページ本体
export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk } = (await searchParams) ?? {};

  const data = await getArchiveDetail(slug, { draftKey: dk }).catch(notFound);

  return (
    <section className="contents__main">
      <PageTitle image="/img/common/iconCircle.svg" pageCategoty="Archive">
        {data.title}
      </PageTitle>
      <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">
        {data.title}
      </Topicpath>
      <div className="contents__mainInner">
        <div className="contents__inBase">
          <div className="contents__inBase__inner">
            <Article data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
