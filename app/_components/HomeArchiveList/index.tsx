"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Archive } from "@/app/_libs/microcms";
import cx from "classnames";
import Date from "../Date";

type Props = {
  archive: Archive[];
};

export default function HomeArchiveList({ archive }: Props) {
  const [numList, setNumList] = useState<number[] | null>(null);

  useEffect(() => {
    if (archive.length === 0) return;

    const arr = Array.from(
      { length: archive.length },
      () => Math.floor(Math.random() * 9) + 1 // 1〜9 のランダム値
    );
    setNumList(arr);
  }, [archive]);

  if (archive.length === 0) {
    return <p>記事がありません。</p>;
  }
  if (!numList) {
    return <p>Loading...</p>;
  }

  return (
    <div className="homeArchiveBox__inner">
      {archive.map((article, index) => (
        <div
          className={cx("homeArchiveBox__card", `--type0${numList[index]}`)}
          key={article.id}
        >
          <a href={`/archive/${article.id}`}>
            <p>
              <Date date={article.publishedAt ?? article.createdAt} />
            </p>
            <h3>{article.title}</h3>
          </a>
          <ul>
            <li>
              <Link href={`/archive/category/${article.category.id}`}>
                {article.category.name}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
