import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import AccordionType03 from "./accordion";

// ページ情報
const data = {
  title: "開閉を利用したパーツ 3",
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
              <AccordionType03 />
            </div>

            <p className={`sM-l`}>
              「accordion__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="accordionBox--type03">
  <!--項目ここから-->
  <div class="accordion">
    <input type="checkbox" id="accordion--type03__label001" />
    <label for="accordion--type03__label001">
      <span>項目タイトル 01</span>
      <div class="accordion__icon">
        <div></div>
        <div></div>
        <!-- /.accordion__icon -->
      </div>
    </label>
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
    <input type="checkbox" id="accordion--type03__label002" />
    <label for="accordion--type03__label002">
      <span>項目タイトル 02</span>
      <div class="accordion__icon">
        <div></div>
        <div></div>
        <!-- /.accordion__icon -->
      </div>
    </label>
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
    <input type="checkbox" id="accordion--type03__label003" />
    <label for="accordion--type03__label003">
      <span>項目タイトル 03</span>
      <div class="accordion__icon">
        <div></div>
        <div></div>
        <!-- /.accordion__icon -->
      </div>
    </label>
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
.accordionBox--type03 {
  overflow: hidden;
}
.accordionBox--type03 .accordion > label {
  display: block;
  padding: 1em 5em 1em 3em;
  background: #fff;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: 3.7em;
  position: relative;
  box-shadow: 0px 0px 0.5em rgba(0, 0, 0, 0.2);
  margin: 0.5em;
}
.accordionBox--type03 .accordion > label:hover {
  background: #efefef;
}
.accordionBox--type03 .accordion > label .accordion__icon {
  width: 1em;
  height: 2px;
  display: block;
  position: absolute;
  right: 2em;
  top: 50%;
  margin-top: -1px;
}
.accordionBox--type03 .accordion > label .accordion__icon > div {
  background: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s ease;
}
.accordionBox--type03 .accordion > label .accordion__icon > div:last-child {
  transform: rotate(90deg);
}
.accordionBox--type03 .accordion > input[type="checkbox"] {
  display: none;
}
.accordionBox--type03 .accordion > .accordion__content {
  height: 0;
  padding: 0;
  overflow: hidden;
  opacity: 0;
  transition: 0.5s;
}
.accordionBox--type03
  .accordion
  > input[type="checkbox"]:checked
  + label
  + .accordion__content {
  height: auto;
  padding: 0.5em 1em;
  opacity: 1;
}
.accordionBox--type03 .accordion > input[type="checkbox"]:checked + label {
  background: #ddd;
  color: #000;
}
.accordionBox--type03
  .accordion
  > input[type="checkbox"]:checked
  + label:hover {
  background: #ddd;
  color: #000;
}
.accordionBox--type03
  .accordion
  > input[type="checkbox"]:checked
  + label
  .accordion__icon
  div:last-child {
  transform: none;
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.accordionBox--type03 {
  overflow: hidden;
  .accordion {
    & > label {
      display: block;
      padding: 1em 5em 1em 3em;
      background: #fff;
      cursor: pointer;
      transition: 0.3s all ease;
      border-radius: 3.7em;
      position: relative;
      box-shadow: 0px 0px 0.5em rgba(0, 0, 0, 0.2);
      margin: 0.5em;
      &:hover {
        background: #efefef;
      }
      .accordion__icon {
        width: 1em;
        height: 2px;
        display: block;
        position: absolute;
        right: 2em;
        top: 50%;
        margin-top: -1px;
        & > div {
          background: #000;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: 0.4s ease;
          &:last-child {
            transform: rotate(90deg);
          }
        }
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
            background: #ddd;
            color: #000;
          }
          & + .accordion__content {
            height: auto;
            padding: 0.5em 1em;
            opacity: 1;
          }
          .accordion__icon > div:last-child {
            transform: none;
          }
        }
      }
    }
  }
}
                `}
              </code>
            </pre>

            <div className="button--typeBack sM-l">
              <Link href={`/parts/accordion-parts`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
