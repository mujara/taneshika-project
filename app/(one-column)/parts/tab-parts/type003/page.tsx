import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import TabType03 from "./tab";

// ページ情報
const data = {
  title: "タブのパーツ 3",
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
      <div className={`contents__mainInner --typeFullSize typeParts`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts/tab-parts`}>戻る</Link>
            </div>

            <div className="column--type01 sM">
              <TabType03 />
              <p>■URLでタブの内容を開く場合のリンク（※Javascript追加必要）</p>【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type003?tab=type03Label000">
                全ての項目
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type003?tab=type03Label001">
                カテゴリー1の内容を開く
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type003?tab=type03Label002">
                カテゴリー2の内容を開く
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type003?tab=type03Label003">
                カテゴリー3の内容を開く
              </a>
              】
            </div>

            <p className={`sM-l`}>
              最初は全ての項目は表示され、タブのボタンを押すとそのタブに応じた項目が表示さます。
              <br />
              「tab__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="tabBox--type03">
  <input type="radio" name="tab--type03__input" id="tab--type03__label000" checked>
  <label for="tab--type03__label000"><span>全ての項目</span></label>

  <input type="radio" name="tab--type03__input" id="tab--type03__label001">
  <label for="tab--type03__label001"><span>カテゴリー01の項目</span></label>

  <input type="radio" name="tab--type03__input" id="tab--type03__label002">
  <label for="tab--type03__label002"><span>カテゴリー02の項目</span></label>

  <input type="radio" name="tab--type03__input" id="tab--type03__label003">
  <label for="tab--type03__label003"><span>カテゴリー03の項目</span></label>

  <ul class="tab__content">
    <li class="--category01">項目01　カテゴリー01</li>
    <li class="--category02">項目02　カテゴリー02</li>
    <li class="--category02">項目03　カテゴリー02</li>
    <li class="--category01">項目04　カテゴリー01</li>
    <li class="--category03">項目05　カテゴリー03</li>
    <li class="--category01">項目06　カテゴリー01</li>
    <li class="--category03">項目07　カテゴリー03</li>
    <li class="--category02">項目08　カテゴリー02</li>
    <li class="--category01">項目09　カテゴリー01</li>
    <li class="--category01">項目10　カテゴリー01</li>
    <li class="--category03">項目11　カテゴリー03</li>
    <li class="--category01">項目12　カテゴリー01</li>
    <li class="--category02">項目13　カテゴリー02</li>
    <li class="--category03">項目14　カテゴリー03</li>
    <li class="--category01">項目15　カテゴリー01</li>
    <li class="--category01">項目16　カテゴリー01</li>
    <li class="--category03">項目17　カテゴリー03</li>
    <li class="--category03">項目18　カテゴリー03</li>
    <li class="--category01">項目19　カテゴリー01</li>
    <li class="--category02">項目20　カテゴリー02</li>
  </ul>
<!--//.tabBox--></div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.tabBox--type03 {
  display: block;
}
.tabBox--type03 > label {
  width: 25%;
  font-size: 1.1em;
  text-align: center;
  display: block;
  float: left;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 0.5em;
}
.tabBox--type03 > label:hover span {
  opacity: 0.5;
}
.tabBox--type03 > label span {
  display: block;
  height: 100%;
  border-radius: 0.3em;
  padding: 0.3em 0.6em;
  background: #DDD;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.tabBox--type03 > input[type=radio] {
  display: none;
}
.tabBox--type03 .tab__content {
  clear: both;
}
.tabBox--type03 .tab__content > li {
  transition: 0.4s;
  display: none;
}
.tabBox--type03 input:checked ~ .tab__content > li {
  animation-name: tab--type03--fade;
  animation-duration: 1s;
}
.tabBox--type03 input:nth-of-type(1):checked ~ .tab__content > li {
  display: block;
}
.tabBox--type03 input:nth-of-type(2):checked ~ .tab__content > li.--category01 {
  display: block;
}
.tabBox--type03 input:nth-of-type(3):checked ~ .tab__content > li.--category02 {
  display: block;
}
.tabBox--type03 input:nth-of-type(4):checked ~ .tab__content > li.--category03 {
  display: block;
}
.tabBox--type03 > input:checked + label span {
  background: #000;
  color: #fff;
  pointer-events: none;
}
.tabBox--type03 > input:checked + label span:hover {
  opacity: 1;
}
@keyframes tab--type03--fade {
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
.tabBox--type03 {
  	display: block;
  	&>label{
  		width: calc(100%/4);
  		font-size: 1.1em;
  		text-align: center;
  		display: block;
  		float: left;
		transition: all 0.5s ease;
	    cursor :pointer;
  		padding:0.5em;
		&:hover span{
			opacity: 0.5;
		}
		span{
			display:block;
			height:100%;
			border-radius: 0.3em;
			padding: 0.3em 0.6em;
			background: #DDD;
			cursor :pointer;
			transition: all 0.5s ease;
		}
	}
	&>input[type="radio"] {
		display: none;
	}
	.tab__content{
	  	clear: both;
		&>li{
			transition: .4s;
			display:none;
		}
	}
	input:checked ~ .tab__content>li {
		animation-name: tab--type03--fade;
		animation-duration: 1s;
	}
	input:nth-of-type(1):checked ~ .tab__content>li{ display:block;}
	input:nth-of-type(2):checked ~ .tab__content>li.--category01{ display:block;}
	input:nth-of-type(3):checked ~ .tab__content>li.--category02{ display:block;}
	input:nth-of-type(4):checked ~ .tab__content>li.--category03{ display:block;}
	&>input:checked + label span{
		background: #000;
		color: #fff;
		pointer-events: none;
		&:hover {
			opacity: 1;
		}
	}
}
@keyframes tab--type03--fade{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
                `}
              </code>
            </pre>

            <h2>タブの内容をURLから表示する場合に記述するJavascript</h2>
            <p>
              URLのパラメータで判断している。
              <br />
              パラメータは
              <br />
              全ての項目が「?tab=type03Label000」
              <br />
              カテゴリー01の項目が「?tab=type03Label001」
              <br />
              カテゴリー02の項目が「?tab=type03Label002」
              <br />
              カテゴリー03の項目が「?tab=type03Label003」
              <br />
            </p>

            <pre>
              <code className="language-javascript">
                {`
// URLのパラメータを取得
let urlParam = location.search.substring(1);
	 
// タブのinputの要素を取得
let tabType03Elements = document.getElementsByName( "tab--type03__input" ) ;

// URLにパラメータが存在する場合
if(urlParam) {
	// 「&」が含まれている場合は「&」で分割
	let param = urlParam.split('&');

	// パラメータを格納する用の配列を用意
	const paramArray = [];
	 
	// 用意した配列にパラメータを格納
	for (i = 0; i < param.length; i++) {
		var paramItem = param[i].split('=');
		paramArray[paramItem[0]] = paramItem[1];
	}
	 
	// パラメータtabで判断し、タブにチェックをつける
	if (paramArray.tab == 'type03Label000') {
		tabType03Elements[0].checked = true;
	} else if (paramArray.tab == 'type03Label001') {
		tabType03Elements[1].checked = true;
	} else if (paramArray.tab == 'type03Label002') {
		tabType03Elements[2].checked = true;
	} else if (paramArray.tab == 'type03Label003') {
		tabType03Elements[3].checked = true;
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
