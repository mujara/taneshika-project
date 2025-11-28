import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 7",
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

            <div className={`tC sM-l ${styles.type007}`}>
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
  background: rgba(0,0,0,.2);
  border: #FFF solid 1px;
  box-shadow: 0px 0px 0px 5px rgba(0,0,0,.2);/* 外枠 */
  display: inline-block;
  position: relative;
  padding: 0.6em 3em 0.6em 1.2em;
  transition: all 0.3s ease;
  margin-bottom:5px;
}
.simpleButton a::after {
  content: "";
  width: 1.3em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/long-arrow-right.svg") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  right: 1.2em;
  margin-top:-0.4em;
  transition: all 0.5s;
}
.simpleButton a:hover {
  color: #000;
  background:rgba(0,0,0,.3);
  box-shadow: 0px 0px 0px 5px rgba(0,0,0,.3);/* 外枠 */
  border: #FFF dotted 1px;
}
.simpleButton a:hover::after {
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
  background: rgba(#000,.2);
  border: #FFF solid 1px;
  box-shadow: 0px 0px 0px 5px rgba(#000,.2);
  display: inline-block;
  position: relative;
  padding: 0.6em 3em 0.6em 1.2em;
  transition: all 0.3s ease;
  margin-bottom:5px;
  &::after {
    content: "";
    width: 1.3em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/long-arrow-right.svg") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    top: 50%;
    right: 1.2em;
    margin-top:-0.4em;
    transition: all 0.5s;
  }
  &:hover {
    color: #000;
    background:rgba(#000,.3);
    box-shadow: 0px 0px 0px 5px rgba(#000,.3);
    border: #FFF dotted 1px;
    &::after{
      right: 1em;
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
