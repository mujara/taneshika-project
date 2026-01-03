import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "チェック・増やす・減る・閉じるのアイコン",
  description:
    "WEB制作でよく使うチェック・増やす・減る・閉じるのアイコンを集めました",
  image: "/img/sample.jpg",
  classification01: "image",
  classification02: "Image",
  affiliation_page_name01: "アイコン画像",
  affiliation_page_slug01: "icon",
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
        image="/img/common/iconSquare.svg"
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
              <Link href={`/image/icon`}>戻る</Link>
            </div>
            <div className={styles.iconCommonList}>
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/check.svg" download="check.svg">
                  <Image
                    src="/img/icon/check.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check</span>
                <span>f00c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/plus.svg" download="plus.svg">
                  <Image
                    src="/img/icon/plus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus</span>
                <span>f067</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/minus.svg" download="minus.svg">
                  <Image
                    src="/img/icon/minus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus</span>
                <span>f068</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/close.svg" download="close.svg">
                  <Image
                    src="/img/icon/close.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/close.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/close.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-remove</span>
                <span>f00d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/check-circle.svg"
                  download="check-circle.svg"
                >
                  <Image
                    src="/img/icon/check-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check-circle</span>
                <span>f058</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/plus-circle.svg" download="plus-circle.svg">
                  <Image
                    src="/img/icon/plus-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus-circle</span>
                <span>f055</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/minus-circle.svg"
                  download="minus-circle.svg"
                >
                  <Image
                    src="/img/icon/minus-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus-circle</span>
                <span>f056</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/times-circle.svg"
                  download="times-circle.svg"
                >
                  <Image
                    src="/img/icon/times-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/times-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/times-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-times-circle</span>
                <span>f057</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/check-circle-o.svg"
                  download="check-circle-o.svg"
                >
                  <Image
                    src="/img/icon/check-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check-circle-o</span>
                <span>f05d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/plus-circle-o.svg"
                  download="plus-circle-o.svg"
                >
                  <Image
                    src="/img/icon/plus-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus-circle-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/minus-circle-o.svg"
                  download="minus-circle-o.svg"
                >
                  <Image
                    src="/img/icon/minus-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus-circle-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/times-circle-o.svg"
                  download="times-circle-o.svg"
                >
                  <Image
                    src="/img/icon/times-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/times-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/times-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-times-circle-o</span>
                <span>f05c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/check-square.svg"
                  download="check-square.svg"
                >
                  <Image
                    src="/img/icon/check-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check-square</span>
                <span>f14a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/plus-square.svg" download="plus-square.svg">
                  <Image
                    src="/img/icon/plus-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus-square</span>
                <span>f0fe</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/minus-square.svg"
                  download="minus-square.svg"
                >
                  <Image
                    src="/img/icon/minus-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus-square</span>
                <span>f146</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/times-square.svg"
                  download="times-square.svg"
                >
                  <Image
                    src="/img/icon/times-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/times-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/times-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-times-square</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/check-square-o.svg"
                  download="check-square-o.svg"
                >
                  <Image
                    src="/img/icon/check-square-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check-square-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check-square-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check-square-o</span>
                <span>f046</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/plus-square-o.svg"
                  download="plus-square-o.svg"
                >
                  <Image
                    src="/img/icon/plus-square-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus-square-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus-square-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus-square-o</span>
                <span>f196</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/minus-square-o.svg"
                  download="minus-square-o.svg"
                >
                  <Image
                    src="/img/icon/minus-square-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus-square-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus-square-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus-square-o</span>
                <span>f147</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/times-square-o.svg"
                  download="times-square-o.svg"
                >
                  <Image
                    src="/img/icon/times-square-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/times-square-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/times-square-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-times-square-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/check-rectangle.svg"
                  download="check-rectangle.svg"
                >
                  <Image
                    src="/img/icon/check-rectangle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check-rectangle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check-rectangle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check-rectangle</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/plus-rectangle.svg"
                  download="plus-rectangle.svg"
                >
                  <Image
                    src="/img/icon/plus-rectangle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus-rectangle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus-rectangle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus-rectangle</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/minus-rectangle.svg"
                  download="minus-rectangle.svg"
                >
                  <Image
                    src="/img/icon/minus-rectangle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus-rectangle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus-rectangle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus-rectangle</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/times-rectangle.svg"
                  download="times-rectangle.svg"
                >
                  <Image
                    src="/img/icon/times-rectangle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/times-rectangle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/times-rectangle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-window-close</span>
                <span>f2d3</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/check-rectangle-o.svg"
                  download="check-rectangle-o.svg"
                >
                  <Image
                    src="/img/icon/check-rectangle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/check-rectangle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/check-rectangle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-check-rectangle-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/plus-rectangle-o.svg"
                  download="plus-rectangle-o.svg"
                >
                  <Image
                    src="/img/icon/plus-rectangle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plus-rectangle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plus-rectangle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plus-rectangle-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/minus-rectangle-o.svg"
                  download="minus-rectangle-o.svg"
                >
                  <Image
                    src="/img/icon/minus-rectangle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/minus-rectangle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/minus-rectangle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-minus-rectangle-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/times-rectangle-o.svg"
                  download="times-rectangle-o.svg"
                >
                  <Image
                    src="/img/icon/times-rectangle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/times-rectangle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/times-rectangle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-window-close-o</span>
                <span>f2d4</span>
              </div>
            </div>

            <div className="button--typeBack sM-l">
              <Link href={`/image/icon`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
