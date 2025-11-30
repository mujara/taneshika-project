import Image from "next/image";
import SearchField from "@/app/_components/SearchField";
import { getArchiveSideList } from "@/app/_libs/microcms";
import { getCategoryList } from "@/app/_libs/microcms";
import { getTagList } from "@/app/_libs/microcms";
import ArchiveDateList from "@/app/_components/ArchiveDateList";
import SideArchiveList from "@/app/_components/SideArchiveList";
import SideCategoryList from "@/app/_components/SideCategoryList";
import SideTagList from "@/app/_components/SideTagList";
import { ARCHIVE_SIDE_LIST_LIMIT } from "@/app/_constants";

export default async function ContentsSub() {
  const { contents: archive } = await getArchiveSideList({
    limit: ARCHIVE_SIDE_LIST_LIMIT,
  });
  const { contents: category } = await getCategoryList();
  const { contents: tag } = await getTagList();
  return (
    <section className="contents__sub">
      <div className="contents__subInner">
        <SearchField />

        <ArchiveDateList articles={archive} />

        <div className="sideTitle">
          <figure>
            <Image src="/img/common/icon01.svg" alt="最新の記事" fill />
          </figure>
          <span>
            The In<strong>t</strong>erval Betw<strong>e</strong>en <br />
            the Suf<strong>f</strong>
            <strong>e</strong>ring and Joy of Contin<strong>u</strong>ing
          </span>
          {/* /.sideTitle */}
        </div>

        <SideArchiveList articles={archive} />

        <div className="sideTitle">
          <figure>
            <Image src="/img/common/icon02.svg" alt="カテゴリー" fill />
          </figure>
          <span>
            Clas<strong>s</strong>ification pizza mo<strong>c</strong>k
            <strong>s</strong> <br />
            for fla<strong>p</strong>ping
          </span>
          {/* /.sideTitle */}
        </div>

        <SideCategoryList categories={category} />

        <div className="sideTitle">
          <figure>
            <Image src="/img/common/icon03.svg" alt="タグ" fill />
          </figure>
          <span>
            What fla<strong>v</strong>o<strong>r</strong> was the roas
            <strong>t</strong>ed <br />s<strong>w</strong>eet po
            <strong>t</strong>
            <strong>a</strong>to <strong>y</strong>ou ate yest<strong>e</strong>
            r<strong>d</strong>ay?
          </span>
          {/* /.sideTitle */}
        </div>

        <SideTagList tags={tag} />

        {/* /.contents__subInner */}
      </div>
      {/* /.contents__sub */}
    </section>
  );
}
