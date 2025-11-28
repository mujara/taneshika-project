import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 4",
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

            <div className={`tC sM-l ${styles.type004}`}>
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
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  line-height: 1.4;
  padding: 0.6em 2.8em 0.6em 1.5em;
  display: inline-block;
  position: relative;
  border-radius: 0.2em;
  transition: all 0.3s ease;
  z-index:1;
  overflow:hidden;
}
.simpleButton a::before {
  content: "";
  width:100%;
  height:200%;
  display: block;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
  border-radius: 0.3em;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  transition: all 0.3s ease;
}
.simpleButton a::after {
  content: "";
  width: 0.8em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/arrow-circle-o-right.svg") no-repeat center center;
  background-size: 100% auto;
  filter: drop-shadow(1px 1px 1px rgba(255, 255, 255, 1)); 
  position: absolute;
  top: 50%;
  right: 1.4em;
  margin-top:-0.4em;
  transition: all 0.3s ease;
}
.simpleButton a:hover {
  color: #000;
}
.simpleButton a:hover::before{
  top:-50%;
}
.simpleButton a:hover::after{
  right: 1em;
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.simpleButton a {
  color: #000;
  text-shadow: 1px 1px 1px rgba(#FFF, 1);
  line-height: 1.4;
  padding: 0.6em 2.8em 0.6em 1.5em;
  display: inline-block;
  position: relative;
  border-radius: 0.2em;
  transition: all 0.3s ease;
  z-index:1;
  overflow:hidden;
  &::before{
    content: "";
    width:100%;
    height:200%;
    display: block;
    background-image: linear-gradient(180deg, rgba(#000, 0.1), rgba(#000, 0.3));
    border-radius: 0.3em;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    transition: all 0.3s ease;
  }
  &::after{
    content: "";
    width: 0.8em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/arrow-circle-o-right.svg") no-repeat center center;
    background-size: 100% auto;
    filter: drop-shadow(1px 1px 1px rgba(#FFF, 1)); 
    position: absolute;
    top: 50%;
    right: 1.4em;
    margin-top:-0.4em;
    transition: all 0.3s ease;
  }
  &:hover{
    color: #000;
    &::before{
      top:-50%;
    }
    &::after{
      right: 1em;
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/arrow-circle-o-right.svg" download="icon">
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
