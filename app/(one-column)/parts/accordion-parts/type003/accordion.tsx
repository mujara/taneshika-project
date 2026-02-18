import styles from "./page.module.css";
import Link from "next/link";

export default function AccordionType03() {
  return (
    <div className={`sM-l w80-pc sC ${styles["accordionBox--type03"]}`}>
      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type03__label001" />
        <label htmlFor="accordion--type03__label001">
          <span>項目タイトル 01</span>
          <div className={styles["accordion__icon"]}>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type003">
            コードの詳細はこちら
          </Link>
        </div>
      </div>

      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type03__label002" />
        <label htmlFor="accordion--type03__label002">
          <span>項目タイトル 02</span>
          <div className={styles["accordion__icon"]}>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type003">
            コードの詳細はこちら
          </Link>
        </div>
      </div>

      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type03__label003" />
        <label htmlFor="accordion--type03__label003">
          <span>項目タイトル 03</span>
          <div className={styles["accordion__icon"]}>
            <div></div>
            <div></div>
          </div>
        </label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type003">
            コードの詳細はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
