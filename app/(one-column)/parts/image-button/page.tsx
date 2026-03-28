import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PartType001 from "./type001/part";
import PartType002 from "./type002/part";
import PartType003 from "./type003/part";
import PartType004 from "./type004/part";
import PartType005 from "./type005/part";
import PartType006 from "./type006/part";
import PartType007 from "./type007/part";

// ページ情報
const data = {
  title: "画像を使ったボタンのパーツ",
  description: "画像を使ったボタンのパーツを紹介致します。",
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

            <div className="column--type03">
              <PartType001 />
              <PartType001 />
              <div className="hidden-sp"><PartType001 /></div>

              <PartType002 />
              <PartType002 />
              <div className="hidden-sp"><PartType002 /></div>

              <PartType003 />
              <PartType003 />
              <div className="hidden-sp"><PartType003 /></div>

              <PartType004 />
              <PartType004 />
              <div className="hidden-sp"><PartType004 /></div>

              <PartType005 />
              <PartType005 />
              <div className="hidden-sp"><PartType005 /></div>

              <PartType006 />
              <PartType006 />
              <div className="hidden-sp"><PartType006 /></div>

              <PartType007 />
              <PartType007 />
              <div className="hidden-sp"><PartType007 /></div>
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
