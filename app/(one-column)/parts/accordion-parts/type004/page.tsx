import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import AccordionType04 from "./accordion";

// ページ情報
const data = {
  title: "開閉を利用したパーツ 4",
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
              <AccordionType04 />
            </div>

            <p className={`sM-l`}>
              「accordion__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="accordionBox--type04">
  <div class="accordion">
    <input type="checkbox" id="accordion--type04__label001" />
    <label for="accordion--type04__label001">
	    <div class="accordion__button">
	      <p>
	        <span>内容を表示する</span>
	        <span>内容を閉じる</span>
	      </p>
	      <div class="accordion__icon">
	        <div></div>
	        <div></div>
	      <!-- /.accordion__icon --></div>
	    <!-- /.accordion__button --></div>
    </label>
    <div class="accordion__content">
      項目タイトルの閉じられている内容です。
    <!-- /.accordion__content --></div>
  <!-- /.accordion --></div>
<!--//.accordionBox--></div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.accordionBox--type04 {
  overflow: hidden;
}
.accordionBox--type04 .accordion {
  position: relative;
  display: block;
  padding-bottom: 3em;
  text-align: center;
}
.accordionBox--type04 .accordion > label {
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
}
.accordionBox--type04 .accordion > label > .accordion__button {
  display: inline-block;
  padding: 0.5em 3em 0.5em 1.5em;
  background: #000;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
  border-radius: 3.7em;
  position: relative;
}
.accordionBox--type04 .accordion > label > .accordion__button > p {
  margin: 0;
  position: relative;
}
.accordionBox--type04 .accordion > label > .accordion__button > p > span {
  display: block;
  color: #fff;
  text-align: center;
  position: relative;
}
.accordionBox--type04 .accordion > label > .accordion__button > p > span:nth-child(2) {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.accordionBox--type04 .accordion > label > .accordion__button .accordion__icon {
  width: 1em;
  height: 2px;
  display: block;
  position: absolute;
  right: 1em;
  top: 50%;
  margin-top: -1px;
}
.accordionBox--type04 .accordion > label > .accordion__button .accordion__icon > div {
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.accordionBox--type04 .accordion > label > .accordion__button .accordion__icon > div:last-child {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.accordionBox--type04 .accordion > label > .accordion__button:hover {
  background: #666;
}
.accordionBox--type04 .accordion > input[type=checkbox] {
  display: none;
}
.accordionBox--type04 .accordion > input[type=checkbox]:checked + label + .accordion__content {
  height: auto;
  -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(10%, rgb(0, 0, 0)), to(rgb(0, 0, 0)));
  -webkit-mask-image: -webkit-linear-gradient(bottom, rgb(0, 0, 0) 10%, rgb(0, 0, 0));
          mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(10%, rgb(0, 0, 0)), to(rgb(0, 0, 0)));
          mask-image: linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(0, 0, 0));
}
.accordionBox--type04 .accordion > input[type=checkbox]:checked + label > .accordion__button {
  background: #999;
  color: #fff;
}
.accordionBox--type04 .accordion > input[type=checkbox]:checked + label > .accordion__button > p > span:nth-child(1) {
  opacity: 0;
}
.accordionBox--type04 .accordion > input[type=checkbox]:checked + label > .accordion__button > p > span:nth-child(2) {
  opacity: 1;
}
.accordionBox--type04 .accordion > input[type=checkbox]:checked + label > .accordion__button:hover {
  background: #666;
  color: #000;
}
.accordionBox--type04 .accordion > input[type=checkbox]:checked + label .accordion__icon div:last-child {
  -webkit-transform: none;
          transform: none;
}
.accordionBox--type04 .accordion > .accordion__content {
  text-align: left;
  height: 8em;
  padding: 0.5em 1em;
  overflow: hidden;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: block;
  -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(10%, rgba(0, 0, 0, 0)), to(rgb(0, 0, 0)));
  -webkit-mask-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0));
          mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(10%, rgba(0, 0, 0, 0)), to(rgb(0, 0, 0)));
          mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0));
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.accordionBox--type04 {
  overflow: hidden;
  .accordion {
	  position: relative;
	  display: block;
	  padding-bottom: 3em;
	  text-align: center;
	  &> label {
		  width: 100%;
		  display: block;
		  position: absolute;
		  bottom: 0;
		  left: 0;
		  &> .accordion__button {
			  display: inline-block;
			  padding: 0.5em 3em 0.5em 1.5em;
			  background: #000;
			  cursor: pointer;
			  transition: 0.3s all ease;
			  border-radius: 3.7em;
			  position: relative;
			  &> p {
				  margin: 0;
				  position: relative;
				  &> span {
					  display: block;
					  color: #fff;
					  text-align: center;
					  position: relative;
					  &:nth-child(2) {
						  width: 100%;
						  position: absolute;
						  top: 0;
						  left: 0;
						  opacity: 0;
						  transition: 0.3s all ease;
						}
					}
				}
				.accordion__icon {
					width: 1em;
					height: 2px;
					display: block;
					position: absolute;
					right: 1em;
					top: 50%;
					margin-top: -1px;
					&> div {
						background: #fff;
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
			  &:hover{
  				background: #666;
			  }
			}
		}
	  &> input[type="checkbox"] {
		  display: none;
		  &:checked{
		  	&+ label {
		  		&+ .accordion__content {
					  height: auto;
					  mask-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1));
					}
		  		&> .accordion__button {
					  background: #999;
					  color: #fff;
					  &> p > span{
						  &:nth-child(1) {
	  						opacity: 0;
							}
						  &:nth-child(2) {
	  						opacity: 1;
							}
						}
						&:hover {
						  background: #666;
						  color: #000;
						}
					}
		  		.accordion__icon div:last-child{
						transform: none;
					}
		 		}
		  }
		}
		&> .accordion__content {
		  text-align: left;
		  height: 8em;
		  padding: 0.5em 1em;
		  overflow: hidden;
		  transition: 0.5s;
		  display: block;
		  mask-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1));
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
