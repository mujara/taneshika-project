import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageDetail } from "@/app/_libs/microcms";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PageContent from "@/app/_components/PageContent";

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

  const data = await getPageDetail(slug, { draftKey: dk });

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

  const data = await getPageDetail(slug, { draftKey: dk }).catch(notFound);

  return (
    <section className="contents__main">
      <PageTitle image="/img/common/iconStar.svg" pageCategoty="Unclassifiable">
        {data.title}
      </PageTitle>
      <Topicpath
        pageCategoty="Unclassifiable"
        pageCategotyLink="/unclassifiable"
      >
        {data.title}
      </Topicpath>
      <div className="contents__mainInner --typeFullSize">
        <div className="inBase">
          <div className="inBase__inner">
            <PageContent data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
