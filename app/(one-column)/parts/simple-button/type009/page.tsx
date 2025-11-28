import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 9",
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

            <div className={`tC sM-l ${styles.type009}`}>
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
  position: relative;
  padding: 0.8em 2.8em 0.8em 1.5em;
  position: relative;
}
.simpleButton a::after {
  content: "";
  width: 0.4em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/caret-right.svg") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  right: 1em;
  margin-top:-0.4em;
  transition: all 0.5s;
}
.simpleButton a::before {
  content: '';
  width: 100%;
  height: 0.2em;
  display:block;
  background: rgba(0,0,0,.6);
  position: absolute;
  top:100%;
  left: 0;
  border-radius: 0.1em;
  transition: .4s;
}
.simpleButton a:hover {
  color: #000;
}
.simpleButton a:hover::after {
  right: 0.8em;
}
.simpleButton a:hover::before {
  top: calc(100% - 0.2em);
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
  position: relative;
  padding: 0.8em 2.8em 0.8em 1.5em;
  position: relative;
  &::after {
    content: "";
    width: 0.4em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/caret-right.svg") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    top: 50%;
    right: 1em;
    margin-top:-0.4em;
    transition: all 0.5s;
  }
  &::before {
    content: '';
    width: 100%;
    height: 0.2em;
    display:block;
    background: rgba(0,0,0,.6);
    position: absolute;
    top:100%;
    left: 0;
    border-radius: 0.1em;
    transition: .4s;
  }
  &:hover {
    color: #000;
    &::after {
      right: 0.8em;
    }
    &::before {
      top: calc(100% - 0.2em);
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/caret-right.svg" download="icon">
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
