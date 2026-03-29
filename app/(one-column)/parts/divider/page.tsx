import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "区切り線",
  description: "様々なデザインの区切り線を紹介致します。",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
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
      >
        {data.title}
      </Topicpath>
      <div className={`contents__mainInner --typeFullSize ${styles.typeParts}`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts`}>戻る</Link>
            </div>

            <p>以下の区切り線のHTMLはhrタグに当該のCSSを付加ください。<br/>例　 {"<hr class=\"hr--typeXXX\" />"}</p>

            <p>実線の区切り線</p>
            <hr className={`sM-l ${styles["hr--type001"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type001 {
  border: none;/* リセット */
  border-top: 1px solid #000;
}
              `}
              </code>
            </pre>

            <p>二重線の区切り線</p>
            <hr className={`sM-l ${styles["hr--type002"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type002 {
  border: none;/* リセット */
  background-color: none;
  border-top: 1px solid #000;
}
              `}
              </code>
            </pre>

            <p>破線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type003"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type003 {
  border: none;/* リセット */
  border-top: 1px dashed #000;
}
              `}
              </code>
            </pre>

            <p>点線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type004"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type004 {
  border: none;/* リセット */
  border-top: 2px dotted #000;
}
              `}
              </code>
            </pre>

            <p>背景色付　破線の区切り線(破線の間隔も調整可)</p>
            <hr className={`sM-l sC ${styles["hr--type005"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type005 {
  border: none;/* リセット */
  /* 背景色と線の色と長さの設定 */
  background-color: #74ba97;
  background-image: linear-gradient(90deg, #000 50%, rgba(255, 255, 255, 0) 0%);
  /* 線の太さと間隔（0.6emの長さで0.1emの太さ） */
  height:0.1em;
  background-position: center;
  background-size: 0.6em 0.1em;
  background-repeat: repeat-x;
}
              `}
              </code>
            </pre>

            <p>背景色付　点線の区切り線(点線の間隔も調整可)</p>
            <hr className={`sM-l sC ${styles["hr--type006"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type006 {
  border: none;/* リセット */
  /* 背景色と線の色と長さの設定 */
  background-color: #74ba97;
  background-image: linear-gradient(90deg, #000 50%, rgba(255, 255, 255, 0) 0%);
  /* 線の太さと間隔（0.4emの長さで0.2emの太さ　点にする場合は長さに対して太さを2/1にする） */
  height:0.2em;
  background-position: center;
  background-size: 0.4em 0.2em;
  background-repeat: repeat-x;
}
              `}
              </code>
            </pre>

            <p>色違い二重実線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type007"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type007 {
  border: none;/* リセット */
  border-top: 0.3em solid #000;
  border-bottom: 0.3em solid #74ba97;
}
              `}
              </code>
            </pre>

            <p>色違い四重実線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type008"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type008 {
  border: none;/* リセット */
  border-top: 0.2em solid #000;/* 1番目の線 */
  border-bottom: 0.2em solid #74ba97;/* 4番目の線 */
  overflow:visible;
  &::after {
    content: " ";
    display: block;
    border-top: 0.2em solid #74ba97;/* 2番目の線 */
    border-bottom: 0.2em solid #000;/* 3番目の線 */
  }
}
              `}
              </code>
            </pre>

            <p>色違い六重実線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type009"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type009 {
  border: none;/* リセット */
  border-top: 0.2em solid #000;/* 1番目の線 */
  border-bottom: 0.2em solid #74ba97;/* 6番目の線 */
  overflow:visible;
  &::before {
    content: " ";
    display: block;
    border-top: 0.2em solid #74ba97;/* 2番目の線 */
    border-bottom: 0.2em solid #000;/* 3番目の線 */
  }
  &::after {
    content: " ";
    display: block;
    border-top: 0.2em solid #74ba97;/* 4番目の線 */
    border-bottom: 0.2em solid #000;/* 5番目の線 */
  }
}
              `}
              </code>
            </pre>

            <p>色違い二重破線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type010"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type010 {
  border-top: 0.3em dashed #000;
  border-bottom: 0.3em dashed #74ba97;
}
              `}
              </code>
            </pre>

            <p>色違い二重点線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type011"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type011 {
  border: none;/* リセット */
  height:0.7em;
  border-top: 0.3em dotted #000;
  border-bottom: 0.3em dotted #74ba97;
}
              `}
              </code>
            </pre>

            <p>影の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type012"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type012 {
  border: none;/* リセット */
  height: 0.5em;
  box-shadow: 0 0.5em 0.5em -0.5em rgba(0,0,0,.5) inset;
}
              `}
              </code>
            </pre>

            <p>グラデーションの区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type013"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type013 {
  border: none;/* リセット */
  height: 1px;
  background: linear-gradient(90deg, #FFF, #000, #FFF);
}
              `}
              </code>
            </pre>

            <p>中央テキスト　実線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type014"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type014 {
  border: none;/* リセット */
  border-top: 1px solid #000;
  text-align: center;
  overflow:visible;
  &::after {
    content: 'テキスト';
    font-size: 1.5em;
    display: inline-block;
    padding: 0 0.5em;
    color: #000;
    background: #FFF;/* 背景色 */
    position: relative;
    top: -0.8em;
  }
}
              `}
              </code>
            </pre>

            <p>中央画像　二重線の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type015"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type015 {
  border: none;/* リセット */
  border-top: 4px double #000;
  text-align: center;
  overflow:visible;
	&::after {
		content: "";
		width: 3em;
		height: 3em;
		display: inline-block;
		background:#FFF url("/img/icon/exclamation-circle.svg") no-repeat center center;
		background-size: 70% auto;
		position: relative;
		top: -1.5em;
	}
}
              `}
              </code>
            </pre>

            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/exclamation-circle.svg" download="icon">
                画像アイコンデータ　ダウンロード 
                <Image
                  className="icon01"
                  src="/img/icon/exclamation-circle.svg"
                  alt="アイコン"
                  width={16}
                  height={16}
                />
              </a>
            </div>

            <p>リピート画像の区切り線</p>
            <hr className={`sM-l sC ${styles["hr--type016"]}`} />
            <pre>
              <code className="language-css">
                {`
.hr--type016 {
  border: none;/* リセット */
  height: 0.5em;
  background:url("/img/icon/plus.svg") repeat-x center center;
  background-size:  0.5em 0.5em;
}
              `}
              </code>
            </pre>

            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/plus.svg" download="icon">
                画像アイコンデータ　ダウンロード 
                <Image
                  className="icon01"
                  src="/img/icon/plus.svg"
                  alt="アイコン"
                  width={16}
                  height={16}
                />
              </a>
            </div>





            <div className="button--typeBack sM-l">
              <Link href={`/parts`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
