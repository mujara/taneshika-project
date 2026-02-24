import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "会員のアイコン",
  description: "WEB制作でよく使う会員サイトのアイコンを集めました",
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
                <a href="/img/icon/user.svg" download="user.svg">
                  <Image
                    src="/img/icon/user.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/user.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/user.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-user</span>
                <span>f007</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/user-o.svg" download="user-o.svg">
                  <Image
                    src="/img/icon/user-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/user-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/user-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-user-o</span>
                <span>f2c0</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/group.svg" download="group.svg">
                  <Image
                    src="/img/icon/group.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/group.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/group.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-users</span>
                <span>f0c0</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/user-plus.svg" download="user-plus.svg">
                  <Image
                    src="/img/icon/user-plus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/user-plus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/user-plus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-user-plus</span>
                <span>f234</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/address-card.svg" download="address-card.svg">
                  <Image
                    src="/img/icon/address-card.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/address-card.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/address-card.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-address-card</span>
                <span>f2bb</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/address-card-o.svg" download="address-card-o.svg">
                  <Image
                    src="/img/icon/address-card-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/address-card-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/address-card-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-address-card-o</span>
                <span>f2bc</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/drivers-license.svg" download="drivers-license.svg">
                  <Image
                    src="/img/icon/drivers-license.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/drivers-license.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/drivers-license.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-id-card</span>
                <span>f2c2</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/drivers-license-o.svg" download="drivers-license-o.svg">
                  <Image
                    src="/img/icon/drivers-license-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/drivers-license-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/drivers-license-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-id-card-o</span>
                <span>f2c3</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/address-book.svg" download="address-book.svg">
                  <Image
                    src="/img/icon/address-book.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/address-book.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/address-book.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-address-book</span>
                <span>f2b9</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/address-book-o.svg" download="address-book-o.svg">
                  <Image
                    src="/img/icon/address-book-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/address-book-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/address-book-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-address-book-o</span>
                <span>f2ba</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/user-circle.svg" download="user-circle.svg">
                  <Image
                    src="/img/icon/user-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/user-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/user-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-user-circle</span>
                <span>f2bd</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/user-circle-o.svg" download="user-circle-o.svg">
                  <Image
                    src="/img/icon/user-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/user-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/user-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-user-circle-o</span>
                <span>f2be</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/id-badge.svg" download="id-badge.svg">
                  <Image
                    src="/img/icon/id-badge.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/id-badge.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/id-badge.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-id-badge</span>
                <span>f2c1</span>
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
