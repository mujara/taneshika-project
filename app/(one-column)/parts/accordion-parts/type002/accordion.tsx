import styles from "./page.module.css";
import Link from "next/link";

export default function AccordionType02() {
  return (
    <div className={`sM-l w80-pc sC ${styles["accordionBox--type02"]}`}>
      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type02__label001" />
        <label htmlFor="accordion--type02__label001">項目タイトル 01</label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type002">
            コードの詳細はこちら
          </Link>
        </div>
      </div>

      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type02__label002" />
        <label htmlFor="accordion--type02__label002">項目タイトル 02</label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type002">
            コードの詳細はこちら
          </Link>
        </div>
      </div>

      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type02__label003" />
        <label htmlFor="accordion--type02__label003">項目タイトル 03</label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type002">
            コードの詳細はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
