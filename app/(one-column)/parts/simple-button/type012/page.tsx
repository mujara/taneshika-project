import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "シンプルなボタン 12",
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

            <div className={`tC sM-l ${styles.type012}`}>
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
  background-color: #333333;
  border: #1a1a1a solid 2px;
  border-bottom: #0d0d0d solid 2px;
  box-shadow: 0 1px 1px -1px rgba(255, 255, 255, 0.9) inset,
    0 40px 20px -20px rgba(255, 255, 255, 0.15) inset,
    0 -1px 1px -1px rgba(0, 0, 0, 0.7) inset,
    0 -40px 20px -20px rgba(0, 0, 0, 0.06) inset;
  display: inline-block;
  line-height: 1.4em;
  padding: 0.5em 3em 0.5em 1.8em;
  font-weight: normal;
  border-radius: 0.2em;
  vertical-align: bottom;
  overflow: hidden;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s all ease;
  position: relative;
}
.simpleButton a::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: rotate(-19deg) translateY(-1.3em) scale(1.05);
  filter: blur(1px);
  background-image: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 0.12) 20%,
    rgba(255, 255, 255, 0)
  );
  transition: 0.3s all ease;
}
.simpleButton a::after {
  content: "";
  width: 0.4em;
  height: 0.8em;
  display: block;
  background: url("/img/icon/caret-right.svg") no-repeat center center;
  background-size: 100% auto;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
    hue-rotate(228deg) brightness(106%) contrast(101%);
  position: absolute;
  top: 50%;
  right: 1.4em;
  margin-top: -0.4em;
  transition: all 0.5s;
}
.simpleButton a:hover {
  color: #fff;
  transition: all 0.5s;
  background-color: #000;
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
.simpleButton a {
  color: #FFF;
  background-color: #333333;
  border: #1a1a1a solid 2px;
  border-bottom: #0d0d0d solid 2px;
  box-shadow: 0 1px 1px -1px rgba(255, 255, 255, 0.9) inset,
    0 40px 20px -20px rgba(255, 255, 255, 0.15) inset,
    0 -1px 1px -1px rgba(0, 0, 0, 0.7) inset,
    0 -40px 20px -20px rgba(0, 0, 0, 0.06) inset;
  display: inline-block;
  line-height: 1.4em;
  padding: 0.5em 3em 0.5em 1.8em;
  font-weight: normal;
  border-radius: 0.2em;
  vertical-align: bottom;
  overflow: hidden;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s all ease;
  position: relative;
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-19deg) translateY(-1.3em) scale(1.05);
    filter: blur(1px);
    background-image: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.12) 20%,
      rgba(255, 255, 255, 0)
    );
    transition: 0.3s all ease;
  }
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: rotate(-19deg) translateY(-1.3em) scale(1.05);
    filter: blur(1px);
    background-image: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.12) 20%,
      rgba(255, 255, 255, 0)
    );
    transition: 0.3s all ease;
  }
  &::after {
    content: "";
    width: 0.4em;
    height: 0.8em;
    display: block;
    background: url("/img/icon/caret-right.svg") no-repeat center center;
    background-size: 100% auto;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(228deg) brightness(106%) contrast(101%);
    position: absolute;
    top: 50%;
    right: 1.4em;
    margin-top: -0.4em;
    transition: all 0.5s;
  }
  &:hover {
    color: #fff;
    transition: all 0.5s;
    background-color: #000;
    &::after {
      right: 1.2em;
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
