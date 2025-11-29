import Image from "next/image";
import cx from "classnames";
export default function HomeAboutBox() {
  return (
    <div className="homeAboutBox">
      <div className="inBase clearfix">
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout01.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout02.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout03.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout04.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout05.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout06.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__bg">
          <figure>
            <Image
              src="/img/home/bgAbout07.png"
              alt=""
              fill
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__bg */}
        </div>
        <div className="homeAboutBox__image">
          <figure className="parallax--type06">
            <span>
              <Image
                src="/img/home/imgRope01.png"
                alt=""
                fill
                unoptimized={process.env.NODE_ENV === "development"}
              />
            </span>
          </figure>
          <figure className="parallax--type07">
            <span>
              <Image
                src="/img/home/imgRope02.png"
                alt=""
                fill
                unoptimized={process.env.NODE_ENV === "development"}
              />
            </span>
          </figure>
          <div className="homeAboutBox__playingCard">
            <span>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_h04.png"
                  alt="ハートの4"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_back.png"
                  alt="トランプの裏側"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>
            </span>
            {/* /.homeAboutBox__playingCard */}
          </div>
          <figure>
            <Image
              src="/img/home/imgPlayingCard02.png"
              alt="ハートのエース"
              width={197}
              height={384}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgPlayingCard03.png"
              alt="クローバーの10"
              width={234}
              height={302}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <div className="homeAboutBox__playingCard">
            <span>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_d07.png"
                  alt="ダイヤの7"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_back.png"
                  alt="トランプの裏側"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>
            </span>
            {/* /.homeAboutBox__playingCard */}
          </div>
          <figure>
            <Image
              src="/img/home/imgPlayingCard05.png"
              alt="トランプの裏側"
              width={262}
              height={395}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgPlayingCard06.png"
              alt="クローバーのキング"
              width={340}
              height={392}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgPlayingCard07.png"
              alt="クローバーのクイーン"
              width={209}
              height={268}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <div className="homeAboutBox__playingCard">
            <span>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_d04.png"
                  alt="ダイヤの4"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_back.png"
                  alt="トランプの裏側"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>{" "}
            </span>
            {/* /.homeAboutBox__playingCard */}
          </div>
          <figure>
            <Image
              src="/img/home/imgPlayingCard09.png"
              alt="クローバーの3"
              width={217}
              height={258}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgPlayingCard10.png"
              alt="クローバーの9"
              width={198}
              height={243}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgPlayingCard11.png"
              alt="ジョーカー"
              width={171}
              height={318}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <div className="homeAboutBox__playingCard">
            <span>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_hq.png"
                  alt="ダイヤの4"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>
              <figure>
                <Image
                  src="/img/home/imgPlayingCard_back.png"
                  alt="トランプの裏側"
                  width={52}
                  height={70.4}
                  unoptimized={process.env.NODE_ENV === "development"}
                />
              </figure>{" "}
            </span>
            {/* /.homeAboutBox__playingCard */}
          </div>
          {/* /.homeAboutBox__image */}
        </div>
        <div className={cx("homeAboutBox__portrait", "parallax--type05")}>
          <figure>
            <Image
              src="/img/home/imgPortrait.png"
              alt="What is thisの人"
              width={685}
              height={809}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          <figure>
            <Image
              src="/img/home/imgEye.gif"
              alt="What is thisの人の目"
              width={138}
              height={73}
              unoptimized={process.env.NODE_ENV === "development"}
            />
          </figure>
          {/* /.homeAboutBox__portrait */}
        </div>
        {/* /.inBase */}
      </div>
      {/* /.homeAboutBox */}
    </div>
  );
}
