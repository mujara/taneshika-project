import styles from "./page.module.css";
import Link from "next/link";
//import Image from "next/image";

export default function PartType007() {
  return (
    <div className={`sM-l sC ${styles["imageButton--type007"]}`}>
      <Link href="/parts/image-button/type007">
        <figure className={styles["button__image"]}>
          <img src="/img/demo/sample2x1L.jpg" width="480" height="240" alt="" />
          <figcaption>ボタンタイトルのテキスト</figcaption>
        </figure>
      </Link>
    </div>
  );
}
