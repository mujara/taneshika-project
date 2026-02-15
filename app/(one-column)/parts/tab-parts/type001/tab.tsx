"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function TabType01() {
  useEffect(() => {
    // URLのパラメータ取得
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");

    // タブ要素取得
    const tabType01Elements = document.getElementsByName(
      "tab--type01__input",
    ) as NodeListOf<HTMLInputElement>;

    if (!tabParam) return;

    if (tabParam === "type01Label001") {
      tabType01Elements[0].checked = true;
    } else if (tabParam === "type01Label002") {
      tabType01Elements[1].checked = true;
    } else if (tabParam === "type01Label003") {
      tabType01Elements[2].checked = true;
    }
  }, []);

  return (
    <div className={`sM-l w80-pc sC ${styles["tabBox--type01"]}`}>
      <input
        type="radio"
        name="tab--type01__input"
        id="tab--type01__label001"
        defaultChecked
      />
      <label htmlFor="tab--type01__label001">一つ目のタブの名前</label>

      <input
        type="radio"
        name="tab--type01__input"
        id="tab--type01__label002"
      />
      <label htmlFor="tab--type01__label002">二つ目のタブの名前</label>

      <input
        type="radio"
        name="tab--type01__input"
        id="tab--type01__label003"
      />
      <label htmlFor="tab--type01__label003">三つ目のタブの名前</label>

      <div className={styles["tab__content"]}>
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        <br />
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        <br />
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        <br />
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        <br />
        <br />
        <Link href="/parts/tab-parts/type001">コードの詳細はこちら</Link>
      </div>

      <div className={styles["tab__content"]}>
        二つ目の内容です。二つ目の内容です。二つ目の内容です。
        <br />
        二つ目の内容です。二つ目の内容です。二つ目の内容です。
        <br />
        二つ目の内容です。二つ目の内容です。二つ目の内容です。
        <br />
        二つ目の内容です。二つ目の内容です。二つ目の内容です。
        <br />
        <br />
        <Link href="/parts/tab-parts/type001">コードの詳細はこちら</Link>
      </div>

      <div className={styles["tab__content"]}>
        三つ目の内容です。三つ目の内容です。三つ目の内容です。
        <br />
        三つ目の内容です。三つ目の内容です。三つ目の内容です。
        <br />
        三つ目の内容です。三つ目の内容です。三つ目の内容です。
        <br />
        三つ目の内容です。三つ目の内容です。三つ目の内容です。
        <br />
        <br />
        <Link href="/parts/tab-parts/type001">コードの詳細はこちら</Link>
      </div>
    </div>
  );
}
