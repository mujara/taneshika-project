import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "開閉を利用したパーツ 2",
  description: "様々なデザインの開閉を利用したアコーディオンのパーツ",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
  affiliation_page_name01: "開閉を利用したパーツ",
  affiliation_page_slug01: "accordion-parts",
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
              <Link href={`/parts/accordion-parts`}>戻る</Link>
            </div>

            <div className="column--type01">
              <div
                className={`sM-l w80-pc sC ${styles["accordionBox--type02"]}`}
              >
                <div className={styles.accordion}>
                  <input type="checkbox" id="accordion--type02__label001" />
                  <label htmlFor="accordion--type02__label001">
                    項目タイトル 01
                  </label>
                  <div className={styles["accordion__content"]}>
                    「accordion__content」というクラス名の中に隠す内容を入れる。
                    <br />
                    「label」のfoa名と「input」のid名は項目ごとにかぶらない名前を付ける。
                  </div>
                </div>

                <div className={styles.accordion}>
                  <input type="checkbox" id="accordion--type02__label002" />
                  <label htmlFor="accordion--type02__label002">
                    項目タイトル 02
                  </label>
                  <div className={styles["accordion__content"]}>
                    「accordion__content」というクラス名の中に隠す内容を入れる。
                    <br />
                    「label」のfoa名と「input」のid名は項目ごとにかぶらない名前を付ける。
                  </div>
                </div>

                <div className={styles.accordion}>
                  <input type="checkbox" id="accordion--type02__label003" />
                  <label htmlFor="accordion--type02__label003">
                    項目タイトル 03
                  </label>
                  <div className={styles["accordion__content"]}>
                    「accordion__content」というクラス名の中に隠す内容を入れる。
                    <br />
                    「label」のfoa名と「input」のid名は項目ごとにかぶらない名前を付ける。
                  </div>
                </div>
              </div>
            </div>

            <p className={`sM-l`}>
              「accordion__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfoa名と「input」のid名は項目ごとにかぶらない名前を付ける。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="accordionBox--type02">
  <!--項目ここから-->
  <div class="accordion">
    <input type="checkbox" id="accordion--type02__label001" />
    <label for="accordion--type02__label001">項目タイトル 01</label>
    <div class="accordion__content">
      <!--隠す中身ここから-->
      項目タイトルをクリックすると現れる内容はここに書く。
      <!--隠す中身ここまで-->
      <!--//.accordion__content-->
    </div>
    <!--//.accordion-->
  </div>
  <!--//項目ここまで-->

  <!--項目ここから-->
  <div class="accordion">
    <input type="checkbox" id="accordion--type02__label002" />
    <label for="accordion--type02__label002">項目タイトル 02</label>
    <div class="accordion__content">
      <!--隠す中身ここから-->
      項目タイトルをクリックすると現れる内容はここに書く。
      <!--隠す中身ここまで-->
      <!--//.accordion__content-->
    </div>
    <!--//.accordion-->
  </div>
  <!--//項目ここまで-->

  <!--項目ここから-->
  <div class="accordion">
    <input type="checkbox" id="accordion--type02__label003" />
    <label for="accordion--type02__label003">項目タイトル 03</label>
    <div class="accordion__content">
      <!--隠す中身ここから-->
      項目タイトルをクリックすると現れる内容はここに書く。
      <!--隠す中身ここまで-->
      <!--//.accordion__content-->
    </div>
    <!--//.accordion-->
  </div>
  <!--//項目ここまで-->
  <!--//.accordionBox-->
</div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.accordionBox--type01 {
  border-radius: 0.5em;
  overflow: hidden;
  border: #000 solid 1px;
}
.accordionBox--type01 .accordion + .accordion {
  border-top: #000 solid 1px;
}
.accordionBox--type01 .accordion > label {
  display: block;
  padding: 0.9em 1em;
  color: #000;
  background: #fff;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
}
.accordionBox--type01 .accordion > label::after {
  content: "";
  width: 0.8em;
  height: 0.8em;
  display: block;
  border-right: #000 solid 0.2em;
  border-bottom: #000 solid 0.2em;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  right: 1.4em;
  margin-top: -0.4em;
  transition: all 0.5s;
}
.accordionBox--type01 .accordion > label:hover {
  background: #ddd;
}
.accordionBox--type01 .accordion > input[type="checkbox"] {
  display: none;
}
.accordionBox--type01 .accordion > .accordion__content {
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
}
.accordionBox--type01
  .accordion
  > input[type="checkbox"]:checked
  + label
  + .accordion__content {
  height: auto;
  padding: 0.5em 1em;
  opacity: 1;
}
.accordionBox--type01 .accordion > input[type="checkbox"]:checked + label {
  background: #ddd;
}
.accordionBox--type01
  .accordion
  > input[type="checkbox"]:checked
  + label::after {
  transform: scale(1, -1) rotate(45deg);
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.accordionBox--type02 {
  overflow: hidden;
  .accordion {
    & > label {
      display: block;
      padding: 0.9em 1em 0.9em 3em;
      color: #fff;
      background: #666;
      cursor: pointer;
      transition: 0.3s all ease;
      position: relative;
      &::after {
        content: "";
        width: 0.8em;
        height: 0.8em;
        display: block;
        background: url("/img/icon/plus-circle.svg") no-repeat center center;
        background-size: 100% auto;
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%);
        position: absolute;
        top: 50%;
        left: 1.4em;
        margin-top: -0.4em;
        transition: all 0.5s;
      }
      &:hover {
        background: #888;
      }
    }
    &:nth-child(even) label {
      background: #444;
      &:hover {
        background: #888;
      }
    }
    & > input[type="checkbox"] {
      display: none;
      & + label + .accordion__content {
        height: 0;
        padding: 0;
        overflow: hidden;
        opacity: 0;
        transition: 0.5s;
      }
      &:checked {
        & + label {
          background: #ddd;
          color: #000;
          &:hover {
            background: #ccc;
          }
          &::after {
            background: url("/img/icon/minus-circle.svg") no-repeat center
              center;
            background-size: 100% auto;
          }
          &+ .accordion__content {
            height: auto;
            padding: 0.5em 1em;
            opacity: 1;
          }
        }
      }
    }
  }
}

                `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/plus-circle.svg" download="icon">
                画像アイコンデータ　ダウンロード　
                <Image
                  className="icon01"
                  src="/img/icon/plus-circle.svg"
                  alt="アイコン"
                  width={16}
                  height={16}
                />
              </a>
              <br />
              <a href="/img/icon/minus-circle.svg" download="icon">
                画像アイコンデータ　ダウンロード　
                <Image
                  className="icon01"
                  src="/img/icon/minus-circle.svg"
                  alt="アイコン"
                  width={16}
                  height={16}
                />
              </a>
            </div>

            <div className="button--typeBack sM-l">
              <Link href={`/parts/accordion-parts`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
