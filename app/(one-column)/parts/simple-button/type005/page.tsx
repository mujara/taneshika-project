import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 5",
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

            <div className={`tC sM-l ${styles.type005}`}>
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
  display: inline-block;
  color: #000;
  line-height: 1.4;
  position:relative;
  padding-right:2.5em;
}
.simpleButton a::before {
  content: "";
  width:2em;
  height:2em;
  text-align:center;
  padding:0.5em 0 0 0;
  display:inline-block;
  background:rgba(0,0,0,.3);
  position:absolute;
  top:50%;
  right:0;
  margin-top:-1em;
  transition: all 0.3s ease;
}
.simpleButton a::after {
  content: "";
  width: 0.8em;
  height: 1em;
  display:inline-block;
  background:url("/img/icon/chevron-right.svg") no-repeat center center;
  background-size: 100% auto;
  position:absolute;
  top:50%;
  right:0.6em;
  margin-top:-0.5em;
  transition: all 0.3s ease;
}
.simpleButton a:hover {
  color:#000;
  transform:translateX(0.5em);
}
.simpleButton a:hover::after {
  opacity:.7;
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
  line-height: 1.4;
  position:relative;
  padding-right:2.5em;
  &::before {
    content: "";
    width:2em;
    height:2em;
    text-align:center;
    padding:0.5em 0 0 0;
    display:inline-block;
    background:rgba(#000,.3);
    position:absolute;
    top:50%;
    right:0;
    margin-top:-1em;
    transition: all 0.3s ease;
  }
  &::after {
    content: "";
    width: 0.8em;
    height: 1em;
    display:inline-block;
    background:url("/img/icon/chevron-right.svg") no-repeat center center;
    background-size: 100% auto;
    position:absolute;
    top:50%;
    right:0.6em;
    margin-top:-0.5em;
    transition: all 0.3s ease;
  }
  &:hover{
    color:#000;
    transform:translateX(0.5em);
    &::after{
      opacity:.7;        
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/chevron-right.svg" download="icon">
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
