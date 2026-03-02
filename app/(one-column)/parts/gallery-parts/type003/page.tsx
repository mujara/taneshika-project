import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PartType03 from "./part";

// ページ情報
const data = {
  title: "画像ギャラリーのパーツ 3",
  description: "様々なデザインの画像ギャラリーのパーツ",
  image: "/img/sample.jpg",
  classification01: "parts",
  classification02: "Parts",
  affiliation_page_name01: "画像ギャラリーのパーツ",
  affiliation_page_slug01: "gallery-parts",
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
              <Link href={`/parts/gallery-parts`}>戻る</Link>
            </div>

            <div className="column--type01 sM">
              <PartType03 />
            </div>

            <p className={`sM-l`}>
              「input」のnameは設置するギャラリーごとに名前を付ける。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
              <br />
              ulタグのラベルはそれぞれ「前に戻る」、「次に進む」のボタン。
              <br />
              ずらしてラベルの名前をつける。
              <br />
              ※自動で表示を切り替えるにはjavascriptが必要。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="imageGalleryBox--type03 --autoImageGallery">
	<input type="radio" id="imageGallery--type03__label001" name="imageGallery--type03__input" checked/>
	<input type="radio" id="imageGallery--type03__label002" name="imageGallery--type03__input"/>
	<input type="radio" id="imageGallery--type03__label003" name="imageGallery--type03__input"/>
	<input type="radio" id="imageGallery--type03__label004" name="imageGallery--type03__input"/>
	<input type="radio" id="imageGallery--type03__label005" name="imageGallery--type03__input"/>

	<ul>
		<li><label for="imageGallery--type03__label005"></label></li>
		<li><label for="imageGallery--type03__label002"></label></li>
	</ul>
	<ul>
		<li><label for="imageGallery--type03__label001"></label></li>
		<li><label for="imageGallery--type03__label003"></label></li>
	</ul>
	<ul>
		<li><label for="imageGallery--type03__label002"></label></li>
		<li><label for="imageGallery--type03__label004"></label></li>
	</ul>
	<ul>
		<li><label for="imageGallery--type03__label003"></label></li>
		<li><label for="imageGallery--type03__label005"></label></li>
	</ul>
	<ul>
		<li><label for="imageGallery--type03__label004"></label></li>
		<li><label for="imageGallery--type03__label001"></label></li>
	</ul>

	<figure><img src="メイン画像の一枚目の画像パス" alt="メイン画像01"/></figure>
	<figure><img src="メイン画像の二枚目の画像パス" alt="メイン画像02"/></figure>
	<figure><img src="メイン画像の三枚目の画像パス" alt="メイン画像03"/></figure>
	<figure><img src="メイン画像の四枚目の画像パス" alt="メイン画像04"/></figure>
	<figure><img src="メイン画像の五枚目の画像パス" alt="メイン画像05"/></figure>

	<div class="imagePagination">
		<label for="imageGallery--type03__label001"></label>
		<label for="imageGallery--type03__label002"></label>
		<label for="imageGallery--type03__label003"></label>
		<label for="imageGallery--type03__label004"></label>
		<label for="imageGallery--type03__label005"></label>
	<!-- /.imagePagination --></div>
<!-- /.imageGalleryBox --></div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.imageGalleryBox--type03 {
  width: 100%;
  padding-top: 61.74%; /* 画像の比率　1.618:1 */
  overflow: hidden;
  text-align: center;
  position: relative;
  display: block;
  background: #eee;
  > ul {
    display: none;
    list-style: none;
    list-style: none;
    padding-left: 0;
    label {
      height: 2em;
      width: 2em;
      margin-top: -1em;
      top: 50%;
      position: absolute;
      display: block;
      cursor: pointer;
      border-width: 5px 5px 0 0;
      border-style: solid;
      border-color: #fff;
      opacity: 0.6;
      outline: 0;
      z-index: 3;
      &:hover {
        opacity: 1;
      }
    }
    > li:first-child label {
      left: 1em;
      transform: rotate(-135deg);
    }
    > li:last-child label {
      right: 1em;
      transform: rotate(45deg);
    }
  }
  input[type="radio"] {
    display: none;
  }
  .imagePagination {
    position: absolute;
    bottom: 1em;
    width: 100%;
    text-align: center;
    label {
      height: 1em;
      width: 1em;
      background-color: #fafafa;
      border-radius: 100%;
      display: inline-block;
      z-index: 2;
      cursor: pointer;
      opacity: 0.35;
      margin: 0 0.25em;
      &:hover {
        opacity: 0.75;
      }
    }
  }
  > figure {
    height: 100%;
    position: absolute;
    overflow-y: auto;
    opacity: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    a {
      width: 100%;
      height: 100%;
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
      -o-object-fit: contain;
      object-fit: contain;
    }
  }
  input:nth-of-type(1):checked ~ figure:nth-of-type(1),
  input:nth-of-type(2):checked ~ figure:nth-of-type(2),
  input:nth-of-type(3):checked ~ figure:nth-of-type(3),
  input:nth-of-type(4):checked ~ figure:nth-of-type(4),
  input:nth-of-type(5):checked ~ figure:nth-of-type(5){
    transition:
      opacity 0.6s ease-in-out,
      transform 0.6s;
    top: 0;
    left: 0;
    right: 0;
    opacity: 1;
    transform: scale(1);
  }
  input:nth-of-type(1):checked ~ ul:nth-of-type(1),
  input:nth-of-type(2):checked ~ ul:nth-of-type(2),
  input:nth-of-type(3):checked ~ ul:nth-of-type(3),
  input:nth-of-type(4):checked ~ ul:nth-of-type(4),
  input:nth-of-type(5):checked ~ ul:nth-of-type(5){
    display: block;
    opacity: 1;
  }
  input:nth-of-type(1):checked ~ .imagePagination label:nth-of-type(1),
  input:nth-of-type(2):checked ~ .imagePagination label:nth-of-type(2),
  input:nth-of-type(3):checked ~ .imagePagination label:nth-of-type(3),
  input:nth-of-type(4):checked ~ .imagePagination label:nth-of-type(4),
  input:nth-of-type(5):checked ~ .imagePagination label:nth-of-type(5){
    opacity: 1;
  }
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.imageGalleryBox--type03 {
    width: 100%;
    padding-top: 61.74%; /* 画像の比率　1.618:1 */
    overflow: hidden;
    text-align: center;
    position: relative;
    display:block;
	background: #EEE;
	>ul{
		display: none;
		list-style: none;
		list-style: none;
		padding-left: 0;
		label{
			height: 2em;
			width: 2em;
			margin-top: -1em;
			top: 50%;
			position: absolute;
			display: block;
			cursor: pointer;
			border-width: 5px 5px 0 0;
			border-style: solid;
			border-color: #FFF;
			opacity: 0.35;
			outline: 0;
			z-index: 3;
			&:hover {
				opacity: 1;
			}
		}
		>li:first-child label{
			left: 1em;
			transform: rotate(-135deg);
		}
		>li:last-child label{
			right: 1em;
			transform: rotate(45deg);
		}
	}
	input[type="radio"] {
		display: none;
	}
	.imagePagination {
		position: absolute;
		bottom: 1em;
		width: 100%;
		text-align: center;
		label {
			height: 1em;
			width: 1em;
			background-color: #fafafa;
			border-radius: 100%;
			display: inline-block;
			z-index: 2;
			cursor: pointer;
			opacity: 0.35;
			margin: 0 0.25em;
			&:hover {
				opacity: 0.75;
			}
		}
	}
	>figure{
		height: 100%;
		position: absolute;
		overflow-y: auto;
		opacity: 0;
		overflow: hidden;
		background-size: cover;
		background-position: center;
		img {
			width:100%;
			height:100%;
			object-fit: contain;
		}
	}
	// 5個の画像まで設定
	@for $value from 1 through 5 {
		input[type="radio"]{
			&:nth-of-type(#{$value}):checked{
				 ~ figure:nth-of-type(#{$value}) {
					transition: opacity 0.6s ease-in-out, transform 0.6s;
					top: 0;
					left: 0;
					right: 0;
					opacity: 1;
					transform: scale(1);
				}
				 ~ ul:nth-of-type(#{$value}) {
					display: block;
					opacity: 1;
				}
				 ~ .imagePagination label:nth-of-type(#{$value}) {
					opacity: 1;
				}
			}
		}
	}
}
              `}
              </code>
            </pre>

            <h2>ギャラリー内の画像を自動で切り替えるJavascript</h2>
            <p className={`sM-l`}>
              ギャラリー内のinputを取得して、setIntervalで切り替えています。
              <br />
              ギャラリーを囲う要素に「--autoImageGallery」というクラスをつけると動作します。
              <br />
              ホバーすると、一時停止します。
            </p>

            <pre>
              <code className="language-javascript">
                {`
function startAutoImageGallery(gallery) {
	// ラジオボタンの要素と数を取得
	const radios = gallery.querySelectorAll('input[type="radio"]');
	const length = radios.length;
	if (!length) return;

	let intervalId = null;

	function nextSlide() {
		const currentIndex = [...radios].findIndex(radio => radio.checked);
		const nextIndex = (currentIndex + 1) % length;
		radios[nextIndex].checked = true;
	}
	function start() {
		if (!intervalId) {
			//5000ミリ秒間隔で切り替える
			intervalId = setInterval(nextSlide, 5000);
		}
	}
	function stop() {
		clearInterval(intervalId);
		intervalId = null;
	}
	// 初回スタート
	start();
	// ホバーで停止
	gallery.addEventListener('mouseenter', stop);
	gallery.addEventListener('mouseleave', start);
}

window.addEventListener('load', function () {
	// 自動切り替えをするギャラリー要素を取得
	const galleries = document.querySelectorAll('.--autoImageGallery');
	galleries.forEach(gallery => {
		startAutoImageGallery(gallery);
	});
});
                `}
              </code>
            </pre>

            <div className="button--typeBack sM-l">
              <Link href={`/parts/gallery-parts`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
