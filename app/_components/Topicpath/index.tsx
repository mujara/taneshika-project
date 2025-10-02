import Link from "next/link";
type Props = {
  pageCategoty?: string;
  pageCategotyLink?: string;
  children: React.ReactNode;
};
export default function Topicpath({
  pageCategoty,
  pageCategotyLink,
  children,
}: Props) {
  return (
    <div className="topicpathBox">
      <ul>
        <li>
          <Link href="/">
            <span>
              <img src="/img/common/iconHome.svg" alt="ホーム" />
            </span>
          </Link>
        </li>
        {/* pageCategoty と pageCategotyLink がある場合のみ表示 */}
        {pageCategoty && pageCategotyLink && (
          <li>
            <Link href={pageCategotyLink}>{pageCategoty}</Link>
          </li>
        )}
        <li>{children}</li>
      </ul>
      {/* /.topicpathBox */}
    </div>
  );
}
