import type { Metadata } from "next";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "パーツ一覧",
  description: "WEB制作で使用するパーツをここに置いています。",
  image: "/img/sample.jpg",
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
      <PageTitle image="/img/common/iconCross.svg" pageCategoty="Parts">
        {data.title}
      </PageTitle>
      <Topicpath pageCategoty="Parts" pageCategotyLink="/parts">
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
