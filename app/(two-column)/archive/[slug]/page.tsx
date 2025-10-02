import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArchiveDetail } from "@/app/_libs/microcms";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Article from "@/app/_components/Article";

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

  const data = await getArchiveDetail(params.slug, {
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
  const data = await getArchiveDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
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
            {/* /.contents__inBase__inner */}
          </div>
          {/* /.contents__inBase */}
        </div>
        {/* /.contents__mainInner */}
      </div>
      {/* /.contents__main */}
    </section>
  );
}
