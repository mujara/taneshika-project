import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 2",
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

            <div className={`tC sM-l ${styles.type002}`}>
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
  color: #FFF;
  background: rgba(0, 0, 0, 0.6);
  border-bottom:  rgba(0, 0, 0, 0.8) solid 2px ;
  line-height: 1.4;
  padding: 0.6em 2.8em 0.6em 1.5em;
  border-radius: 0.2em;
  position: relative;
  transition: all 0.3s ease;
}
.simpleButton a::after {
  content: "";
  width: 0.8em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/chevron-circle-right.svg") no-repeat center center;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%);
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  right: 1em;
  margin-top: -0.4em;
  transition: all 0.3s ease;
}
.simpleButton a:hover {
  color:#FFF;
  background: rgba(0, 0, 0, 0.8);
  margin-bottom:1px;
  transform: translateY(2px);
}
.simpleButton a:active {
  border-bottom:  rgba(0, 0, 0, 0.6) solid 0 ;
  margin-bottom:2px;
  transform: translateY(4px);
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.simpleButton a {
  display: inline-block;
  color: #FFF;
  background: rgba(#000, 0.6);
  border-bottom:  rgba(#000, 0.6) solid 2px ;
  line-height: 1.4;
  padding: 0.6em 2.8em 0.6em 1.5em;
  border-radius: 0.2em;
  position: relative;
  transition: all 0.3s ease;
  &::after {
    content: "";
    width: 0.8em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/chevron-circle-right.svg") no-repeat center center;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%);
    background-size: 100% auto;
    position: absolute;
    top: 50%;
    right: 1em;
    margin-top: -0.4em;
    transition: all 0.3s ease;
  }
  &:hover {
    color:#FFF;
    background: rgba(#000, 0.8);
    margin-bottom:1px;
    transform: translateY(2px);
  }
  &:active {
    border-bottom:  rgba(#000, 0.6) solid 0 ;
    margin-bottom:2px;
    transform: translateY(4px);
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
