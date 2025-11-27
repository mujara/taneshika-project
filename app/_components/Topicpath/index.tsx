import Image from "next/image";
import Link from "next/link";
type Props = {
  pageCategoty?: string;
  pageCategotyLink?: string;
  affiliationPage01?: string;
  affiliationPageLink01?: string;
  children: React.ReactNode;
};
export default function Topicpath({
  pageCategoty,
  pageCategotyLink,
  affiliationPage01,
  affiliationPageLink01,
  children,
}: Props) {
  return (
    <div className="topicpathBox">
      <ul>
        <li>
          <Link href="/">
            <span>
              <Image src="/img/common/iconHome.svg" alt="ホーム" fill />
            </span>
          </Link>
        </li>
        {/* pageCategoty と pageCategotyLink がある場合のみ表示 */}
        {pageCategoty && pageCategotyLink && (
          <li>
            <Link href={pageCategotyLink}>{pageCategoty}</Link>
          </li>
        )}
        {/* affiliationPage01 と affiliationPageLink01 がある場合のみ表示 */}
        {affiliationPage01 && affiliationPageLink01 && (
          <li>
            <Link href={affiliationPageLink01}>{affiliationPage01}</Link>
          </li>
        )}
        <li>{children}</li>
      </ul>
      {/* /.topicpathBox */}
    </div>
  );
}
