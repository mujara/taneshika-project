import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン",
  description: "様々なデザインの文字主体のシンプルなボタンを紹介致します。",
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
      <div className={`contents__mainInner --typeFullSize ${styles.typeParts}`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="column--type02">
              <div className={styles.simpleButton}>
                <div className={styles.type001}>
                  <Link href="/parts/simple-button/type001">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type001}>
                  <a href="#">詳細はこちら</a>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type001}>
                  <a href="#">詳細はこちら</a>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type001}>
                  <a href="#">詳細はこちら</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
