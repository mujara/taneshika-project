"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function TabType02() {
  useEffect(() => {
    // URLのパラメータ取得
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");

    // タブ要素取得
    const tabType02Elements = document.getElementsByName(
      "tab--type02__input",
    ) as NodeListOf<HTMLInputElement>;

    if (!tabParam) return;

    if (tabParam === "type02Label001") {
      tabType02Elements[0].checked = true;
    } else if (tabParam === "type02Label002") {
      tabType02Elements[1].checked = true;
    } else if (tabParam === "type02Label003") {
      tabType02Elements[2].checked = true;
    }
  }, []);

  return (
    <div className={`sM-l w80-pc sC ${styles["tabBox--type02"]}`}>
      <input
        type="radio"
        name="tab--type02__input"
        id="tab--type02__label001"
        defaultChecked
      />
      <label htmlFor="tab--type02__label001">
        <span>一つ目のタブの名前</span>
      </label>

      <input
        type="radio"
        name="tab--type02__input"
        id="tab--type02__label002"
      />
      <label htmlFor="tab--type02__label002">
        <span>二つ目のタブの名前</span>
      </label>

      <input
        type="radio"
        name="tab--type02__input"
        id="tab--type02__label003"
      />
      <label htmlFor="tab--type02__label003">
        <span>三つ目のタブの名前</span>
      </label>

      <div className={styles["tab__content"]}>
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        <br />
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        一つ目の内容です。一つ目の内容です。一つ目の内容です。
        <br />
        <br />
        <Link href="/parts/tab-parts/type002">コードの詳細はこちら</Link>
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
        <Link href="/parts/tab-parts/type002">コードの詳細はこちら</Link>
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
        <Link href="/parts/tab-parts/type002">コードの詳細はこちら</Link>
      </div>
    </div>
  );
}
