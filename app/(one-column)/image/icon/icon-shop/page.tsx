import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "ショップサイトのアイコン",
  description: "WEB制作でよく使うショップサイトのアイコンを集めました",
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
                <a href="/img/icon/shopping-cart.svg" download="shopping-cart.svg">
                  <Image
                    src="/img/icon/shopping-cart.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/shopping-cart.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/shopping-cart.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-shopping-cart</span>
                <span>f07a</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/cart-plus.svg" download="cart-plus.svg">
                  <Image
                    src="/img/icon/cart-plus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/cart-plus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/cart-plus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-cart-plus</span>
                <span>f217</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/cart-arrow-down.svg" download="cart-arrow-down.svg">
                  <Image
                    src="/img/icon/cart-arrow-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/cart-arrow-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/cart-arrow-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-cart-arrow-down</span>
                <span>f218</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/shopping-bag.svg" download="shopping-bag.svg">
                  <Image
                    src="/img/icon/shopping-bag.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/shopping-bag.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/shopping-bag.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-shopping-bag</span>
                <span>f290</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/shopping-basket.svg" download="shopping-basket.svg">
                  <Image
                    src="/img/icon/shopping-basket.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/shopping-basket.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/shopping-basket.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-shopping-basket</span>
                <span>f291</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/trash.svg" download="trash.svg">
                  <Image
                    src="/img/icon/trash.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/trash.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/trash.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-trash</span>
                <span>f1f8</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/trash-o.svg" download="trash-o.svg">
                  <Image
                    src="/img/icon/trash-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/trash-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/trash-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-trash-o</span>
                <span>f014</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/credit-card-alt.svg" download="credit-card-alt.svg">
                  <Image
                    src="/img/icon/credit-card-alt.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/credit-card-alt.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/credit-card-alt.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-credit-card-alt</span>
                <span>f283</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/credit-card.svg" download="credit-card.svg">
                  <Image
                    src="/img/icon/credit-card.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/credit-card.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/credit-card.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-credit-card</span>
                <span>f09d</span>
              </div>
              
              <div className={styles.iconCommonItem}>
                <a href="/img/icon/calculator.svg" download="calculator.svg">
                  <Image
                    src="/img/icon/calculator.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/calculator.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/calculator.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-calculator</span>
                <span>f1ec</span>
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
