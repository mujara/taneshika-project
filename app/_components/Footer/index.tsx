import Link from "next/link";
export default function Footer() {
  return (
    <footer id="footer">
      <figure className="footer__image">
        <img src="/img/common/bgFooter.svg" alt="" />
      </figure>
      <div className="footer__siteTitle">
        <img src="/img/common/siteTitle.svg" alt="タネも仕掛けも" />
      </div>
      <ul className="footer__navi">
        <li>
          <Link href="/archive">Archive</Link>
        </li>
        <li>
          <Link href="/parts">Parts</Link>
        </li>
        <li>
          <Link href="/layout">Layout</Link>
        </li>
        <li>
          <Link href="/image">Image</Link>
        </li>
        <li>
          <Link href="/Unclassifiable">Unclassifiable</Link>
        </li>
      </ul>
      <div className="footer__bottom">
        <Link href="/privacy-policy">Privacypolicy</Link>
        <small className="copyright">
          &copy; タネも仕掛けも. All Rights Reserved.
        </small>
      </div>
      {/*  /#footer  */}
    </footer>
  );
}
