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
            <div className="button--typeBack sM-l">
              <Link href={`/parts`}>戻る</Link>
            </div>

            <div className="column--type02">
              <div className={styles.simpleButton}>
                <div className={styles.type001}>
                  <Link href="/parts/simple-button/type001">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type002}>
                  <Link href="/parts/simple-button/type002">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type003}>
                  <Link href="/parts/simple-button/type003">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type004}>
                  <Link href="/parts/simple-button/type004">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type005}>
                  <Link href="/parts/simple-button/type005">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type006}>
                  <Link href="/parts/simple-button/type006">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type007}>
                  <Link href="/parts/simple-button/type007">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type008}>
                  <Link href="/parts/simple-button/type008">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type009}>
                  <Link href="/parts/simple-button/type009">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type010}>
                  <Link href="/parts/simple-button/type010">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type011}>
                  <Link href="/parts/simple-button/type011">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type012}>
                  <Link href="/parts/simple-button/type012">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type013}>
                  <Link href="/parts/simple-button/type013">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type014}>
                  <Link href="/parts/simple-button/type014">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type015}>
                  <Link href="/parts/simple-button/type015">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type016}>
                  <Link href="/parts/simple-button/type016">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type017}>
                  <Link href="/parts/simple-button/type017">詳細はこちら</Link>
                </div>
              </div>
              <div className={styles.simpleButton}>
                <div className={styles.type018}>
                  <Link href="/parts/simple-button/type018">詳細はこちら</Link>
                </div>
              </div>
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
