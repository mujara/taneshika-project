import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageDetail } from "@/app/_libs/microcms";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PageContent from "@/app/_components/PageContent";

type Props = {
  params: Record<string, string>; // slug が含まれる
  searchParams?: Record<string, string>; // dk などのオプション
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getPageDetail(params.slug, {
    draftKey: searchParams?.dk,
  });

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

export default async function Page({ params, searchParams }: Props) {
  const data = await getPageDetail(params.slug, {
    draftKey: searchParams?.dk,
  }).catch(notFound);

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
