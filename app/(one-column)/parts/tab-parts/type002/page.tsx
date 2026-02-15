import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import TabType02 from "./tab";

// ページ情報
const data = {
  title: "タブのパーツ 2",
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
              <TabType02 />
              <p>■URLでタブの内容を開く場合のリンク（※Javascript追加必要）</p>【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type002?tab=type02Label001">
                一つ目のタブの内容を開く
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type002?tab=type02Label002">
                二つ目のタブの内容を開く
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type002?tab=type02Label003">
                三つ目のタブの内容を開く
              </a>
              】
            </div>

            <p className={`sM-l`}>
              「tab__content」というクラス名の中に隠す内容を入れる。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="tabBox--type02">
  <input type="radio" name="tab--type02__input" id="tab--type02__label001" checked>
  <label for="tab--type02__label001"><span>タブタイトル01</span></label>

  <input type="radio" name="tab--type02__input" id="tab--type02__label002">
  <label for="tab--type02__label002"><span>タブタイトル02</span></label>

  <input type="radio" name="tab--type02__input" id="tab--type02__label003">
  <label for="tab--type02__label003"><span>タブタイトル03</span></label>

  <div class="tab__content">
    <!--タブの内容ここから-->
    <p>タブタイトル01の内容がここに入ります</p>
    <!--タブの内容ここまで-->
  <!-- /.tab__content --></div>

  <div class="tab__content">
    <!--タブの内容ここから-->
    <p>タブタイトル02の内容がここに入ります</p>
    <!--タブの内容ここまで-->
  <!-- /.tab__content --></div>

  <div class="tab__content">
    <!--タブの内容ここから-->
    <p>タブタイトル03の内容がここに入ります</p>
    <!--タブの内容ここまで-->
  <!-- /.tab__content --></div>
<!--//.tabBox--></div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.tabBox--type02 {
  display: block;
  text-align: center;
}
.tabBox--type02 > label {
  width: calc(100% / 3);
  padding: 0 0.2em;
  font-size: 1.1em;
  text-align: center;
  color: #565656;
  display: inline-block;
}
.tabBox--type02 > label:hover span {
  opacity: 0.5;
}
.tabBox--type02 > label span {
  display: block;
  height: 100%;
  border-right: #CCC solid 0.5px;
  border-left: #FFF solid 0.5px;
  border-radius: 0.3em 0.3em 0 0;
  padding: 1em 1em;
  background: #DDD;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.tabBox--type02 > input[type=radio] {
  display: none;
}
.tabBox--type02 .tab__content {
  display: none;
  clear: both;
  position: relative;
  text-align: left;
  padding-top: 1.5em;
}
.tabBox--type02 .tab__content::before {
  content: " ";
  width: 100vw;
  height: 1px;
  background: #000;
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -50vw;
}
.tabBox--type02 input:nth-of-type(1):checked ~ .tab__content:nth-of-type(1),
.tabBox--type02 input:nth-of-type(2):checked ~ .tab__content:nth-of-type(2),
.tabBox--type02 input:nth-of-type(3):checked ~ .tab__content:nth-of-type(3) {
  display: block;
  animation-name: tab--type02--fade;
  animation-duration: 1s;
}
.tabBox--type02 > input:checked + label span {
  background: #000;
  color: #fff;
  pointer-events: none;
}
.tabBox--type02 > input:checked + label span:hover {
  opacity: 1;
}
@keyframes tab--type02--fade {
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
.tabBox--type02 {
  display: block;
  text-align:center;
  &>label{
    width: calc(100% / 3);
    padding:0 0.2em;
    font-size: 1.1em;
    text-align: center;
    color: #565656;
    display: inline-block;
    &:hover span{
      opacity: 0.5;
    }
    span{
      display:block;
      height:100%;
      border-right:#CCC solid 0.5px;
      border-left:#FFF solid 0.5px;
      border-radius: 0.3em 0.3em 0 0;
      padding: 1em 1em;
      background: #DDD;
      cursor :pointer;
      transition: all 0.5s ease;
    }
  }
  &>input[type="radio"] {
    display: none;
  }
  .tab__content {
    display: none;
    clear: both;
    position:relative;
    text-align:left;
    padding-top:1.5em;
    &::before {
      content:" ";
      width:100vw;
      height:1px;
      background:#000;
      display:block;
      position:absolute;
      top:0;
      left:50%;
      margin-left:-50vw;
    }
  }
  input:nth-of-type(1):checked ~ .tab__content:nth-of-type(1),
  input:nth-of-type(2):checked ~ .tab__content:nth-of-type(2),
  input:nth-of-type(3):checked ~ .tab__content:nth-of-type(3) {
    display: block;
    animation-name: tab--type02--fade;
    animation-duration: 1s;
  }
  &>input:checked + label span{
    background: #000;
    color: #fff;
    pointer-events: none;
    &:hover {
      opacity: 1;
    }
  }
}
@keyframes tab--type02--fade{
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
              一つ目が「?tab=type02Label001」
              <br />
              二つ目が「?tab=type02Label002」
              <br />
              三つ目が「?tab=type02Label003」
              <br />
            </p>

            <pre>
              <code className="language-javascript">
                {`
// URLのパラメータを取得
let urlParam = location.search.substring(1);
	 
// タブのinputの要素を取得
let tabType02Elements = document.getElementsByName( "tab--type02__input" ) ;

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
	if (paramArray.tab == 'type02Label001') {
		tabType02Elements[0].checked = true;
	} else if (paramArray.tab == 'type02Label002') {
		tabType02Elements[1].checked = true;
	} else if (paramArray.tab == 'type02Label003') {
		tabType02Elements[2].checked = true;
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
