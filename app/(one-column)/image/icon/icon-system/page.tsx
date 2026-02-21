import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "システムに関するアイコン",
  description: "WEB制作でよく使うシステムに関するアイコンを集めました",
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
                <a
                  href="/img/icon/location-arrow.svg"
                  download="location-arrow.svg"
                >
                  <Image
                    src="/img/icon/location-arrow.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/location-arrow.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/location-arrow.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-mouse-pointer</span>
                <span>f245</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/repeat.svg" download="repeat.svg">
                  <Image
                    src="/img/icon/repeat.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/repeat.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/repeat.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-rotate-right</span>
                <span>f01e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/rotate-left.svg" download="rotate-left.svg">
                  <Image
                    src="/img/icon/rotate-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/rotate-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/rotate-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-rotate-left</span>
                <span>f0e2</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/refresh.svg" download="refresh.svg">
                  <Image
                    src="/img/icon/refresh.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/refresh.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/refresh.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-refresh</span>
                <span>f021</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/sign-out.svg" download="sign-out.svg">
                  <Image
                    src="/img/icon/sign-out.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/sign-out.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/sign-out.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-sign-out</span>
                <span>f08b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/sign-in.svg" download="sign-in.svg">
                  <Image
                    src="/img/icon/sign-in.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/sign-in.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/sign-in.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-sign-in</span>
                <span>f090</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/home.svg" download="home.svg">
                  <Image
                    src="/img/icon/home.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/home.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/home.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-home</span>
                <span>f015</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/home-logo.svg" download="home-logo.svg">
                  <Image
                    src="/img/icon/home-logo.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/home-logo.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/home-logo.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-home-logo</span>
                <span>e902</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/power-off.svg" download="power-off.svg">
                  <Image
                    src="/img/icon/power-off.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/power-off.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/power-off.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-power-off</span>
                <span>f011</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/cog.svg" download="cog.svg">
                  <Image
                    src="/img/icon/cog.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/cog.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/cog.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-gear</span>
                <span>f013</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/upload.svg" download="upload.svg">
                  <Image
                    src="/img/icon/upload.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/upload.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/upload.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-upload</span>
                <span>f093</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/download.svg" download="download.svg">
                  <Image
                    src="/img/icon/download.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/download.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/download.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-download</span>
                <span>f019</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/clone.svg" download="clone.svg">
                  <Image
                    src="/img/icon/clone.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/clone.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/clone.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-clone</span>
                <span>f24d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/window-restore.svg"
                  download="window-restore.svg"
                >
                  <Image
                    src="/img/icon/window-restore.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/window-restore.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/window-restore.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-window-restore</span>
                <span>f2d2</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/window-maximize.svg"
                  download="window-maximize.svg"
                >
                  <Image
                    src="/img/icon/window-maximize.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/window-maximize.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/window-maximize.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-window-maximize</span>
                <span>f2d0</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/window-minimize.svg"
                  download="window-minimize.svg"
                >
                  <Image
                    src="/img/icon/window-minimize.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/window-minimize.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/window-minimize.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-window-minimize</span>
                <span>f2d1</span>
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

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/spinner.svg" download="spinner.svg">
                  <Image
                    src="/img/icon/spinner.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/spinner.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/spinner.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-spinner</span>
                <span>f110</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/sitemap.svg" download="sitemap.svg">
                  <Image
                    src="/img/icon/sitemap.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/sitemap.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/sitemap.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-sitemap</span>
                <span>f0e8</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/external-link-square.svg"
                  download="external-link-square.svg"
                >
                  <Image
                    src="/img/icon/external-link-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/external-link-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/external-link-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-external-link-square</span>
                <span>f14c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/external-link.svg"
                  download="external-link.svg"
                >
                  <Image
                    src="/img/icon/external-link.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/external-link.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/external-link.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-external-link</span>
                <span>f08e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/share-square.svg"
                  download="share-square.svg"
                >
                  <Image
                    src="/img/icon/share-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/share-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/share-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-share-square</span>
                <span>f14d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/share-square-o.svg"
                  download="share-square-o.svg"
                >
                  <Image
                    src="/img/icon/share-square-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/share-square-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/share-square-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-share-square-o</span>
                <span>f045</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/tag.svg" download="tag.svg">
                  <Image
                    src="/img/icon/tag.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/tag.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/tag.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-tag</span>
                <span>f02b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/tags.svg" download="tags.svg">
                  <Image
                    src="/img/icon/tags.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/tags.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/tags.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-tags</span>
                <span>f02c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bookmark.svg" download="bookmark.svg">
                  <Image
                    src="/img/icon/bookmark.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bookmark.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bookmark.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bookmark</span>
                <span>f02e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bookmark-o.svg" download="bookmark-o.svg">
                  <Image
                    src="/img/icon/bookmark-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bookmark-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bookmark-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bookmark-o</span>
                <span>f097</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/exclamation.svg" download="exclamation.svg">
                  <Image
                    src="/img/icon/exclamation.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/exclamation.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/exclamation.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-exclamation</span>
                <span>f12a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/exclamation-triangle.svg"
                  download="exclamation-triangle.svg"
                >
                  <Image
                    src="/img/icon/exclamation-triangle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/exclamation-triangle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/exclamation-triangle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-warning</span>
                <span>f071</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/exclamation-circle.svg"
                  download="exclamation-circle.svg"
                >
                  <Image
                    src="/img/icon/exclamation-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/exclamation-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/exclamation-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-exclamation-circle</span>
                <span>f06a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/info-circle.svg" download="info-circle.svg">
                  <Image
                    src="/img/icon/info-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/info-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/info-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-info-circle</span>
                <span>f05a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/question.svg" download="question.svg">
                  <Image
                    src="/img/icon/question.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/question.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/question.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-question</span>
                <span>f128</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/question-circle-o.svg"
                  download="question-circle-o.svg"
                >
                  <Image
                    src="/img/icon/question-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/question-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/question-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-question-circle-o</span>
                <span>f29c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/question-circle.svg"
                  download="question-circle.svg"
                >
                  <Image
                    src="/img/icon/question-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/question-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/question-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-question-circle</span>
                <span>f059</span>
              </div>

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hourglass-3.svg" download="hourglass-3.svg">
                  <Image
                    src="/img/icon/hourglass-3.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hourglass-3.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hourglass-3.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hourglass-3</span>
                <span>f253</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hourglass.svg" download="hourglass.svg">
                  <Image
                    src="/img/icon/hourglass.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hourglass.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hourglass.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hourglass</span>
                <span>f254</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/rss-logo.svg" download="rss-logo.svg">
                  <Image
                    src="/img/icon/rss-logo.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/rss-logo.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/rss-logo.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-rss</span>
                <span>f09e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/rss-square.svg" download="rss-square.svg">
                  <Image
                    src="/img/icon/rss-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/rss-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/rss-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-rss-square</span>
                <span>f143</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/lock.svg" download="lock.svg">
                  <Image
                    src="/img/icon/lock.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/lock.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/lock.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-lock</span>
                <span>f023</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/unlock.svg" download="unlock.svg">
                  <Image
                    src="/img/icon/unlock.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/unlock.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/unlock.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-unlock</span>
                <span>f09c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/unlock-alt.svg" download="unlock-alt.svg">
                  <Image
                    src="/img/icon/unlock-alt.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/unlock-alt.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/unlock-alt.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-unlock-alt</span>
                <span>f13e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/expeditedssl.svg"
                  download="expeditedssl.svg"
                >
                  <Image
                    src="/img/icon/expeditedssl.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/expeditedssl.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/expeditedssl.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-expeditedssl</span>
                <span>f23e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/pencil.svg" download="pencil.svg">
                  <Image
                    src="/img/icon/pencil.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/pencil.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/pencil.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-pencil</span>
                <span>f040</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/pencil-square.svg"
                  download="pencil-square.svg"
                >
                  <Image
                    src="/img/icon/pencil-square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/pencil-square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/pencil-square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-pencil-square</span>
                <span>f14b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/edit.svg" download="edit.svg">
                  <Image
                    src="/img/icon/edit.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/edit.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/edit.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-edit</span>
                <span>f044</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/chain.svg" download="chain.svg">
                  <Image
                    src="/img/icon/chain.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chain.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chain.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chain</span>
                <span>f0c1</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/usb.svg" download="usb.svg">
                  <Image
                    src="/img/icon/usb.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/usb.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/usb.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-usb</span>
                <span>f287</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/wifi.svg" download="wifi.svg">
                  <Image
                    src="/img/icon/wifi.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/wifi.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/wifi.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-wifi</span>
                <span>f1eb</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/qrcode.svg" download="qrcode.svg">
                  <Image
                    src="/img/icon/qrcode.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/qrcode.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/qrcode.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-qrcode</span>
                <span>f029</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/barcode.svg" download="barcode.svg">
                  <Image
                    src="/img/icon/barcode.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/barcode.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/barcode.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-barcode</span>
                <span>f02a</span>
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
