import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header id="header" className="clearfix">
      <div className="header__inner">
        <div className="header__siteTitleBox">
          <Link href="/">
            <h1 className="header__siteTitle">
              <span>
                <Image
                  src="/img/common/siteTitle.svg"
                  alt="タネも仕掛けも"
                  fill
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </span>
            </h1>
          </Link>
          {/* <!-- /.header__siteTitleBox -->*/}
        </div>

        <nav className="globalNavi --typeCardOnly">
          <ul className="globalNavi__menu__main">
            <li>
              <Link href="/archive">
                <span>
                  <Image
                    src="/img/common/iconCircle.svg"
                    alt="Archive"
                    fill
                    sizes="28.8px"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/parts">
                <span>
                  <Image
                    src="/img/common/iconCross.svg"
                    alt="Parts"
                    fill
                    sizes="28.8px"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/layout">
                <span>
                  <Image
                    src="/img/common/iconWave.svg"
                    alt="Layout"
                    fill
                    sizes="28.8px"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/image">
                <span>
                  <Image
                    src="/img/common/iconSquare.svg"
                    alt="Image"
                    fill
                    sizes="28.8px"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/unclassifiable">
                <span>
                  <Image
                    src="/img/common/iconStar.svg"
                    alt="Unclassifiable"
                    fill
                    sizes="28.8px"
                    unoptimized={process.env.NODE_ENV === "development"}
                  />
                </span>
              </Link>
            </li>
          </ul>
          {/* <!-- /.globalNavi -->*/}
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
          >
            <div className="globalNaviSmall__menu">
              <div className="globalNaviSmall__menu__inner">
                <div className="pageDecoration">
                  <figure>
                    <Image
                      src="/img/common/imgEdgeDecoration.svg"
                      alt="「and what is the use of a book, 」thought Alice, 「without pictures or conversations?」Alice’s Adventures in Wonderland"
                      fill
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/img/common/imgEdgeDecoration.svg"
                      alt=""
                      fill
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/img/common/imgEdgeDecoration_bottom.svg"
                      alt=""
                      fill
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/img/common/imgEdgeDecoration_bottom.svg"
                      alt="俺は玄妙怪奇な幻を意のままにできるのだ ランボー「地獄の一季節」"
                      fill
                    />
                  </figure>
                  {/* <!-- /.pageDecoration -->*/}
                </div>

                <div className="header__siteTitleBox">
                  <Link href="/">
                    <div className="header__image">
                      <figure>
                        <span>
                          <Image
                            src="/img/home/imgTambourine.png"
                            alt="タンバリン"
                            fill
                            unoptimized={process.env.NODE_ENV === "development"}
                          />
                        </span>
                      </figure>
                      <figure>
                        <span>
                          <Image
                            src="/img/home/imgViolin.png"
                            alt="バイオリン"
                            fill
                            unoptimized={process.env.NODE_ENV === "development"}
                          />
                        </span>
                      </figure>
                      <figure>
                        <span>
                          <Image
                            src="/img/home/imgDrum.png"
                            alt="ドラム"
                            fill
                            unoptimized={process.env.NODE_ENV === "development"}
                          />
                        </span>
                      </figure>
                      {/* <!-- /.header__image -->*/}
                    </div>
                    <h1 className="header__siteTitle">
                      <span>
                        <Image
                          src="/img/common/siteTitle.svg"
                          alt="タネも仕掛けも"
                          fill
                          unoptimized={process.env.NODE_ENV === "development"}
                        />
                      </span>
                    </h1>
                  </Link>
                  {/* <!-- /.header__siteTitleBox -->*/}
                </div>

                <ul className="globalNaviSmall__menu__main">
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
                    <Link href="/unclassifiable">Unclassifiable</Link>
                  </li>
                </ul>
                {/* <!-- /.globalNaviSmall__menu__inner -->*/}
              </div>
              {/* <!-- /.globalNaviSmall__menu -->*/}
            </div>

            <div className="nonScroll"></div>
            {/* <!-- /.globalNaviSmall__content -->*/}
          </dialog>
          {/* <!-- /.globalNaviSmall -->*/}
        </nav>
        <div className="header__bookmark" id="btnBookmark">
          <Link href="bookmark.html">
            <span>
              <Image
                src="/img/common/imgBookmark.png"
                alt="ブックマーク"
                fill
                sizes="152px"
                unoptimized={process.env.NODE_ENV === "development"}
              />
            </span>
          </Link>
          {/* <!-- /.header__bookmark -->*/}
        </div>
        {/* <!-- /.header__inner -->*/}
      </div>
      {/* <!-- /#header -->*/}
    </header>
  );
}
