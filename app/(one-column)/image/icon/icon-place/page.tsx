import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "場所のアイコン",
  description: "WEB制作でよく使う場所のアイコンを集めました",
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
                <a href="/img/icon/map-marker.svg" download="map-marker.svg">
                  <Image
                    src="/img/icon/map-marker.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/map-marker.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/map-marker.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-map-marker</span>
                <span>f041</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/access.svg" download="access.svg">
                  <Image
                    src="/img/icon/access.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/access.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/access.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-access</span>
                <span>e912</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/map-pin.svg" download="map-pin.svg">
                  <Image
                    src="/img/icon/map-pin.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/map-pin.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/map-pin.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-map-pin</span>
                <span>f276</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/map-signs.svg" download="map-signs.svg">
                  <Image
                    src="/img/icon/map-signs.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/map-signs.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/map-signs.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-map-signs</span>
                <span>f277</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/street-view.svg" download="street-view.svg">
                  <Image
                    src="/img/icon/street-view.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/street-view.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/street-view.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-street-view</span>
                <span>f21d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/map.svg" download="map.svg">
                  <Image
                    src="/img/icon/map.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/map.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/map.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-map</span>
                <span>f279</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/map-o.svg" download="map-o.svg">
                  <Image
                    src="/img/icon/map-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/map-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/map-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-map-o</span>
                <span>f278</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/compass.svg" download="compass.svg">
                  <Image
                    src="/img/icon/compass.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/compass.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/compass.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-compass</span>
                <span>f14e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/automobile.svg" download="automobile.svg">
                  <Image
                    src="/img/icon/automobile.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/automobile.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/automobile.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-car</span>
                <span>f1b9</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/cab.svg" download="cab.svg">
                  <Image
                    src="/img/icon/cab.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/cab.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/cab.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-taxi</span>
                <span>f1ba</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/train.svg" download="train.svg">
                  <Image
                    src="/img/icon/train.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/train.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/train.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-train</span>
                <span>f238</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/subway.svg" download="subway.svg">
                  <Image
                    src="/img/icon/subway.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/subway.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/subway.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-subway</span>
                <span>f239</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bus.svg" download="bus.svg">
                  <Image
                    src="/img/icon/bus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bus</span>
                <span>f207</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/ship.svg" download="ship.svg">
                  <Image
                    src="/img/icon/ship.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/ship.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/ship.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-ship</span>
                <span>f21a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/truck.svg" download="truck.svg">
                  <Image
                    src="/img/icon/truck.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/truck.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/truck.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-truck</span>
                <span>f0d1</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/motorcycle.svg" download="motorcycle.svg">
                  <Image
                    src="/img/icon/motorcycle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/motorcycle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/motorcycle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-motorcycle</span>
                <span>f21c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bicycle.svg" download="bicycle.svg">
                  <Image
                    src="/img/icon/bicycle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bicycle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bicycle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bicycle</span>
                <span>f206</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/plane.svg" download="plane.svg">
                  <Image
                    src="/img/icon/plane.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/plane.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/plane.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-plane</span>
                <span>f072</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/rocket.svg" download="rocket.svg">
                  <Image
                    src="/img/icon/rocket.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/rocket.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/rocket.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-rocket</span>
                <span>f135</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/road.svg" download="road.svg">
                  <Image
                    src="/img/icon/road.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/road.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/road.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-road</span>
                <span>f018</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/globe.svg" download="globe.svg">
                  <Image
                    src="/img/icon/globe.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/globe.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/globe.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-globe</span>
                <span>f0ac</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/binoculars.svg" download="binoculars.svg">
                  <Image
                    src="/img/icon/binoculars.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/binoculars.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/binoculars.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-binoculars</span>
                <span>f1e5</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/exit.svg" download="exit.svg">
                  <Image
                    src="/img/icon/exit.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/exit.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/exit.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-exit</span>
                <span>e908</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/runner.svg" download="runner.svg">
                  <Image
                    src="/img/icon/runner.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/runner.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/runner.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-runner</span>
                <span>e90f</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/wheelchair.svg" download="wheelchair.svg">
                  <Image
                    src="/img/icon/wheelchair.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/wheelchair.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/wheelchair.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-wheelchair</span>
                <span>f193</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/female.svg" download="female.svg">
                  <Image
                    src="/img/icon/female.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/female.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/female.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-female</span>
                <span>f182</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/male.svg" download="male.svg">
                  <Image
                    src="/img/icon/male.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/male.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/male.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-male</span>
                <span>f183</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/child.svg" download="child.svg">
                  <Image
                    src="/img/icon/child.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/child.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/child.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-child</span>
                <span>f1ae</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bed.svg" download="bed.svg">
                  <Image
                    src="/img/icon/bed.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bed.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bed.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bed</span>
                <span>f236</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/shower.svg" download="shower.svg">
                  <Image
                    src="/img/icon/shower.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/shower.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/shower.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-shower</span>
                <span>f2cc</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/bath.svg" download="bath.svg">
                  <Image
                    src="/img/icon/bath.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/bath.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/bath.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-bath</span>
                <span>f2cd</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/cutlery.svg" download="cutlery.svg">
                  <Image
                    src="/img/icon/cutlery.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/cutlery.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/cutlery.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-cutlery</span>
                <span>f0f5</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/coffee.svg" download="coffee.svg">
                  <Image
                    src="/img/icon/coffee.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/coffee.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/coffee.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-coffee</span>
                <span>f0f4</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/building-o.svg" download="building-o.svg">
                  <Image
                    src="/img/icon/building-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/building-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/building-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-building-o</span>
                <span>f0f7</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/hospital-o.svg" download="hospital-o.svg">
                  <Image
                    src="/img/icon/hospital-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/hospital-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/hospital-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-hospital-o</span>
                <span>f0f8</span>
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
