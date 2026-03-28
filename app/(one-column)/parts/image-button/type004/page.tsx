import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PartType004 from "./part";

// ページ情報
const data = {
  title: "画像・イメージを使用するボタンのパーツ 4",
  description: "画像・イメージを使用するボタンのパーツ",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
  affiliation_page_name01: "画像・イメージを使用するボタンのパーツ",
  affiliation_page_slug01: "image-button",
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
              <Link href={`/parts/image-button`}>戻る</Link>
            </div>

            <div className="column--type03 sM">
              <PartType004 />
            </div>

            <pre>
              <code className="language-html">
                {`
<div class="imageButton--type004">
	<a href="#">
		<figure class="button__image"><img src="画像のパス" width="" height="" alt="" /></figure>
		<p class="button__label">ボタンのラベルのテキスト</p>
		<p class="button__title">ボタンタイトルのテキスト</p>
	</a>
</div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.imageButton--type004 {
	a{
		display:block;
		position:relative;
		z-index:1;
		>.button__image{
			overflow:hidden;
			img{
				width:100%;
				height:auto;
				transition: transform 0.3s ease;
				z-index:-1;
			}
		}
		&::before{
			content:" ";
			width:100%;
			height:100%;
			display:block;
			position:absolute;
			top:0;
			left:0;
			background-image:linear-gradient(0deg,rgba(0,0,0,1),rgba(0,0,0,0) 50%);
			opacity:.3;
			transition: opacity 0.3s ease-in-out;
			z-index:1;
		}
		&::after {
			content: "";
			width: 0.8em;
			height: 0.8em;
			display: block;
			background: url("/img/icon/arrow-circle-right.svg") no-repeat center center;
			background-size: 100% auto;
			filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
					hue-rotate(228deg) brightness(106%) contrast(101%);
			position: absolute;
			bottom:0.5em;
			right:0.5em;
	    	z-index:1;
		}
		>.button__label{
			position:absolute;
			top:0;
			right:0;
			background:#FFF;
			padding:0.3em 1em 0.5em;
			font-size:0.6em;
			line-height:1.1em;
			display:inline-block;
			z-index:1;
		}
		>.button__title{
			color:#FFF;
			font-size:0.95em;
			line-height:1.3em;
			font-weight:bold;
			margin-bottom:0;
			padding-right:1.5em;
			position:absolute;
			left:0.5em;
			bottom:0.5em;
			z-index:1;
		}
		&:hover{
			>.button__image img{
				transform: scale(1.1);
			}
			&::before{
				opacity:.2;
			}
		}
	}
}
@media print, screen and (min-width: 768px) {
	.imageButton--type004 a{
		>.button__label{
			font-size:0.8em;
		}
		>.button__title{
			font-size:1.3em;
		}
	}
}
              `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/arrow-circle-right.svg" download="icon">
                画像アイコンデータ　ダウンロード
              </a>
            </div>




            <div className="button--typeBack sM-l">
              <Link href={`/parts/image-button`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
