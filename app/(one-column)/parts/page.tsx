import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "パーツ一覧",
  description: "WEB制作で使用するパーツをここに置いています。",
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
      <div className="contents__mainInner --typeFullSize">
        <div className="inBase">
          <div className="inBase__inner">

            <div className="column--type01">
              <ul className="list--type01 sM-l">
                <li><Link href="/parts/simple-button">シンプルなボタン</Link></li>
                <li><Link href="/parts/image-button">画像・イメージを使用したボタン</Link></li>
                <li><Link href="/parts/divider">区切り線</Link></li>
                <li><Link href="/parts/headline">見出し</Link></li>
                <li><Link href="/parts/image-frame">画像の縁・フレーム・額</Link></li>
                <li><Link href="/parts/accordion-parts">アコーディオンパーツ</Link></li>
                <li><Link href="/parts/gallery-parts">ギャラリーパーツ</Link></li>
                <li><Link href="/parts/tab-parts">タブ切り替えパーツ</Link></li>
                <li><Link href="/parts/hamburger-button">ハンバーガーボタン</Link></li>
                <li><Link href="/parts/global-navi">グローバルナビ</Link></li>
                <li><Link href="/parts/contents-navi">コンテンツ内ナビ</Link></li>
                <li><Link href="/parts/smartphone-navi">スマートフォン用ナビ</Link></li>
                <li><Link href="/parts/speech-bubble">ふきだし</Link></li>
                <li><Link href="/parts/flow-parts">手順や流れの表示</Link></li>
                <li><Link href="/parts/call-to-action">お問い合わせパーツ</Link></li>
                <li><Link href="/parts/plan-parts">プランの表示</Link></li>
                <li><Link href="/parts/archive-list">記事リスト</Link></li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
