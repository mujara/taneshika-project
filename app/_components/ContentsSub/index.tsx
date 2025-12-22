import Image from "next/image";
import SearchField from "@/app/_components/SearchField";
import { getArchiveSideList } from "@/app/_libs/microcms";
import { getCategoryList } from "@/app/_libs/microcms";
import { getTagList } from "@/app/_libs/microcms";
import ArchiveDateList from "@/app/_components/ArchiveDateList";
import { getAllArchiveItems } from "@/app/_libs/microcms";
import SideArchiveList from "@/app/_components/SideArchiveList";
import SideCategoryList from "@/app/_components/SideCategoryList";
import SideTagList from "@/app/_components/SideTagList";
import { ARCHIVE_SIDE_LIST_LIMIT } from "@/app/_constants";

export default async function ContentsSub() {
  const allItems = await getAllArchiveItems();
  const { contents: archive } = await getArchiveSideList({
    limit: ARCHIVE_SIDE_LIST_LIMIT,
  });
  const { contents: category } = await getCategoryList();
  const { contents: tag } = await getTagList();
  return (
    <section className="contents__sub">
      <div className="contents__subInner">
        <SearchField />

        <ArchiveDateList articles={allItems} />

        <div className="sideTitle">
          <figure>
            <Image src="/img/common/icon01.svg" alt="最新の記事" fill />
          </figure>
          <span>
            The <strong>I</strong>
            <strong>n</strong>
            <strong>t</strong>
            <strong>e</strong>
            <strong>r</strong>
            <strong>v</strong>al Betw<strong>e</strong>en <br />
            the S<strong>u</strong>
            <strong>f</strong>
            <strong>f</strong>
            <strong>e</strong>
            <strong>r</strong>
            <strong>i</strong>ng and Joy of <strong>C</strong>
            <strong>o</strong>
            <strong>n</strong>
            <strong>t</strong>
            <strong>i</strong>n<strong>u</strong>ing
          </span>
          {/* /.sideTitle */}
        </div>

        <SideArchiveList articles={archive} />

        <div className="sideTitle">
          <figure>
            <Image src="/img/common/icon02.svg" alt="カテゴリー" fill />
          </figure>
          <span>
            <strong>C</strong>
            <strong>l</strong>
            <strong>a</strong>s<strong>s</strong>ification pizza{" "}
            <strong>m</strong>
            <strong>o</strong>
            <strong>c</strong>k<strong>s</strong> <br />
            for <strong>f</strong>
            <strong>l</strong>
            <strong>a</strong>
            <strong>p</strong>
            <strong>p</strong>ing
          </span>
          {/* /.sideTitle */}
        </div>

        <SideCategoryList categories={category} />

        <div className="sideTitle">
          <figure>
            <Image src="/img/common/icon03.svg" alt="タグ" fill />
          </figure>
          <span>
            What fla<strong>v</strong>
            <strong>o</strong>
            <strong>r</strong> <strong>w</strong>
            <strong>a</strong>
            <strong>s</strong> the <strong>r</strong>
            <strong>o</strong>
            <strong>a</strong>s<strong>t</strong>ed <br />s<strong>w</strong>eet
            po
            <strong>t</strong>
            <strong>a</strong>to <strong>y</strong>ou ate y<strong>e</strong>
            <strong>s</strong>
            <strong>t</strong>
            <strong>e</strong>r<strong>d</strong>ay?
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
