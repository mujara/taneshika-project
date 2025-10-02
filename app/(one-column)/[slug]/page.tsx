import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageDetail } from "@/app/_libs/microcms";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PageContent from "@/app/_components/PageContent";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk: string;
  }>;
};

export async function generateMetadata(rawProps: {
  params: { slug: string };
  searchParams: { dk?: string };
}): Promise<Metadata> {
  // ここで Promise に変換して扱う
  const params = await Promise.resolve(rawProps.params);
  const searchParams = await Promise.resolve(rawProps.searchParams);

  const data = await getPageDetail(params.slug, {
    draftKey: searchParams.dk,
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

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getPageDetail(params.slug, {
    draftKey: searchParams.dk,
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
            {/* /.inBase__inner */}
          </div>
          {/* /.inBase */}
        </div>
        {/* /.contents__mainInner */}
      </div>
      {/* /.contents__main */}
    </section>
  );
}
