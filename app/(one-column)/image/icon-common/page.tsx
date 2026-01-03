import type { Metadata } from "next";
import styles from "./page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "よく使うアイコン",
  description: "WEB制作でよく使うアイコンを集めました",
  image: "/img/sample.jpg",
  classification01: "image",
  classification02: "Image",
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
      >
        {data.title}
      </Topicpath>
      <div className={`contents__mainInner --typeFullSize ${styles.typeParts}`}>
        <div className="inBase">
          <div className="inBase__inner">
            <div className="button--typeBack sM-l">
              <Link href={`/image`}>戻る</Link>
            </div>
            <h2>矢印やボタン等のアイコン</h2>
            <div className={styles.iconCommonList}>
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/chevron-up.svg" download="chevron-up.svg">
                  <Image
                    src="/img/icon/chevron-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-up</span>
                <span>f077</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-right.svg"
                  download="chevron-right.svg"
                >
                  <Image
                    src="/img/icon/chevron-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-right</span>
                <span>f054</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-down.svg"
                  download="chevron-down.svg"
                >
                  <Image
                    src="/img/icon/chevron-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-down</span>
                <span>f078</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-left.svg"
                  download="chevron-left.svg"
                >
                  <Image
                    src="/img/icon/chevron-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-left</span>
                <span>f053</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/angle-up.svg" download="angle-up.svg">
                  <Image
                    src="/img/icon/angle-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-up</span>
                <span>f106</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/angle-right.svg" download="angle-right.svg">
                  <Image
                    src="/img/icon/angle-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-right</span>
                <span>f105</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/angle-down.svg" download="angle-down.svg">
                  <Image
                    src="/img/icon/angle-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-down</span>
                <span>f107</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/angle-left.svg" download="angle-left.svg">
                  <Image
                    src="/img/icon/angle-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-left</span>
                <span>f104</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/angle-double-up.svg"
                  download="angle-double-up.svg"
                >
                  <Image
                    src="/img/icon/angle-double-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-double-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-double-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-double-up</span>
                <span>f102</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/angle-double-right.svg"
                  download="angle-double-right.svg"
                >
                  <Image
                    src="/img/icon/angle-double-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-double-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-double-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-double-right</span>
                <span>f101</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/angle-double-down.svg"
                  download="angle-double-down.svg"
                >
                  <Image
                    src="/img/icon/angle-double-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-double-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-double-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-double-down</span>
                <span>f103</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/angle-double-left.svg"
                  download="angle-double-left.svg"
                >
                  <Image
                    src="/img/icon/angle-double-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/angle-double-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/angle-double-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-angle-double-left</span>
                <span>f100</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrow-up.svg" download="arrow-up.svg">
                  <Image
                    src="/img/icon/arrow-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-up</span>
                <span>f062</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrow-right.svg" download="arrow-right.svg">
                  <Image
                    src="/img/icon/arrow-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-right</span>
                <span>f061</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrow-down.svg" download="arrow-down.svg">
                  <Image
                    src="/img/icon/arrow-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-down</span>
                <span>f063</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrow-left.svg" download="arrow-left.svg">
                  <Image
                    src="/img/icon/arrow-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-left</span>
                <span>f060</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/long-arrow-up.svg"
                  download="long-arrow-up.svg"
                >
                  <Image
                    src="/img/icon/long-arrow-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/long-arrow-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/long-arrow-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-long-arrow-up</span>
                <span>f176</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/long-arrow-right.svg"
                  download="long-arrow-right.svg"
                >
                  <Image
                    src="/img/icon/long-arrow-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/long-arrow-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/long-arrow-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-long-arrow-right</span>
                <span>f178</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/long-arrow-down.svg"
                  download="long-arrow-down.svg"
                >
                  <Image
                    src="/img/icon/long-arrow-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/long-arrow-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/long-arrow-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-long-arrow-down</span>
                <span>f175</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/long-arrow-left.svg"
                  download="long-arrow-left.svg"
                >
                  <Image
                    src="/img/icon/long-arrow-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/long-arrow-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/long-arrow-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-long-arrow-left</span>
                <span>f177</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/mail-forward.svg"
                  download="mail-forward.svg"
                >
                  <Image
                    src="/img/icon/mail-forward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mail-forward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mail-forward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-share</span>
                <span>f064</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/mail-reply.svg" download="mail-reply.svg">
                  <Image
                    src="/img/icon/mail-reply.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mail-reply.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mail-reply.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-reply</span>
                <span>f112</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/mail-reply-all.svg"
                  download="mail-reply-all.svg"
                >
                  <Image
                    src="/img/icon/mail-reply-all.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mail-reply-all.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mail-reply-all.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-reply-all</span>
                <span>f122</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/sort.svg" download="sort.svg">
                  <Image
                    src="/img/icon/sort.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/sort.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/sort.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-sort</span>
                <span>f0dc</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/caret-up.svg" download="caret-up.svg">
                  <Image
                    src="/img/icon/caret-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-up</span>
                <span>f0d8</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/caret-right.svg" download="caret-right.svg">
                  <Image
                    src="/img/icon/caret-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-right</span>
                <span>f0da</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/caret-down.svg" download="caret-down.svg">
                  <Image
                    src="/img/icon/caret-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-down</span>
                <span>f0d7</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/caret-left.svg" download="caret-left.svg">
                  <Image
                    src="/img/icon/caret-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-left</span>
                <span>f0d9</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-circle-up.svg"
                  download="chevron-circle-up.svg"
                >
                  <Image
                    src="/img/icon/chevron-circle-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-circle-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-circle-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-circle-up</span>
                <span>f139</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-circle-right.svg"
                  download="chevron-circle-right.svg"
                >
                  <Image
                    src="/img/icon/chevron-circle-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-circle-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-circle-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-circle-right</span>
                <span>f138</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-circle-down.svg"
                  download="chevron-circle-down.svg"
                >
                  <Image
                    src="/img/icon/chevron-circle-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-circle-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-circle-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-circle-down</span>
                <span>f13a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/chevron-circle-left.svg"
                  download="chevron-circle-left.svg"
                >
                  <Image
                    src="/img/icon/chevron-circle-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/chevron-circle-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/chevron-circle-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-chevron-circle-left</span>
                <span>f137</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-up.svg"
                  download="arrow-circle-up.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-up</span>
                <span>f0aa</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-right.svg"
                  download="arrow-circle-right.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-right</span>
                <span>f0a9</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-down.svg"
                  download="arrow-circle-down.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-down</span>
                <span>f0ab</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-left.svg"
                  download="arrow-circle-left.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-down</span>
                <span>f0ab</span>
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

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/circle.svg" download="circle.svg">
                  <Image
                    src="/img/icon/circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-circle</span>
                <span>f111</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/circle-o.svg" download="circle-o.svg">
                  <Image
                    src="/img/icon/circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-circle-o</span>
                <span>f10c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/circle-thin.svg" download="circle-thin.svg">
                  <Image
                    src="/img/icon/circle-thin.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/circle-thin.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/circle-thin.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-circle-thin</span>
                <span>f1db</span>
              </div>

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-o-up.svg"
                  download="arrow-circle-o-up.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-o-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-o-up</span>
                <span>f01b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-o-right.svg"
                  download="arrow-circle-o-right.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-o-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-o-right</span>
                <span>f18e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-o-down.svg"
                  download="arrow-circle-o-down.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-o-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-o-down</span>
                <span>f01a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/arrow-circle-o-left.svg"
                  download="arrow-circle-o-left.svg"
                >
                  <Image
                    src="/img/icon/arrow-circle-o-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrow-circle-o-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrow-circle-o-left</span>
                <span>f190</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/dot-circle-o.svg"
                  download="dot-circle-o.svg"
                >
                  <Image
                    src="/img/icon/dot-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/dot-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/dot-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-dot-circle-o</span>
                <span>f192</span>
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
                <span>icon-dot-circle-o</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/ban.svg" download="ban.svg">
                  <Image
                    src="/img/icon/ban.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/ban.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/ban.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-ban</span>
                <span>f05e</span>
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
                  href="/img/icon/caret-square-o-up.svg"
                  download="caret-square-o-up.svg"
                >
                  <Image
                    src="/img/icon/caret-square-o-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-square-o-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-square-o-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-square-o-up</span>
                <span>f151</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/caret-square-o-right.svg"
                  download="caret-square-o-right.svg"
                >
                  <Image
                    src="/img/icon/caret-square-o-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-square-o-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-square-o-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-square-o-right</span>
                <span>f152</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/caret-square-o-down.svg"
                  download="caret-square-o-down.svg"
                >
                  <Image
                    src="/img/icon/caret-square-o-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-square-o-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-square-o-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-square-o-down</span>
                <span>f150</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/caret-square-o-left.svg"
                  download="caret-square-o-left.svg"
                >
                  <Image
                    src="/img/icon/caret-square-o-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/caret-square-o-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/caret-square-o-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-caret-square-o-left</span>
                <span>f191</span>
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
                <a href="/img/icon/square.svg" download="square.svg">
                  <Image
                    src="/img/icon/square.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/square.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/square.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-square</span>
                <span>f0c8</span>
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

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/square-o.svg" download="square-o.svg">
                  <Image
                    src="/img/icon/square-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/square-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/square-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-square-o</span>
                <span>f096</span>
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

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/level-up.svg" download="level-up.svg">
                  <Image
                    src="/img/icon/level-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/level-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/level-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-level-up</span>
                <span>f148</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/level-down.svg" download="level-down.svg">
                  <Image
                    src="/img/icon/level-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/level-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/level-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-level-down</span>
                <span>f149</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrows-alt.svg" download="arrows-alt.svg">
                  <Image
                    src="/img/icon/arrows-alt.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrows-alt.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrows-alt.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrows-alt</span>
                <span>f0b2</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrows.svg" download="arrows.svg">
                  <Image
                    src="/img/icon/arrows.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrows.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrows.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrows</span>
                <span>f047</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrows-v.svg" download="arrows-v.svg">
                  <Image
                    src="/img/icon/arrows-v.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrows-v.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrows-v.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrows-v</span>
                <span>f07d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/arrows-h.svg" download="arrows-h.svg">
                  <Image
                    src="/img/icon/arrows-h.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/arrows-h.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/arrows-h.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-arrows-h</span>
                <span>f07e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/exchange.svg" download="exchange.svg">
                  <Image
                    src="/img/icon/exchange.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/exchange.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/exchange.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-exchange</span>
                <span>f0ec</span>
              </div>

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
                <span>icon-location-arrow</span>
                <span>f124</span>
              </div>
            </div>

            <h2>見出し</h2>
            <div className={styles.iconCommonList}>
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/■" download="■">
                  <Image
                    src="/img/icon/■"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/■"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/■"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-■</span>
                <span>f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/■" download="■">
                  <Image
                    src="/img/icon/■"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/■"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/■"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-■</span>
                <span>f</span>
              </div>
            </div>

            <div className="button--typeBack sM-l">
              <Link href={`/image`}>戻る</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
