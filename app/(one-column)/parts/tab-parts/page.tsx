import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import TabType01 from "./type001/tab";
import TabType02 from "./type002/tab";

// ページ情報
const data = {
  title: "タブのパーツ",
  description: "タブで内容をコンパクトに表示するパーツを紹介致します。",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
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
        image="/img/common/iconCross.svg"
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
      <div className={`contents__mainInner --typeFullSize typeParts`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts`}>戻る</Link>
            </div>

            <div className="column--type01">
              <TabType01 />
              <TabType02 />
            </div>

            <div className="button--typeBack sM-l">
              <Link href={`/parts`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
