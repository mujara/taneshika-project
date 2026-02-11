import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 19",
  description: "様々なデザインの文字主体のシンプルなボタン",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
  affiliation_page_name01: "シンプルなボタン",
  affiliation_page_slug01: "simple-button",
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
        affiliationPage01={data.affiliation_page_name01}
        affiliationPageLink01={`/${data.classification01}/${data.affiliation_page_slug01}`}
      >
        {data.title}
      </Topicpath>
      <div className={`contents__mainInner --typeFullSize ${styles.typeParts}`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts/simple-button`}>戻る</Link>
            </div>

            <div className={`tC sM-l ${styles.type019}`}>
              <a href="#">詳細はこちら</a>
            </div>

            <pre>
              <code className="language-html">
                {`
<div class="simpleButton">
  <a href="#">詳細はこちら</a>
</div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.simpleButton a {
  color: #000;
  display: inline-block;
  line-height: 1.4em;
  padding: 0.6em 3em 0.6em 2.2em;
  border-radius: 2.8em;
  border: #fff solid 0.2em;
  position: relative;
  background: #ccc;
  box-shadow: 0 0.3em 0 0 rgba(0, 0, 0, 1);
  transition: 0.3s all ease;
}
.simpleButton a::after {
  content: "";
  width: 1em;
  height: 1em;
  display: block;
  background: url("/img/icon/long-arrow-right.svg") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  right: 1.4em;
  margin-top: -0.5em;
  transition: 0.3s all ease;
}
.simpleButton a:hover {
  color: #000;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: translateY(0.3em);
}
.simpleButton a:hover:active {
  box-shadow: 0 -0.3em 0 0 rgba(0, 0, 0, 0.3);
  transform: translateY(0.5em);
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.simpleButton a {
  color: #000;
  display: inline-block;
  line-height: 1.4em;
  padding: 0.6em 3em 0.6em 2.2em;
  border-radius: 2.8em;
  border: #fff solid 0.2em;
  position: relative;
  background: #ccc;
  box-shadow: 0 0.3em 0 0 rgba(0, 0, 0, 1);
  transition: 0.3s all ease;
  &::after {
    content: "";
    width: 1em;
    height: 1em;
    display: block;
    background: url("/img/icon/long-arrow-right.svg") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    top: 50%;
    right: 1.4em;
    margin-top: -0.5em;
    transition: 0.3s all ease;
  }
  &:hover{
    color: #000;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: translateY(0.3em);
    &:active {
      box-shadow: 0 -0.3em 0 0 rgba(0, 0, 0, 0.3);
      transform: translateY(0.5em);
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/long-arrow-right.svg" download="icon">
                画像アイコンデータ　ダウンロード
              </a>
            </div>

            <div className="button--typeBack sM-l">
              <Link href={`/parts/simple-button`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
