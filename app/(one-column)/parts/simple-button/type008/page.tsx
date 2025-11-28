import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 8",
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

            <div className={`tC sM-l ${styles.type008}`}>
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
  color: #FFF;
  display: inline-block;
  padding: 0.6em 2.8em 0.6em 1.5em;
  position: relative;
  border-radius: 2px;
  background-image: linear-gradient(-90deg,rgba(0,0,0,.2), rgba(0,0,0,.7));
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .4);
  transition: .5s;
  background-size: 200%;
  border-radius:0.2em;
}
.simpleButton a::after {
  content: "";
  width: 0.8em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/arrow-right.svg") no-repeat center center;
  background-size: 100% auto;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(228deg) brightness(106%) contrast(101%);
  position: absolute;
  top: 50%;
  right: 1.4em;
  margin-top:-0.5em;
  transition: all 0.5s;
}
.simpleButton a:hover {
  color: #FFF;
  background-position: right center;
}
.simpleButton a:hover::after{
  right: 1.2em;
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.simpleButton a {
  color: #FFF;
  display: inline-block;
  padding: 0.6em 2.8em 0.6em 1.5em;
  position: relative;
  border-radius: 2px;
  background-image: linear-gradient(-90deg,rgba(#000,.2), rgba(#000,.7));
  text-shadow: 1px 1px 2px rgba(#000, .4);
  transition: .5s;
  background-size: 200%;
  border-radius:0.2em;
  &::after {
    content: "";
    width: 0.8em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/arrow-right.svg") no-repeat center center;
    background-size: 100% auto;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(228deg) brightness(106%) contrast(101%);
    position: absolute;
    top: 50%;
    right: 1.4em;
    margin-top:-0.5em;
    transition: all 0.5s;
  }
  &:hover {
    color: #FFF;
    background-position: right center;
    &::after{
      right: 1.2em;
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/arrow-right.svg" download="icon">
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
