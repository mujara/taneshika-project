import Image from "next/image";
{
  /* import styles from "./page.module.css";*/
}

import HomeHeader from "@/app/_components/HomeHeader";
import HomeAboutBox from "@/app/_components/HomeAboutBox";
import Footer from "./_components/Footer";
import ButtonRise from "@/app/_components/ButtonRise";

export const revalidate = 60;

export default async function Home() {
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

        <HomeHeader />

        <div id="contents" className="clearfix">
          <HomeAboutBox />
        </div>
        {/* /#contents */}
        <Footer />
        <ButtonRise />
      </div>
      {/* /#wrapper */}
    </body>
  );
}
