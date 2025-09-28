import Link from "next/link";
export default function Header() {
  return (
    <header id="header" className="clearfix">
      <div className="header__inner">
        <div className="header__siteTitleBox">
          <Link href="/">
            <h1 className="header__siteTitle">
              <img src="/img/common/siteTitle.svg" alt="タネも仕掛けも" />
            </h1>
          </Link>
          {/* <!-- /.header__siteTitleBox -->*/}
        </div>

        <nav className="globalNavi --typeCardOnly">
          <ul className="globalNavi__menu__main">
            <li>
              <Link href="/archive">
                <img src="/img/common/iconCircle.svg" alt="Archive" />
              </Link>
            </li>
            <li>
              <Link href="/parts">
                <img src="/img/common/iconCross.svg" alt="Parts" />
              </Link>
            </li>
            <li>
              <Link href="/layout">
                <img src="/img/common/iconWave.svg" alt="Layout" />
              </Link>
            </li>
            <li>
              <Link href="/image">
                <img src="/img/common/iconSquare.svg" alt="Image" />
              </Link>
            </li>
            <li>
              <Link href="/unclassifiable">
                <img src="/img/common/iconStar.svg" alt="Unclassifiable" />
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
            aria-hidden="true"
          >
            <div className="globalNaviSmall__menu">
              <div className="globalNaviSmall__menu__inner">
                <div className="pageDecoration">
                  <figure>
                    <img
                      src="/img/common/imgEdgeDecoration.svg"
                      alt="「and what is the use of a book, 」thought Alice, 「without pictures or conversations?」Alice’s Adventures in Wonderland"
                    />
                  </figure>
                  <figure>
                    <img src="/img/common/imgEdgeDecoration.svg" alt="" />
                  </figure>
                  <figure>
                    <img
                      src="/img/common/imgEdgeDecoration_bottom.svg"
                      alt=""
                    />
                  </figure>
                  <figure>
                    <img
                      src="/img/common/imgEdgeDecoration_bottom.svg"
                      alt="俺は玄妙怪奇な幻を意のままにできるのだ ランボー「地獄の一季節」"
                    />
                  </figure>
                  {/* <!-- /.pageDecoration -->*/}
                </div>

                <div className="header__siteTitleBox">
                  <Link href="/">
                    <div className="header__image">
                      <figure>
                        <img
                          src="/img/home/imgTambourine.png"
                          alt="タンバリン"
                        />
                      </figure>
                      <figure>
                        <img src="/img/home/imgViolin.png" alt="バイオリン" />
                      </figure>
                      <figure>
                        <img src="/img/home/imgDrum.png" alt="ドラム" />
                      </figure>
                      {/* <!-- /.header__image -->*/}
                    </div>
                    <h1 className="header__siteTitle">
                      <img
                        src="/img/common/siteTitle.svg"
                        alt="タネも仕掛けも"
                      />
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
              <img src="/img/common/imgBookmark.png" alt="" />
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
