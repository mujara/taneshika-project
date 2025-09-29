import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number; // ← これに統一
  basePath?: string;
  q?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/archive",
  q,
}: Props) {
  const totalPages = Math.ceil(totalCount / ARCHIVE_LIST_LIMIT);
  if (totalPages <= 1) return null; // 1ページだけなら非表示

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}${q ? `?q=${q}` : ""}`}
                className={styles.item}
              >
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
