import styles from "./page.module.css";
import Link from "next/link";

export default function AccordionType04() {
  return (
    <div className={`sM-l w80-pc sC ${styles["accordionBox--type04"]}`}>
      <div className={styles.accordion}>
        <input type="checkbox" id="accordion--type04__label001" />
        <label htmlFor="accordion--type04__label001">
          <div className={styles["accordion__button"]}>
            <p>
              <span>内容を表示する</span>
              <span>内容を閉じる</span>
            </p>
            <div className={styles["accordion__icon"]}>
              <div></div>
              <div></div>
            </div>
          </div>
        </label>
        <div className={styles["accordion__content"]}>
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          項目タイトルの閉じられている内容です。項目タイトルの閉じられている内容です。
          <br />
          項目タイトルの閉じられている内容です。
          <br />
          <br />
          <Link href="/parts/accordion-parts/type004">
            コードの詳細はこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
