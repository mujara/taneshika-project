import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <div id="wrapper">
        <div className="pageDecoration">
          <figure>
            <Image src="/img/common/imgEdgeDecoration.svg" alt="" fill />
          </figure>
          <figure>
            <Image src="/img/common/imgEdgeDecoration.svg" alt="" fill />
          </figure>
          <figure>
            <Image src="/img/common/imgEdgeDecoration_bottom.svg" alt="" fill />
          </figure>
          <figure>
            <Image src="/img/common/imgEdgeDecoration_bottom.svg" alt="" fill />
          </figure>
        </div>

        <header id="header" className="clearfix">
          <div className="header__imageBox">
            <figure className="parallax--type01">
              <Image src="/img/home/imgMainVisual01.png" alt="" fill />
            </figure>
            <figure className="parallax--type02">
              <Image src="/img/home/imgMainVisual02.png" alt="" fill />
            </figure>
            <figure className="parallax--type01">
              <Image src="/img/home/imgMainVisual03.png" alt="" fill />
            </figure>
            <figure className="parallax--type02">
              <Image src="/img/home/imgMainVisual04.png" alt="" fill />
            </figure>
            <figure className="parallax--type02">
              <Image src="/img/home/imgMainVisual05.png" alt="" fill />
            </figure>
            <figure className="parallax--type01">
              <Image src="/img/home/imgMainVisual06.png" alt="" fill />
            </figure>
            <figure>
              <Image src="/img/home/imgMainVisual07.png" alt="" fill />
            </figure>
            <figure className="parallax--type03">
              <Image src="/img/home/imgMainVisual08.png" alt="" fill />
            </figure>
            <figure className="parallax--type03">
              <Image src="/img/home/imgMainVisual09.png" alt="" fill />
            </figure>
            <figure className="parallax--type04">
              <Image src="/img/home/imgMainVisual10.png" alt="" fill />
            </figure>
            <figure className="parallax--type03">
              <Image src="/img/home/imgMainVisual11.png" alt="" fill />
            </figure>
            <figure className="parallax--type03">
              <Image src="/img/home/imgMainVisual12.png" alt="" fill />
            </figure>
          </div>

          <div className="header__siteTitleBox">
            <div className="header__image">
              <figure>
                <Image
                  src="/img/home/imgTambourine5.png"
                  alt="タンバリン"
                  width={111}
                  height={142}
                  sizes="100%"
                />
              </figure>
              <figure>
                <Image
                  src="/img/home/imgViolin2.png"
                  alt="バイオリン"
                  width={184}
                  height={298}
                />
              </figure>
              <figure>
                <Image
                  src="/img/home/imgDrum2.png"
                  alt="ドラム"
                  width={176}
                  height={186}
                />
              </figure>
            </div>
            <h1 className="header__siteTitle">
              <Image
                src="/img/common/siteTitle.svg"
                alt="タネも仕掛けも"
                fill
              />
            </h1>
          </div>

          <nav className="globalNavi">
            <div className="inBase clearfix">
              <ul className="globalNavi__menu__main">
                <li>
                  <a href="archive">Archive</a>
                </li>
                <li>
                  <a href="parts">Parts</a>
                </li>
                <li>
                  <a href="layout">Layout</a>
                </li>
                <li>
                  <a href="image">Image</a>
                </li>
                <li>
                  <a href="unclassifiable">Unclassifiable</a>
                </li>
              </ul>
            </div>
          </nav>

          <nav className="globalNaviSmall">
            <input
              type="checkbox"
              className="globalNaviSmall__check"
              id="globalNaviSmall__button"
            />
            <label htmlFor="globalNaviSmall__button">
              <div
                id="globalNaviSmall__button"
                className="globalNaviSmall__icon globalNaviSmall__icon--type01"
              >
                <div className="globalNaviSmall__iconButton">
                  <span className="iconButton--top"></span>
                  <span className="iconButton--middle"></span>
                  <span className="iconButton--bottom"></span>
                </div>
              </div>
            </label>
            <dialog
              className="globalNaviSmall__content"
              id="modal-globalNaviSmall"
              aria-hidden="true"
            >
              <div className="globalNaviSmall__menu">
                <div className="globalNaviSmall__menu__inner">
                  <ul className="globalNaviSmall__menu__main">
                    <li>
                      <a href="archive">Archive</a>
                    </li>
                    <li>
                      <a href="parts">Parts</a>
                    </li>
                    <li>
                      <a href="layout">Layout</a>
                    </li>
                    <li>
                      <a href="image">Image</a>
                    </li>
                    <li>
                      <a href="unclassifiable">Unclassifiable</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nonScroll"></div>
            </dialog>
          </nav>
          <div className="header__bookmark" id="btnBookmark">
            <a href="bookmark">
              <span>
                <Image src="/img/common/imgBookmark.png" alt="" fill />
              </span>
            </a>
          </div>
          <div className="header__bottom">
            <div className="header__bottom__inner"></div>
            <div className="header__bottom__inner"></div>
          </div>
        </header>

        <div className={styles.page}>
          <main className={styles.main}>
            <h1>テクノロジーの力で世界を変えるああああ</h1>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol>
              <li>
                Get started by editing <code>app/page.tsx</code>.
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>

            <div className={styles.ctas}>
              <a
                className={styles.primary}
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.logo}
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Read our docs
              </a>
            </div>
          </main>
          <footer className={styles.footer}>
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
