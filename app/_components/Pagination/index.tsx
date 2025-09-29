import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
  currentPage?: number;
  pageLimit?: number;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/archive",
  q,
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / ARCHIVE_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}` + (q ? `?q=${q}` : "")}
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
