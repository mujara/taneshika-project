import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import AccordionType01 from "./accordion";

// ページ情報
const data = {
  title: "開閉を利用したパーツ 1",
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
      <div className={`contents__mainInner --typeFullSize typeParts`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts/accordion-parts`}>戻る</Link>
            </div>

            <div className="column--type01">
              <AccordionType01 />
            </div>

            <p className={`sM-l`}>
              「accordion__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
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
.accordionBox--type01 {
	border-radius: 0.5em;
	overflow: hidden;
	border: #000 solid 1px;
	.accordion{
		&+ .accordion {
			border-top: #000 solid 1px;
		}
		&> label {
			display: block;
			padding: 0.9em 1em;
			color: #000;
			background: #fff;
			cursor: pointer;
			transition: all 0.5s;
			position: relative;
			&::after {
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
			&:hover{
				background: #ddd;
			}
		}
		&> input[type="checkbox"] {
			display: none;
			&:checked + label{
				background: #ddd;
				&+ .accordion__content {
					height: auto;
					padding: 0.5em 1em;
					opacity: 1;
				}
				&::after{
					transform: scale(1, -1) rotate(45deg);
				}
			}
		}
		&> .accordion__content {
			height: 0;
			padding: 0;
			overflow: hidden;
			opacity: 0;
			transition: 0.5s;
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
