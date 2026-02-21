import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "メディアに関するアイコン",
  description: "WEB制作でよく使う画像・動画・音声に関するアイコンを集めました",
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
                <a href="/img/icon/image.svg" download="image.svg">
                  <Image
                    src="/img/icon/image.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/image.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/image.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-image</span>
                <span>f03e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/camera.svg" download="camera.svg">
                  <Image
                    src="/img/icon/camera.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/camera.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/camera.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-camera</span>
                <span>f030</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/camera-retro.svg"
                  download="camera-retro.svg"
                >
                  <Image
                    src="/img/icon/camera-retro.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/camera-retro.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/camera-retro.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-camera-retro</span>
                <span>f083</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/video-camera.svg"
                  download="video-camera.svg"
                >
                  <Image
                    src="/img/icon/video-camera.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/video-camera.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/video-camera.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-video-camera</span>
                <span>f131</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/film.svg" download="film.svg">
                  <Image
                    src="/img/icon/film.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/film.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/film.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-film</span>
                <span>f008</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/ticket.svg" download="ticket.svg">
                  <Image
                    src="/img/icon/ticket.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/ticket.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/ticket.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-ticket</span>
                <span>f145</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/microphone.svg" download="microphone.svg">
                  <Image
                    src="/img/icon/microphone.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/microphone.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/microphone.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-microphone</span>
                <span>f130</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/microphone-slash.svg"
                  download="microphone-slash.svg"
                >
                  <Image
                    src="/img/icon/microphone-slash.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/microphone-slash.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/microphone-slash.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-microphone-slash</span>
                <span>f131</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/search.svg" download="search.svg">
                  <Image
                    src="/img/icon/search.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/search.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/search.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-search</span>
                <span>f002</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/search-plus.svg" download="search-plus.svg">
                  <Image
                    src="/img/icon/search-plus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/search-plus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/search-plus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-search-plus</span>
                <span>f00e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/search-minus.svg"
                  download="search-minus.svg"
                >
                  <Image
                    src="/img/icon/search-minus.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/search-minus.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/search-minus.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-search-minus</span>
                <span>f010</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/youtube-play.svg"
                  download="youtube-play.svg"
                >
                  <Image
                    src="/img/icon/youtube-play.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/youtube-play.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/youtube-play.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-youtube-play</span>
                <span>f16a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/play.svg" download="play.svg">
                  <Image
                    src="/img/icon/play.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/play.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/play.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-play</span>
                <span>f04b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/pause.svg" download="pause.svg">
                  <Image
                    src="/img/icon/pause.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/pause.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/pause.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-pause</span>
                <span>f04c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/stop.svg" download="stop.svg">
                  <Image
                    src="/img/icon/stop.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/stop.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/stop.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-stop</span>
                <span>f04d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/eject.svg" download="eject.svg">
                  <Image
                    src="/img/icon/eject.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/eject.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/eject.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-eject</span>
                <span>f052</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/play-circle.svg" download="play-circle.svg">
                  <Image
                    src="/img/icon/play-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/play-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/play-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-play-circle</span>
                <span>f144</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/play-circle-o.svg"
                  download="play-circle-o.svg"
                >
                  <Image
                    src="/img/icon/play-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/play-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/play-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-play-circle-o</span>
                <span>f01d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/pause-circle.svg"
                  download="pause-circle.svg"
                >
                  <Image
                    src="/img/icon/pause-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/pause-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/pause-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-pause-circle</span>
                <span>f28b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/pause-circle-o.svg"
                  download="pause-circle-o.svg"
                >
                  <Image
                    src="/img/icon/pause-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/pause-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/pause-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-pause-circle-o</span>
                <span>f28c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/stop-circle.svg" download="stop-circle.svg">
                  <Image
                    src="/img/icon/stop-circle.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/stop-circle.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/stop-circle.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-stop-circle</span>
                <span>f28d</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/stop-circle-o.svg"
                  download="stop-circle-o.svg"
                >
                  <Image
                    src="/img/icon/stop-circle-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/stop-circle-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/stop-circle-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-stop-circle-o</span>
                <span>f28e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/random.svg" download="random.svg">
                  <Image
                    src="/img/icon/random.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/random.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/random.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-random</span>
                <span>f074</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/retweet.svg" download="retweet.svg">
                  <Image
                    src="/img/icon/retweet.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/retweet.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/retweet.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-retweet</span>
                <span>f079</span>
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
                <a href="/img/icon/backward.svg" download="backward.svg">
                  <Image
                    src="/img/icon/backward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/backward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/backward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-backward</span>
                <span>f04a</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/step-backward.svg"
                  download="step-backward.svg"
                >
                  <Image
                    src="/img/icon/step-backward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/step-backward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/step-backward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-step-backward</span>
                <span>f048</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/fast-backward.svg"
                  download="fast-backward.svg"
                >
                  <Image
                    src="/img/icon/fast-backward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/fast-backward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/fast-backward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-fast-backward</span>
                <span>f049</span>
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
                <a href="/img/icon/forward.svg" download="forward.svg">
                  <Image
                    src="/img/icon/forward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/forward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/forward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-forward</span>
                <span>f04e</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/step-forward.svg"
                  download="step-forward.svg"
                >
                  <Image
                    src="/img/icon/step-forward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/step-forward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/step-forward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-step-forward</span>
                <span>f051</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a
                  href="/img/icon/fast-forward.svg"
                  download="fast-forward.svg"
                >
                  <Image
                    src="/img/icon/fast-forward.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/fast-forward.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/fast-forward.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-fast-forward</span>
                <span>f050</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/volume-off.svg" download="volume-off.svg">
                  <Image
                    src="/img/icon/volume-off.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/volume-off.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/volume-off.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-volume-off</span>
                <span>f026</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/volume-down.svg" download="volume-down.svg">
                  <Image
                    src="/img/icon/volume-down.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/volume-down.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/volume-down.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-volume-down</span>
                <span>f027</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/volume-up.svg" download="volume-up.svg">
                  <Image
                    src="/img/icon/volume-up.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/volume-up.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/volume-up.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-volume-up</span>
                <span>f028</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/headphones.svg" download="headphones.svg">
                  <Image
                    src="/img/icon/headphones.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/headphones.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/headphones.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-headphones</span>
                <span>f025</span>
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
