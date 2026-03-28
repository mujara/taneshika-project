import styles from "./page.module.css";
import Link from "next/link";
//import Image from "next/image";

export default function PartType006() {
  return (
    <div className={`sM-l sC ${styles["imageButton--type006"]}`}>
      <Link href="/parts/image-button/type006">
        <figure className={styles["button__image"]}>
          <img src="/img/demo/sample2x1L.jpg" width="480" height="240" alt="" />
          <figcaption>ボタンタイトル<br/>のテキスト</figcaption>
        </figure>
      </Link>
    </div>
  );
}
