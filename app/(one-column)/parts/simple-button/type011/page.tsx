import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 11",
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

            <div className={`tC sM-l ${styles.type011}`}>
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
  background-image: linear-gradient(-45deg, #f0f0f0, #ebebeb);
  border-top: #fff solid 1px;
  border-left: #ebebeb solid 1px;
  border-right: #ebebeb solid 1px;
  border-bottom: #ccc solid 1px;
  display: inline-block;
  line-height: 1.4em;
  padding: 0.6em 3em 0.6em 1.6em;
  border-radius: 0.25em;
  vertical-align: bottom;
  position: relative;
  box-shadow: 0 1.31em 0 0 rgba(255, 255, 255, 0.5) inset;
  transition: 0.3s all ease;
}
.simpleButton a::after {
  content: "";
  width: 0.8em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/chevron-circle-right.svg") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  right: 1.4em;
  margin-top: -0.4em;
  transition: 0.3s all ease;
}
.simpleButton a:hover {
  color: #000;
  box-shadow: 0 1.31em 0 0 rgba(255, 255, 255, 0.2) inset;
}
.simpleButton a:hover::after {
  right: 1.2em;
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.simpleButton{
  a {
    color: #000;
    background-image: linear-gradient(-45deg, #f0f0f0, #ebebeb);
    border-top: #fff solid 1px;
    border-left: #ebebeb solid 1px;
    border-right: #ebebeb solid 1px;
    border-bottom: #ccc solid 1px;
    display: inline-block;
    line-height: 1.4em;
    padding: 0.6em 3em 0.6em 1.6em;
    border-radius: 0.25em;
    vertical-align: bottom;
    position: relative;
    box-shadow: 0 1.31em 0 0 rgba(255, 255, 255, 0.5) inset;
    transition: 0.3s all ease;
  }
  &::after {
    content: "";
    width: 0.8em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/chevron-circle-right.svg") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    top: 50%;
    right: 1.4em;
    margin-top: -0.4em;
    transition: 0.3s all ease;
  }
  &:hover {
    color: #000;
    box-shadow: 0 1.31em 0 0 rgba(255, 255, 255, 0.2) inset;
    &::after {
      right: 1.2em;
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/chevron-circle-right.svg" download="icon">
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
