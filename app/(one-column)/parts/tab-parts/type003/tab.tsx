"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function TabType03() {
  useEffect(() => {
    // URLのパラメータ取得
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");

    // タブ要素取得
    const tabType03Elements = document.getElementsByName(
      "tab--type03__input",
    ) as NodeListOf<HTMLInputElement>;

    if (!tabParam) return;

    if (tabParam === "type03Label000") {
      tabType03Elements[0].checked = true;
    } else if (tabParam === "type03Label001") {
      tabType03Elements[1].checked = true;
    } else if (tabParam === "type03Label002") {
      tabType03Elements[2].checked = true;
    } else if (tabParam === "type03Label003") {
      tabType03Elements[3].checked = true;
    }
  }, []);

  return (
    <div className={`sM-l w80-pc sC ${styles["tabBox--type03"]}`}>
      <input
        type="radio"
        name="tab--type03__input"
        id="tab--type03__label000"
        defaultChecked
      />
      <label htmlFor="tab--type03__label000">
        <span>全ての項目</span>
      </label>

      <input
        type="radio"
        name="tab--type03__input"
        id="tab--type03__label001"
      />
      <label htmlFor="tab--type03__label001">
        <span>カテゴリー01の項目</span>
      </label>

      <input
        type="radio"
        name="tab--type03__input"
        id="tab--type03__label002"
      />
      <label htmlFor="tab--type03__label002">
        <span>カテゴリー02の項目</span>
      </label>

      <input
        type="radio"
        name="tab--type03__input"
        id="tab--type03__label003"
      />
      <label htmlFor="tab--type03__label003">
        <span>カテゴリー03の項目</span>
      </label>

      <ul className={styles["tab__content"]}>
        <li className={styles["--category01"]}>
          項目01　カテゴリー01　
          <Link href="/parts/tab-parts/type003">コードの詳細はこちら</Link>
        </li>
        <li className={styles["--category02"]}>項目02　カテゴリー02</li>
        <li className={styles["--category02"]}>項目03　カテゴリー02</li>
        <li className={styles["--category01"]}>項目04　カテゴリー01</li>
        <li className={styles["--category03"]}>項目05　カテゴリー03</li>
        <li className={styles["--category01"]}>項目06　カテゴリー01</li>
        <li className={styles["--category03"]}>項目07　カテゴリー03</li>
        <li className={styles["--category02"]}>項目08　カテゴリー02</li>
        <li className={styles["--category01"]}>項目09　カテゴリー01</li>
        <li className={styles["--category01"]}>項目10　カテゴリー01</li>
        <li className={styles["--category03"]}>項目11　カテゴリー03</li>
        <li className={styles["--category01"]}>項目12　カテゴリー01</li>
        <li className={styles["--category02"]}>項目13　カテゴリー02</li>
        <li className={styles["--category03"]}>項目14　カテゴリー03</li>
        <li className={styles["--category01"]}>項目15　カテゴリー01</li>
        <li className={styles["--category01"]}>項目16　カテゴリー01</li>
        <li className={styles["--category03"]}>項目17　カテゴリー03</li>
        <li className={styles["--category03"]}>項目18　カテゴリー03</li>
        <li className={styles["--category01"]}>項目19　カテゴリー01</li>
        <li className={styles["--category02"]}>項目20　カテゴリー02</li>
      </ul>
    </div>
  );
}
