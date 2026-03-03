import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import PartType01 from "./part";

// ページ情報
const data = {
  title: "画像ギャラリーのパーツ 1",
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
              <PartType01 />
            </div>

            <p className={`sM-l`}>
              「input」のnameは設置するギャラリーごとに名前を付ける。
              <br />
              画像はメイン画像とサムネイル画像を用意する。
              <br />
              「label」のfor名と「input」のid名は項目ごとにかぶらない名前を付ける。
              <br />
              メイン画像とそれに対応するサムネイルを紐づけている。
              <br />
              ※自動で表示を切り替えるにはjavascriptが必要。
            </p>

            <pre>
              <code className="language-html">
                {`
<div class="imageGalleryBox--type01">
	<input type="radio" id="imageGallery--type01__label001" name="imageGallery--type01__input" checked/>
	<figure><img src="メイン画像の一枚目の画像パス" alt="メイン画像01"/></figure>

	<input type="radio" id="imageGallery--type01__label002" name="imageGallery--type01__input"/>
	<figure><img src="メイン画像の二枚目の画像パス" alt="メイン画像02"/></figure>

	<input type="radio" id="imageGallery--type01__label003" name="imageGallery--type01__input"/>
	<figure><img src="メイン画像の三枚目の画像パス" alt="メイン画像03"/></figure>

	<input type="radio" id="imageGallery--type01__label004" name="imageGallery--type01__input"/>
	<figure><img src="メイン画像の四枚目の画像パス" alt="メイン画像04"/></figure>

	<div class="imageGallery">
		<label for="imageGallery--type01__label001"><img src="サムネイル画像の一枚目の画像パス" alt="サムネイル画像01"/></label>
		<label for="imageGallery--type01__label002"><img src="サムネイル画像の二枚目の画像パス" alt="サムネイル画像02"/></label>
		<label for="imageGallery--type01__label003"><img src="サムネイル画像の三枚目の画像パス" alt="サムネイル画像03"/></label>
		<label for="imageGallery--type01__label004"><img src="サムネイル画像の四枚目の画像パス" alt="サムネイル画像04"/></label>
	<!-- /.imageGallery --></div>
<!-- /.imageGalleryBox --></div>
                `}
              </code>
            </pre>

            <pre>
              <code className="language-css">
                {`
.imageGalleryBox--type01 {
	display: block;
	position: relative;
	padding-top: 20em;
	input[type=radio] {
		position: absolute;
		opacity: 0;
		visibility: hidden;
	}
	input[type=radio]:checked + figure {
		opacity: 1;
		z-index: 1;
	}
	input[type=radio] + figure {
		width: 100%;
		height: 20em;
		background: #EEE;
		position: absolute;
		display: block;
		top: 0;
		left: 0;
		opacity: 0;
		-webkit-transition: opacity 0.3s ease-in-out;
		transition: opacity 0.3s ease-in-out;
		overflow: hidden;
	}
	input[type=radio] + figure img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	input[type=radio] + figure a {
		display: block;
		width: 100%;
		height: 100%;
	}
	input:nth-of-type(1):checked ~ .imageGallery label:nth-of-type(1) img,
	input:nth-of-type(2):checked ~ .imageGallery label:nth-of-type(2) img,
	input:nth-of-type(3):checked ~ .imageGallery label:nth-of-type(3) img,
	input:nth-of-type(4):checked ~ .imageGallery label:nth-of-type(4) img {
		box-shadow: 0 0 0 3px #000;
		opacity: 0.8;
	}
	> .imageGallery {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 0.25em;
		label {
			width: 25%;
			padding: 0.5em;
			display: block;
			cursor: pointer;
			img {
				width: 100%;
				-webkit-transition: opacity 0.1s ease-in-out;
				transition: opacity 0.1s ease-in-out;
				&:hover{
					opacity: 0.8;
				}
			}
		}
	}
}
              `}
              </code>
            </pre>

            <pre>
              <code className="language-sass">
                {`
.imageGalleryBox--type01 {
  // 変数
  $imageGalleryBoxType01Height: 20em; // メイン画像の高さ
  $imageGalleryBoxType01Count: 4; // ギャラリーのスライド数

  display: block;
  position: relative;
  padding-top: $imageGalleryBoxType01Height;
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    &:checked + figure {
      opacity: 1;
      z-index: 1;
    }
    + figure {
      width: 100%;
      height: $imageGalleryBoxType01Height;
      background: #EEE;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  //メイン画像が表示すると対応するサムネイル画像が変化
  @for $i from 1 through $imageGalleryBoxType01Count {
    input:nth-of-type(#{$i}):checked ~ .imageGallery
    label:nth-of-type(#{$i}) img {
      box-shadow: 0 0 0 3px #000;
      opacity: 0.8;
    }
  }
  > .imageGallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.25em;
    label {
      width: calc(100% / #{$imageGalleryBoxType01Count});
      padding: 0.5em;
      display: block;
      cursor: pointer;
      img {
        width: 100%;
        transition: opacity 0.1s ease-in-out;
        &:hover {
          opacity: 0.8;
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
