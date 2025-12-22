import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 15",
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

            <div className={`tC sM-l`}>
              <div className={`${styles.type015}`}>
                <a href="#">詳細はこちら</a>
              </div>
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
.simpleButton {
  position: relative;
  display: inline-block;
}
.simpleButton::before {
  content: "";
  width: 0.4em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/angle-right.svg") no-repeat center center;
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.4em;
  margin-left: 3.2em;
  transition: 0.3s all ease;
}
.simpleButton:hover::before {
  margin-left: 3.5em;
}
.simpleButton a {
  display: inline-block;
  line-height: 1.4em;
  padding: 0.8em 2.5em 0.8em 1.8em;
  position: relative;
  border: #000 solid 1px;
}
.simpleButton a::before {
  content: "";
  border: #000 solid 1px;
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
}
.simpleButton a::after {
  content: "";
  border: #000 solid 1px;
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
}
.simpleButton a:hover {
  color: #666;
}

              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.simpleButton {
  position: relative;
  display: inline-block;
  &::before {
    content: "";
    width: 0.4em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/angle-right.svg") no-repeat center center;
    background-size: 100% auto;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.4em;
    margin-left: 3.2em;
    transition: 0.3s all ease;
  }
  &:hover{
    &::before {
      margin-left: 3.5em;
    }
  }
  a{
    display: inline-block;
    line-height: 1.4em;
    padding: 0.8em 2.5em 0.8em 1.8em;
    position: relative;
    border: #000 solid 1px;
    &::before {
      content: "";
      border: #000 solid 1px;
      position: absolute;
      top: 1px;
      left: 1px;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
    }
    &::after {
      content: "";
      border: #000 solid 1px;
      position: absolute;
      top: 3px;
      left: 3px;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
    }
    &:hover{
      color: #666;
    }
  }
}
                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/angle-right.svg" download="icon">
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
