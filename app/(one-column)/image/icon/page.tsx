import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "アイコン画像",
  description: "WEB制作で画像やイメージに関するものを集めています。",
  image: "/img/sample.jpg",
  classification01: "image",
  classification02: "Image",
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
        image="/img/common/iconSquare.svg"
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
            <div className="button--typeBack sM-l">
              <Link href={`/image`}>戻る</Link>
            </div>
            <div className="column--type01">
              <ul className="list--type01 sM-l">
                <li>
                  <Link href="/image/icon/icon-arrow">矢印のアイコン</Link>
                </li>
                <li>
                  <Link href="/image/icon/icon-change">
                    チェック・増やす・減る・閉じるのアイコン
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
