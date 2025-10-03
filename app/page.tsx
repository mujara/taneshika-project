import Image from "next/image";
{
  /* import styles from "./page.module.css";*/
}

import HomeHeader from "@/app/_components/HomeHeader";
import HomeArchiveBox from "@/app/_components/HomeArchiveBox";
import HomeAboutBox from "@/app/_components/HomeAboutBox";
import { getHomeArchiveList } from "@/app/_libs/microcms";
import { HOME_ARCHIVE_LIMIT } from "@/app/_constants";
import Footer from "./_components/Footer";
import ButtonRise from "@/app/_components/ButtonRise";

export const revalidate = 60;

export default async function Home() {
  const data = await getHomeArchiveList({ limit: HOME_ARCHIVE_LIMIT });
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
          <HomeArchiveBox data={data} />
          <HomeAboutBox />
        </div>{/* /#contents */}
        <Footer />
        <ButtonRise />
      </div>{/* /#wrapper */}
    </body>
  );
}
