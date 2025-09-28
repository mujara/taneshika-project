import { notFound } from "next/navigation";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getArchiveList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const current = parseInt(params.current, 10);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const { contents: archive, totalCount } = await getArchiveList({
    limit: ARCHIVE_LIST_LIMIT,
    offset: ARCHIVE_LIST_LIMIT * (current - 1),
    q: searchParams.q,
  });
  if (archive.length === 0) {
    notFound();
  }
  return (
    <section className="contents__main">
      <PageTitle
        image="/img/common/iconCircle.svg"
        pageCategoty="Archive"
      >「{ searchParams.q }」の検索結果</PageTitle>
      <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">「{ searchParams.q }」の検索結果</Topicpath>
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
              basePath={`/archive/search`}
              q={searchParams.q} 
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
