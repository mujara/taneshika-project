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
            <img src="/img/common/icon01.svg" alt="" />
          </figure>
          <span>
            The Interval Between <br />
            the Suffering and Joy of Continuing
          </span>
          {/* /.sideTitle */}
        </div>

        <SideArchiveList articles={archive} />

        <div className="sideTitle">
          <figure>
            <img src="/img/common/icon02.svg" alt="" />
          </figure>
          <span>
            Classification pizza mocks <br />
            for flapping
          </span>
          {/* /.sideTitle */}
        </div>

        <SideCategoryList categories={category} />

        <div className="sideTitle">
          <figure>
            <img src="/img/common/icon03.svg" alt="" />
          </figure>
          <span>
            Tagging is between <br />
            youth and later life.
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
