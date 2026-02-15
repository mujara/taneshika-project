import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import TabType01 from "./tab";

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
      <div className={`contents__mainInner --typeFullSize typeParts`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/parts/tab-parts`}>戻る</Link>
            </div>

            <div className="column--type01 sM">
              <TabType01 />
              <p>■URLでタブの内容を開く場合のリンク（※Javascript追加必要）</p>【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type001?tab=type01Label001">
                一つ目のタブの内容を開く
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type001?tab=type01Label002">
                二つ目のタブの内容を開く
              </a>
              】　 【
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/parts/tab-parts/type001?tab=type01Label003">
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
<div class="tabBox--type01">
  <input type="radio" name="tab--type01__input" id="tab--type01__label001" checked>
  <label for="tab--type01__label001">タブタイトル01</label>

  <input type="radio" name="tab--type01__input" id="tab--type01__label002">
  <label for="tab--type01__label002">タブタイトル02</label>

  <input type="radio" name="tab--type01__input" id="tab--type01__label003">
  <label for="tab--type01__label003">タブタイトル03</label>

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

            <h2>タブの内容をURLから表示する場合に記述するJavascript</h2>
            <p>
              URLのパラメータで判断している。
              <br />
              パラメータは
              <br />
              一つ目が「?tab=type01Label001」
              <br />
              二つ目が「?tab=type01Label002」
              <br />
              三つ目が「?tab=type01Label003」
              <br />
            </p>

            <pre>
              <code className="language-javascript">
                {`
// URLのパラメータを取得
let urlParam = location.search.substring(1);
	 
// タブのinputの要素を取得
let tabType01Elements = document.getElementsByName( "tab--type01__input" ) ;

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
	if (paramArray.tab == 'type01Label001') {
		tabType01Elements[0].checked = true;
	} else if (paramArray.tab == 'type01Label002') {
		tabType01Elements[1].checked = true;
	} else if (paramArray.tab == 'type01Label003') {
		tabType01Elements[2].checked = true;
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
