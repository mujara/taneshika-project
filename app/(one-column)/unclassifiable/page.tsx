import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "その他一覧",
  description: "分類されないページをここに置いています。",
  image: "/img/sample.jpg",
  classification01: "unclassifiable",
  classification02: "Unclassifiable",
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
    <section className="contents__main --isFirstLevel">
      <PageTitle
        image="/img/common/iconStar.svg"
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
            <div className="column--type01">
              <ul className="list--type01 sM-l">
                <li>
                  <Link href="/privacy-policy">プライバシーポリシー</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
