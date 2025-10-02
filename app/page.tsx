import Image from "next/image";
{
  /* import styles from "./page.module.css";*/
}
import { getHomeArchiveList } from "@/app/_libs/microcms";
import { HOME_ARCHIVE_LIMIT } from "@/app/_constants";
import cx from "classnames";

import HomeArchiveList from "@/app/_components/HomeArchiveList";
import ButtonLink from "@/app/_components/ButtonLink";
import Footer from "./_components/Footer";
import ButtonRise from "@/app/_components/ButtonRise";

export const revalidate = 60;

export default async function Home() {
  const data = await getHomeArchiveList({
    limit: HOME_ARCHIVE_LIMIT,
  });
  return (
    <body className="home">
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
              <img src="/img/home/imgMainVisual01.png" alt="" />
            </figure>
            <figure className="parallax--type02">
              <img src="/img/home/imgMainVisual02.png" alt="" />
            </figure>
            <figure className="parallax--type01">
              <img src="/img/home/imgMainVisual03.png" alt="" />
            </figure>
            <figure className="parallax--type02">
              <img src="/img/home/imgMainVisual04.png" alt="" />
            </figure>
            <figure className="parallax--type02">
              <img src="/img/home/imgMainVisual05.png" alt="" />
            </figure>
            <figure className="parallax--type01">
              <img src="/img/home/imgMainVisual06.png" alt="" />
            </figure>
            <figure>
              <img src="/img/home/imgMainVisual07.png" alt="" />
            </figure>
            <figure className="parallax--type03">
              <img src="/img/home/imgMainVisual08.png" alt="" />
            </figure>
            <figure className="parallax--type03">
              <img src="/img/home/imgMainVisual09.png" alt="" />
            </figure>
            <figure className="parallax--type04">
              <img src="/img/home/imgMainVisual10.png" alt="" />
            </figure>
            <figure className="parallax--type03">
              <img src="/img/home/imgMainVisual11.png" alt="" />
            </figure>
            <figure className="parallax--type03">
              <img src="/img/home/imgMainVisual12.png" alt="" />
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
              <Image
                src="/img/common/siteTitle.svg"
                alt="タネも仕掛けも"
                fill
              />
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

        <div id="contents" className="clearfix">
          <div
            className={cx("homeArchiveBox", "is-active")}
            id="sectionHomeArchive"
          >
            <div className="homeArchiveBox__title">
              <h2>Archive</h2>
            </div>
            <div className="breadthScrollBox">
              <div className="inBase clearfix">
                <HomeArchiveList archive={data.contents} />
                {/* /.inBase */}
              </div>
              {/* /.breadthScrollBox */}
            </div>
            <div className="inBase clearfix">
              <div className="button--type01">
                <ButtonLink href="/archive">More</ButtonLink>
              </div>
              {/* /.inBase */}
            </div>
            {/* /.homeArchiveBox */}
          </div>

          <div className="homeAboutBox">
            <div className="inBase clearfix">
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout01.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout02.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout03.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout04.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout05.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout06.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__bg">
                <figure>
                  <img src="/img/home/bgAbout07.png" alt="" />
                </figure>
                {/* /.homeAboutBox__bg */}
              </div>
              <div className="homeAboutBox__image">
                <figure className="parallax--type06">
                  <img src="/img/home/imgRope01.png" alt="" />
                </figure>
                <figure className="parallax--type07">
                  <img src="/img/home/imgRope02.png" alt="" />
                </figure>
                <div className="homeAboutBox__playingCard">
                  <span>
                    <figure>
                      <img src="/img/home/imgPlayingCard_h04.png" alt="" />
                    </figure>
                    <figure>
                      <img src="/img/home/imgPlayingCard_back.png" alt="" />
                    </figure>{" "}
                  </span>
                  {/* /.homeAboutBox__playingCard */}
                </div>
                <figure>
                  <img src="/img/home/imgPlayingCard02.png" alt="" />
                </figure>
                <figure>
                  <img src="/img/home/imgPlayingCard03.png" alt="" />
                </figure>
                <div className="homeAboutBox__playingCard">
                  <span>
                    <figure>
                      <img src="/img/home/imgPlayingCard_d07.png" alt="" />
                    </figure>
                    <figure>
                      <img src="/img/home/imgPlayingCard_back.png" alt="" />
                    </figure>{" "}
                  </span>
                  {/* /.homeAboutBox__playingCard */}
                </div>
                <figure>
                  <img src="/img/home/imgPlayingCard05.png" alt="" />
                </figure>
                <figure>
                  <img src="/img/home/imgPlayingCard06.png" alt="" />
                </figure>
                <figure>
                  <img src="/img/home/imgPlayingCard07.png" alt="" />
                </figure>
                <div className="homeAboutBox__playingCard">
                  <span>
                    <figure>
                      <img src="/img/home/imgPlayingCard_d04.png" alt="" />
                    </figure>
                    <figure>
                      <img src="/img/home/imgPlayingCard_back.png" alt="" />
                    </figure>{" "}
                  </span>
                  {/* /.homeAboutBox__playingCard */}
                </div>
                <figure>
                  <img src="/img/home/imgPlayingCard09.png" alt="" />
                </figure>
                <figure>
                  <img src="/img/home/imgPlayingCard10.png" alt="" />
                </figure>
                <figure>
                  <img src="/img/home/imgPlayingCard11.png" alt="" />
                </figure>
                <div className="homeAboutBox__playingCard">
                  <span>
                    <figure>
                      <img src="/img/home/imgPlayingCard_hq.png" alt="" />
                    </figure>
                    <figure>
                      <img src="/img/home/imgPlayingCard_back.png" alt="" />
                    </figure>{" "}
                  </span>
                  {/* /.homeAboutBox__playingCard */}
                </div>
                {/* /.homeAboutBox__image */}
              </div>
              <div className="homeAboutBox__content">
                <div className="homeAboutBox__title">
                  <h2>What is this</h2>
                  {/* /.homeAboutBox__title */}
                </div>
                <p>
                  御覧いただきありがとうございます。
                  <br />
                  当サイトは
                  <span className="name__ara">
                    <span>十</span>
                    <span>十</span>
                    <span>亡</span>
                    <span>川</span>
                  </span>
                  <span className="name__kawa">
                    <span>一</span>
                    <span>一</span>
                    <span>一</span>
                  </span>
                  が制作についての備忘録、
                  <br />
                  アウトプット、部品の保管庫として
                  <br />
                  利用しています。
                </p>
                <p>
                  Thank you for visiting.
                  <br />
                  This site serves as a memo pad, an output platform, <br />
                  and a storage repository for parts related to Arariver&apos;s
                  creations.
                </p>
                {/* /.homeAboutBox__content */}
              </div>
              <div className="homeAboutBox__portrait parallax--type05">
                <figure>
                  <img src="/img/home/imgPortrait.png" alt="" />
                </figure>
                <figure>
                  <img src="/img/home/imgEye.gif" alt="" />
                </figure>
                {/* /.homeAboutBox__portrait */}
              </div>
              {/* /.inBase */}
            </div>
            {/* /.homeAboutBox */}
          </div>

          {/* /#contents */}
        </div>
        <Footer />
        <ButtonRise />
        {/* /#wrapper */}
      </div>
    </body>
  );
}
