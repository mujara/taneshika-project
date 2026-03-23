import styles from "./page.module.css";
import Link from "next/link";
//import Image from "next/image";

export default function PartType01() {
  return (
    <div className={`sM-l sC ${styles["imageButton--type01"]}`}>
      <Link href="/parts/image-button/type001">
        <figure className={styles["button__image"]}><img src="/img/demo/sample2x1.jpg" width="480" height="240" alt="" /></figure>
        <p className={styles["button__label"]}>ボタンのラベルのテキスト</p>
        <p className={styles["button__title"]}>ボタンタイトルのテキスト</p>
      </Link>
    </div>
  );
}
