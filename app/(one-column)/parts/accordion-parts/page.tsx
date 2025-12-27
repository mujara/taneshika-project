import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "開閉を利用したパーツ",
  description: "閉じる開くを利用したアコーディオンのパーツを紹介致します。",
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

            <div className="column--type01">
              <div
                className={`sM-l w80-pc sC ${styles["accordionBox--type01"]}`}
              >
                <div className={styles.accordion}>
                  <input type="checkbox" id="accordion--type01__label001" />
                  <label htmlFor="accordion--type01__label001">
                    項目タイトル 01
                  </label>
                  <div className={styles["accordion__content"]}>
                    項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
                    <br />
                    <br />
                    <Link href="/parts/accordion-parts/type001">
                      詳細はこちら
                    </Link>
                  </div>
                </div>

                <div className={styles.accordion}>
                  <input type="checkbox" id="accordion--type01__label002" />
                  <label htmlFor="accordion--type01__label002">
                    項目タイトル 02
                  </label>
                  <div className={styles["accordion__content"]}>
                    項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
                    <br />
                    <br />
                    <Link href="/parts/accordion-parts/type001">
                      詳細はこちら
                    </Link>
                  </div>
                </div>

                <div className={styles.accordion}>
                  <input type="checkbox" id="accordion--type01__label003" />
                  <label htmlFor="accordion--type01__label003">
                    項目タイトル 03
                  </label>
                  <div className={styles["accordion__content"]}>
                    項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
                    <br />
                    <br />
                    <Link href="/parts/accordion-parts/type001">
                      詳細はこちら
                    </Link>
                  </div>
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
