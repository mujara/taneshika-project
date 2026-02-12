import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

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
      <div className={`contents__mainInner --typeFullSize ${styles.typeParts}`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts`}>戻る</Link>
            </div>

            <div className="column--type01">
              <div className={`sM-l w80-pc sC ${styles["tabBox--type01"]}`}>
                <input
                  type="radio"
                  name="tab--type01__input"
                  id="tab--type01__label001"
                  defaultChecked
                />
                <label htmlFor="tab--type01__label001">
                  一つ目のタブの名前
                </label>

                <input
                  type="radio"
                  name="tab--type01__input"
                  id="tab--type01__label002"
                />
                <label htmlFor="tab--type01__label002">
                  二つ目のタブの名前
                </label>

                <input
                  type="radio"
                  name="tab--type01__input"
                  id="tab--type01__label003"
                />
                <label htmlFor="tab--type01__label003">
                  三つ目のタブの名前
                </label>

                <div className={styles["tab__content"]}>
                  「tab__content」というクラス名の中に隠す内容を入れる。
                  <br />
                  「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
                  <br />
                  <br />
                  <Link href="/parts/tab-parts/type001">
                    コードの詳細はこちら
                  </Link>
                </div>

                <div className={styles["tab__content"]}>
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  <br />
                  <Link href="/parts/tab-parts/type001">
                    コードの詳細はこちら
                  </Link>
                </div>

                <div className={styles["tab__content"]}>
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  <br />
                  <Link href="/parts/tab-parts/type001">
                    コードの詳細はこちら
                  </Link>
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
