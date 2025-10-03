import Image from "next/image";
export default function HomeHeader() {
  return (
    <header id="header" className="clearfix">
      <div className="header__imageBox">
        <figure className="parallax--type01">
          <span>
            <Image
              src="/img/home/imgMainVisual01.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type02">
          <span>
            <Image
              src="/img/home/imgMainVisual02.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type01">
          <span>
            <Image
              src="/img/home/imgMainVisual03.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type02">
          <span>
            <Image
              src="/img/home/imgMainVisual04.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type02">
          <span>
            <Image
              src="/img/home/imgMainVisual05.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type01">
          <span>
            <Image
              src="/img/home/imgMainVisual06.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure>
          <span>
            <Image
              src="/img/home/imgMainVisual07.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type03">
          <span>
            <Image
              src="/img/home/imgMainVisual08.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type03">
          <span>
            <Image
              src="/img/home/imgMainVisual09.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type04">
          <span>
            <Image
              src="/img/home/imgMainVisual10.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type03">
          <span>
            <Image
              src="/img/home/imgMainVisual11.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
        <figure className="parallax--type03">
          <span>
            <Image
              src="/img/home/imgMainVisual12.png"
              sizes="100vw"
              alt=""
              fill
            />
          </span>
        </figure>
      </div>

      <div className="header__siteTitleBox">
        <div className="header__image">
          <figure>
            <Image
              src="/img/home/imgTambourine.png"
              alt="タンバリン"
              width={111}
              height={142}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgViolin.png"
              alt="バイオリン"
              width={184}
              height={298}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgDrum.png"
              alt="ドラム"
              width={176}
              height={186}
            />
          </figure>
        </div>
        <h1 className="header__siteTitle">
          <Image src="/img/common/siteTitle.svg" alt="タネも仕掛けも" fill />
        </h1>
      </div>

      <nav className="globalNavi">
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
  );
}
