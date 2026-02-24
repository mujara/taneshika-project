import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "ハンドサインのアイコン",
  description: "WEB制作でよく使うハンドサインのアイコンを集めました",
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
                <a href="/img/icon/thumbs-up.svg" download="thumbs-up.svg">
                  <Image
                    src="/img/icon/thumbs-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/thumbs-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/thumbs-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-thumbs-up</span>
                <span>f164</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/thumbs-o-up.svg" download="thumbs-o-up.svg">
                  <Image
                    src="/img/icon/thumbs-o-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/thumbs-o-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/thumbs-o-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-thumbs-o-up</span>
                <span>f087</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/handshake-o.svg" download="handshake-o.svg">
                  <Image
                    src="/img/icon/handshake-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/handshake-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/handshake-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-handshake-o</span>
                <span>f2b5</span>
              </div>

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-o-up.svg" download="hand-o-up.svg">
                  <Image
                    src="/img/icon/hand-o-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-o-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-o-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-o-up</span>
                <span>f0a6</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-o-right.svg" download="hand-o-right.svg">
                  <Image
                    src="/img/icon/hand-o-right.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-o-right.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-o-right.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-o-right</span>
                <span>f0a4</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-o-down.svg" download="hand-o-down.svg">
                  <Image
                    src="/img/icon/hand-o-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-o-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-o-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-o-down</span>
                <span>f0a7</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-o-left.svg" download="hand-o-left.svg">
                  <Image
                    src="/img/icon/hand-o-left.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-o-left.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-o-left.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-o-left</span>
                <span>f0a5</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-grab-o.svg" download="hand-grab-o.svg">
                  <Image
                    src="/img/icon/hand-grab-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-grab-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-grab-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-grab-o</span>
                <span>f255</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-paper-o.svg" download="hand-paper-o.svg">
                  <Image
                    src="/img/icon/hand-paper-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-paper-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-paper-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-paper-o</span>
                <span>f256</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-peace-o.svg" download="hand-peace-o.svg">
                  <Image
                    src="/img/icon/hand-peace-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-peace-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-peace-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-peace-o</span>
                <span>f25b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hand-pointer-o.svg" download="hand-pointer-o.svg">
                  <Image
                    src="/img/icon/hand-pointer-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hand-pointer-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hand-pointer-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hand-pointer-o</span>
                <span>f25a</span>
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
