import { notFound } from "next/navigation";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getCategoryDetail, getArchiveList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

interface Props {
  params: {
    id: string;
    current: string;
  };
}

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: archive, totalCount } = await getArchiveList({
    filters: `category[equals]${category.id}`,
    limit: ARCHIVE_LIST_LIMIT,
    offset: ARCHIVE_LIST_LIMIT * (current - 1),
  });
  if (archive.length === 0) {
    notFound();
  }
  return (
    <section className="contents__main">
      <PageTitle image="/img/common/iconCircle.svg" pageCategoty="Archive">
        記事一覧
      </PageTitle>
      <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">
        記事一覧
      </Topicpath>
      <div className="contents__mainInner">
        <div className="contents__inBase">
          <div className="contents__inBase__inner">
            <div className="archiveListBox">
              <ArchiveList articles={archive} />
              {/* /.archiveTitleBox */}
            </div>
            <Pagination
              totalCount={totalCount}
              current={current}
              basePath={`/archive/category/${category.id}`}
            />
            {/* /.contents__inBase__inner */}
          </div>
          {/* /.contents__inBase */}
        </div>
        {/* /.contents__mainInner */}
      </div>
      {/* /.contents__main */}
    </section>
  );
}
