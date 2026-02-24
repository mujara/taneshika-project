import type { Metadata } from "next";
import styles from "../page.module.css";
import Link from "next/link";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import Image from "next/image";

// ページ情報
const data = {
  title: "ファイルやフォルダのアイコン",
  description: "WEB制作でよく使うファイルやフォルダのアイコンを集めました",
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
                <a href="/img/icon/file.svg" download="file.svg">
                  <Image
                    src="/img/icon/file.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file</span>
                <span>f15b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-o.svg" download="file-o.svg">
                  <Image
                    src="/img/icon/file-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-o</span>
                <span>f016</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-text.svg" download="file-text.svg">
                  <Image
                    src="/img/icon/file-text.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-text.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-text.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-text</span>
                <span>f15c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-text-o.svg" download="file-text-o.svg">
                  <Image
                    src="/img/icon/file-text-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-text-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-text-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-text-o</span>
                <span>f0f6</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/folder.svg" download="folder.svg">
                  <Image
                    src="/img/icon/folder.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/folder.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/folder.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-folder</span>
                <span>f07b</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/folder-o.svg" download="folder-o.svg">
                  <Image
                    src="/img/icon/folder-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/folder-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/folder-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-folder-o</span>
                <span>f114</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/folder-open.svg" download="folder-open.svg">
                  <Image
                    src="/img/icon/folder-open.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/folder-open.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/folder-open.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-folder-open</span>
                <span>f07c</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/folder-open-o.svg" download="folder-open-o.svg">
                  <Image
                    src="/img/icon/folder-open-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/folder-open-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/folder-open-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-folder-open-o</span>
                <span>f114</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/archive.svg" download="archive.svg">
                  <Image
                    src="/img/icon/archive.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/archive.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/archive.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-archive</span>
                <span>f187</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/clipboard.svg" download="clipboard.svg">
                  <Image
                    src="/img/icon/clipboard.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/clipboard.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/clipboard.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-clipboard</span>
                <span>f0ea</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/inbox.svg" download="inbox.svg">
                  <Image
                    src="/img/icon/inbox.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/inbox.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/inbox.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-inbox</span>
                <span>f01c</span>
              </div>

              <div className={`hidden-sp ${styles["iconCommonItem"]}`}></div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-pdf-o.svg" download="file-pdf-o.svg">
                  <Image
                    src="/img/icon/file-pdf-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-pdf-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-pdf-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-pdf-o</span>
                <span>f1c1</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-archive-o.svg" download="file-archive-o.svg">
                  <Image
                    src="/img/icon/file-archive-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-archive-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-archive-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-zip-o</span>
                <span>f1c6</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-image-o.svg" download="file-image-o.svg">
                  <Image
                    src="/img/icon/file-image-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-image-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-image-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-image-o</span>
                <span>f1c5</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-movie-o.svg" download="file-movie-o.svg">
                  <Image
                    src="/img/icon/file-movie-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-movie-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-movie-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-movie-o</span>
                <span>f1c8</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-audio-o.svg" download="file-audio-o.svg">
                  <Image
                    src="/img/icon/file-audio-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-audio-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-audio-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-audio-o</span>
                <span>f1c7</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-code-o.svg" download="file-code-o.svg">
                  <Image
                    src="/img/icon/file-code-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-code-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-code-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-code-o</span>
                <span>f1c9</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-word-o.svg" download="file-word-o.svg">
                  <Image
                    src="/img/icon/file-word-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-word-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-word-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-word-o</span>
                <span>f1c2</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-excel-o.svg" download="file-excel-o.svg">
                  <Image
                    src="/img/icon/file-excel-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-excel-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-excel-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-excel-o</span>
                <span>f1c3</span>
              </div>

              <div className={styles.iconCommonItem}>
                <a href="/img/icon/file-powerpoint-o.svg" download="file-powerpoint-o.svg">
                  <Image
                    src="/img/icon/file-powerpoint-o.svg"
                    alt="アイコン"
                    width={16}
                    height={16}
                  />
                  <Image
                    src="/img/icon/file-powerpoint-o.svg"
                    alt="アイコン"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/img/icon/file-powerpoint-o.svg"
                    alt="アイコン"
                    width={48}
                    height={48}
                  />
                </a>
                <span>icon-file-powerpoint-o</span>
                <span>f1c4</span>
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
