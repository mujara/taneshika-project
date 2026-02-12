import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";

// ページ情報
const data = {
  title: "タブのパーツ 1",
  description: "様々なデザインのタブのパーツ",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
  affiliation_page_name01: "タブのパーツ",
  affiliation_page_slug01: "tab-parts",
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
              <Link href={`/parts/tab-parts`}>戻る</Link>
            </div>

            <div className="column--type01">
              <div className={`sM-l w80-pc sC ${styles["tabBox--type01"]}`}>
                <input
                  type="radio"
                  name="tab--type01__input"
                  id="tab--type01__label001"
                  defaultChecked
                />
                <label htmlFor="tab--type01__label001">
                  一つ目のタブの名前
                </label>

                <input
                  type="radio"
                  name="tab--type01__input"
                  id="tab--type01__label002"
                />
                <label htmlFor="tab--type01__label002">
                  二つ目のタブの名前
                </label>

                <input
                  type="radio"
                  name="tab--type01__input"
                  id="tab--type01__label003"
                />
                <label htmlFor="tab--type01__label003">
                  三つ目のタブの名前
                </label>

                <div className={styles["tab__content"]}>
                  「tab__content」というクラス名の中に隠す内容を入れる。
                  <br />
                  「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
                </div>

                <div className={styles["tab__content"]}>
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                  二つ目の内容です。二つ目の内容です。二つ目の内容です。
                  <br />
                </div>

                <div className={styles["tab__content"]}>
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                  三つ目の内容です。三つ目の内容です。三つ目の内容です。
                  <br />
                </div>
              </div>
            </div>

            <p className={`sM-l`}>
              「tab__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfoa名と「input」のid名は項目ごとにかぶらない名前を付ける。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="accordionBox--type01">
  <!--項目ここから-->
  <div class="accordion">
    <input type="checkbox" id="accordion--type01__label001" />
    <label for="accordion--type01__label001">項目タイトル 01</label>
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
    <input type="checkbox" id="accordion--type01__label002" />
    <label for="accordion--type01__label002">項目タイトル 02</label>
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
    <input type="checkbox" id="accordion--type01__label003" />
    <label for="accordion--type01__label003">項目タイトル 03</label>
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
.tabBox--type01 {
  background-color: #fff;
  display: block;
}
.tabBox--type01 > label {
  width: calc(100% / 3);
  font-size: 1.1em;
  padding: 1em 0.5em;
  text-align: center;
  color: #565656;
  background: #ddd;
  border-right: #ccc solid 0.5px;
  border-left: #fff solid 0.5px;
  border-radius: 0.3em 0.3em 0 0;
  float: left;
  transition: all 0.5s ease;
  cursor: pointer;
  display: block;
}
.tabBox--type01 > label:hover {
  opacity: 0.5;
}
.tabBox--type01 > input[type="radio"] {
  display: none;
}
.tabBox--type01 .tab__content {
  clear: both;
  overflow: hidden;
  padding: 1em 2em;
  border: #808080 solid 1px;
  border-top: #000 solid 3px;
  transition: 0.4s;
  display: none;
}
.tabBox--type01 input:nth-of-type(1):checked ~ .tab__content:nth-of-type(1),
.tabBox--type01 input:nth-of-type(2):checked ~ .tab__content:nth-of-type(2),
.tabBox--type01 input:nth-of-type(3):checked ~ .tab__content:nth-of-type(3) {
  display: block;
  animation-name: tab--type01--fade;
  animation-duration: 1s;
}
.tabBox--type01 > input:checked + label {
  background-color: #000;
  color: #fff;
  pointer-events: none;
}
.tabBox--type01 > input:checked + label:hover {
  opacity: 1;
}
@keyframes tab--type01--fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.tabBox--type01 {
  background-color: #fff;
  display: block;
  &>label {
    width: calc(100% / 3);
    font-size: 1.1em;
    padding: 1em 0.5em;
    text-align: center;
    color: #565656;
    background: #ddd;
    border-right: #ccc solid 0.5px;
    border-left: #fff solid 0.5px;
    border-radius: 0.3em 0.3em 0 0;
    float: left;
    transition: all 0.5s ease;
    cursor: pointer;
    display: block;
    &:hover {
      opacity: 0.5;
    }
  }
  &>input[type="radio"] {
    display: none;
  }
  .tab__content {
    clear: both;
    overflow: hidden;
    padding: 1em 2em;
    border: #808080 solid 1px;
    border-top: #000 solid 3px;
    transition: 0.4s;
    display: none;
  }
  input:nth-of-type(1):checked ~ .tab__content:nth-of-type(1),
  input:nth-of-type(2):checked ~ .tab__content:nth-of-type(2),
  input:nth-of-type(3):checked ~ .tab__content:nth-of-type(3) {
    display: block;
    animation-name: tab--type01--fade;
    animation-duration: 1s;
  }
  &> input:checked + label {
    background-color: #000;
    color: #fff;
    pointer-events: none;
    &:hover {
      opacity: 1;
    }
  }
}
@keyframes tab--type01--fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
                `}
              </code>
            </pre>

            <div className="button--typeBack sM-l">
              <Link href={`/parts/tab-parts`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
