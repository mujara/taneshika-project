import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "その他のアイコン",
  description: "WEB制作でよく使ういろいろなアイコンを集めました",
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
                <a href="/img/icon/bell.svg" download="bell.svg">
                  <Image
                    src="/img/icon/bell.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bell.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bell.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bell</span>
                <span>f0f3</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bell-o.svg" download="bell-o.svg">
                  <Image
                    src="/img/icon/bell-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bell-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bell-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bell-o</span>
                <span>f0a2</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/flag.svg" download="flag.svg">
                  <Image
                    src="/img/icon/flag.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/flag.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/flag.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-flag</span>
                <span>f024</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/flag-o.svg" download="flag-o.svg">
                  <Image
                    src="/img/icon/flag-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/flag-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/flag-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-flag-o</span>
                <span>f11d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/thumb-tack.svg" download="thumb-tack.svg">
                  <Image
                    src="/img/icon/thumb-tack.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/thumb-tack.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/thumb-tack.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-thumb-tack</span>
                <span>f08d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bullhorn.svg" download="bullhorn.svg">
                  <Image
                    src="/img/icon/bullhorn.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bullhorn.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bullhorn.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bullhorn</span>
                <span>f0a1</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/trophy.svg" download="trophy.svg">
                  <Image
                    src="/img/icon/trophy.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/trophy.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/trophy.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-trophy</span>
                <span>f091</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/paperclip.svg" download="paperclip.svg">
                  <Image
                    src="/img/icon/paperclip.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/paperclip.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/paperclip.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-paperclip</span>
                <span>f0c6</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/lightbulb-o.svg" download="lightbulb-o.svg">
                  <Image
                    src="/img/icon/lightbulb-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/lightbulb-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/lightbulb-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-lightbulb-o</span>
                <span>f0eb</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/gift.svg" download="gift.svg">
                  <Image
                    src="/img/icon/gift.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/gift.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/gift.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-gift</span>
                <span>f06b</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/book.svg" download="book.svg">
                  <Image
                    src="/img/icon/book.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/book.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/book.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-book</span>
                <span>f02d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/newspaper-o.svg" download="newspaper-o.svg">
                  <Image
                    src="/img/icon/newspaper-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/newspaper-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/newspaper-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-newspaper-o</span>
                <span>f1ea</span>
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
