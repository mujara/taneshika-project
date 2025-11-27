import type { Metadata } from "next";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "レイアウト一覧",
  description: "WEB制作で使用するレイアウトに関するページです。",
  image: "/img/sample.jpg",
  classification01: "layout",
  classification02: "Layout",
};

// SEO メタデータ
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

// ページ本体
export default async function Page() {
  return (
    <section className="contents__main">
      <PageTitle
        image="/img/common/iconWave.svg"
        pageCategoty={data.classification02}
      >
        {data.title}
      </PageTitle>
      <Topicpath
        pageCategoty={data.classification02}
        pageCategotyLink={`/${data.classification01}`}
      >
        {data.title}
      </Topicpath>
      <div className="contents__mainInner --typeFullSize">
        <div className="inBase">
          <div className="inBase__inner">
            <p>
              このページは、現在鋭意製作中です。
              <br />
              もうしばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
