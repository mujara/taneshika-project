import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PartType002 from "./part";

// ページ情報
const data = {
  title: "画像を使ったボタンのパーツ 2",
  description: "画像を使ったボタンのパーツ",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
  affiliation_page_name01: "画像を使ったボタンのパーツ",
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
              <PartType002 />
            </div>

            <pre>
              <code className="language-html">
                {`
<div class="imageButton--type002">
	<a href="#">
		<figure class="button__image"><img src="画像のパス" width="" height="" alt="" /></figure>
		<p class="button__title"><span>ボタンタイトルのテキスト</span></p>
	</a>
</div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.imageButton--type002 {
	a{
		display:inline-block;
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
		>.button__title{
			width:96%;
			height:92%;
			display:table;
			color:#FFF;
			font-size:1.2em;
			position:absolute;
			top:4%;
			left:2%;
			transition: 0.3s ease-in-out;
			background:rgba(0,0,0,.7);
			line-height:1.2em;
			&::after{
				content: "";
				width: 0.8em;
				height: 0.8em;
				display: block;
				background: url("/img/icon/arrow-right.svg") no-repeat center center;
				background-size: 100% auto;
				filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
						hue-rotate(228deg) brightness(106%) contrast(101%);
				position:absolute;
				bottom:0.5em;
				right:0.5em;
			}
			span{
				display: table-cell;
				vertical-align: middle;
				text-align:center;
				padding:0 0.5em;
			}
		}
		&:hover{
			>.button__title{
				background:rgba(0,0,0,.1);
				width:100%;
				height:100%;
				top:0;
				left:0;
			}
		}
	}
}
              `}
              </code>
            </pre>
            <div className="button--typeDownLoad sM-l tC">
              <a href="/img/icon/arrow-right.svg" download="icon">
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
