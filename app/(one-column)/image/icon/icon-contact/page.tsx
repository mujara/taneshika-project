import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "連絡手段のアイコン",
  description: "WEB制作でよく使う連絡手段のアイコンを集めました",
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
                <a href="/img/icon/phone.svg" download="phone.svg">
                  <Image
                    src="/img/icon/phone.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/phone.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/phone.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-phone</span>
                <span>e944</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/phone-o-l.svg" download="phone-o-l.svg">
                  <Image
                    src="/img/icon/phone-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/phone-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/phone-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-phone-o-l</span>
                <span>e93f</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/phone-o-m.svg" download="phone-o-m.svg">
                  <Image
                    src="/img/icon/phone-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/phone-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/phone-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-phone-o-m</span>
                <span>e93e</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/phone-o-b.svg" download="phone-o-b.svg">
                  <Image
                    src="/img/icon/phone-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/phone-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/phone-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-phone-o-b</span>
                <span>e93d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/telephone.svg" download="telephone.svg">
                  <Image
                    src="/img/icon/telephone.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/telephone.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/telephone.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-telephone</span>
                <span>e940</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/telephone-o-l.svg" download="telephone-o-l.svg">
                  <Image
                    src="/img/icon/telephone-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/telephone-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/telephone-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-telephone-o-l</span>
                <span>e942</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/telephone-o-m.svg" download="telephone-o-m.svg">
                  <Image
                    src="/img/icon/telephone-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/telephone-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/telephone-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-telephone-o-m</span>
                <span>e94d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/telephone-o-b.svg" download="telephone-o-b.svg">
                  <Image
                    src="/img/icon/telephone-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/telephone-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/telephone-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-telephone-o-b</span>
                <span>e9412</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/freedial.svg" download="freedial.svg">
                  <Image
                    src="/img/icon/freedial.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/freedial.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/freedial.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-freedial</span>
                <span>e932</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/freedial-o-l.svg" download="freedial-o-l.svg">
                  <Image
                    src="/img/icon/freedial-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/freedial-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/freedial-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-freedial-o-l</span>
                <span>e948</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/freedial-o-m.svg" download="freedial-o-m.svg">
                  <Image
                    src="/img/icon/freedial-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/freedial-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/freedial-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-freedial-o-m</span>
                <span>e949</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/freedial-o-b.svg" download="freedial-o-b.svg">
                  <Image
                    src="/img/icon/freedial-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/freedial-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/freedial-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-freedial-o-b</span>
                <span>e94a</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/fax.svg" download="fax.svg">
                  <Image
                    src="/img/icon/fax.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/fax.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/fax.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-fax</span>
                <span>e927</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/fax-o-l.svg" download="fax-o-l.svg">
                  <Image
                    src="/img/icon/fax-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/fax-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/fax-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-fax-o-l</span>
                <span>e92a</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/fax-o-m.svg" download="fax-o-m.svg">
                  <Image
                    src="/img/icon/fax-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/fax-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/fax-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-fax-o-m</span>
                <span>e929</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/fax-o-b.svg" download="fax-o-b.svg">
                  <Image
                    src="/img/icon/fax-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/fax-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/fax-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-fax-o-b</span>
                <span>e923</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/envelope.svg" download="envelope.svg">
                  <Image
                    src="/img/icon/envelope.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/envelope.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/envelope.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-envelope</span>
                <span>e947</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/envelope-o-l.svg" download="envelope-o-l.svg">
                  <Image
                    src="/img/icon/envelope-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/envelope-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/envelope-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-envelope-o-l</span>
                <span>e925</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/envelope-o-m.svg" download="envelope-o-m.svg">
                  <Image
                    src="/img/icon/envelope-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/envelope-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/envelope-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-envelope-o-m</span>
                <span>e924</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/envelope-o-b.svg" download="envelope-o-b.svg">
                  <Image
                    src="/img/icon/envelope-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/envelope-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/envelope-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-envelope-o-b</span>
                <span>e923</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/mobile.svg" download="mobile.svg">
                  <Image
                    src="/img/icon/mobile.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mobile.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mobile.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-mobile</span>
                <span>e922</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/mobile-o-l.svg" download="mobile-o-l.svg">
                  <Image
                    src="/img/icon/mobile-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mobile-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mobile-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-mobile-o-l</span>
                <span>e920</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/mobile-o-m.svg" download="mobile-o-m.svg">
                  <Image
                    src="/img/icon/mobile-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mobile-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mobile-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-mobile-o-m</span>
                <span>e91f</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/mobile-o-b.svg" download="mobile-o-b.svg">
                  <Image
                    src="/img/icon/mobile-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/mobile-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/mobile-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-mobile-o-b</span>
                <span>e91e</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/desktop.svg" download="desktop.svg">
                  <Image
                    src="/img/icon/desktop.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/desktop.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/desktop.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-desktop</span>
                <span>e918</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/desktop-o-l.svg" download="desktop-o-l.svg">
                  <Image
                    src="/img/icon/desktop-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/desktop-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/desktop-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-desktop-o-l</span>
                <span>e91d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/desktop-o-m.svg" download="desktop-o-m.svg">
                  <Image
                    src="/img/icon/desktop-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/desktop-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/desktop-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-desktop-o-m</span>
                <span>e915</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/desktop-o-b.svg" download="desktop-o-b.svg">
                  <Image
                    src="/img/icon/desktop-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/desktop-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/desktop-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-desktop-o-b</span>
                <span>e914</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/laptop.svg" download="laptop.svg">
                  <Image
                    src="/img/icon/laptop.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/laptop.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/laptop.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-laptop</span>
                <span>e913</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/laptop-o-l.svg" download="laptop-o-l.svg">
                  <Image
                    src="/img/icon/laptop-o-l.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/laptop-o-l.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/laptop-o-l.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-laptop-o-l</span>
                <span>e90c</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/laptop-o-m.svg" download="laptop-o-m.svg">
                  <Image
                    src="/img/icon/laptop-o-m.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/laptop-o-m.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/laptop-o-m.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-laptop-o-m</span>
                <span>e90b</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/laptop-o-b.svg" download="laptop-o-b.svg">
                  <Image
                    src="/img/icon/laptop-o-b.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/laptop-o-b.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/laptop-o-b.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-laptop-o-b</span>
                <span>e90a</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/calltell.svg" download="calltell.svg">
                  <Image
                    src="/img/icon/calltell.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/calltell.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/calltell.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-calltell</span>
                <span>e902</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/volume-control-phone.svg" download="volume-control-phone.svg">
                  <Image
                    src="/img/icon/volume-control-phone.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/volume-control-phone.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/volume-control-phone.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-volume-control-phone</span>
                <span>f2a0</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/whatsapp.svg" download="whatsapp.svg">
                  <Image
                    src="/img/icon/whatsapp.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/whatsapp.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/whatsapp.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-whatsapp</span>
                <span>f232</span>
              </div>
              
              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/sentmail.svg" download="sentmail.svg">
                  <Image
                    src="/img/icon/sentmail.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/sentmail.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/sentmail.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-sentmail</span>
                <span>e900</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/envelope-open.svg" download="envelope-open.svg">
                  <Image
                    src="/img/icon/envelope-open.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/envelope-open.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/envelope-open.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-envelope-open</span>
                <span>f2b6</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/envelope-open-o.svg" download="envelope-open-o.svg">
                  <Image
                    src="/img/icon/envelope-open-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/envelope-open-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/envelope-open-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-envelope-open-o</span>
                <span>f2b7</span>
              </div>
              
              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/telegram.svg" download="telegram.svg">
                  <Image
                    src="/img/icon/telegram.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/telegram.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/telegram.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-telegram</span>
                <span>f2c6</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/paper-plane.svg" download="paper-plane.svg">
                  <Image
                    src="/img/icon/paper-plane.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/paper-plane.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/paper-plane.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-paper-plane</span>
                <span>f1d8</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/paper-plane-o.svg" download="paper-plane-o.svg">
                  <Image
                    src="/img/icon/paper-plane-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/paper-plane-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/paper-plane-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-paper-plane-o</span>
                <span>f1d9</span>
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
