import { notFound } from "next/navigation";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getArchiveList, Archive } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

interface PageParams {
  yearMonth: string;
  current: string;
}

interface Props {
  params: PageParams;
}

export default async function Page({ params }: Props) {
  const { yearMonth, current } = params;
  const currentPage = parseInt(current, 10);

  if (!yearMonth || Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const [year, month] = yearMonth.split("-");
  if (!year || !month) {
    notFound();
  }

  const startDate = `${year}-${month}-01T00:00:00Z`;
  const endDate = new Date(Number(year), Number(month), 0);
  const endDateStr = `${endDate.getFullYear()}-${String(
    endDate.getMonth() + 1
  ).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}T23:59:59Z`;

  // 型注釈を追加
  const {
    contents: archive,
    totalCount,
  }: { contents: Archive[]; totalCount: number } = await getArchiveList({
    limit: ARCHIVE_LIST_LIMIT,
    offset: (currentPage - 1) * ARCHIVE_LIST_LIMIT,
    filters: `publishedAt[greater_than]${startDate}[and]publishedAt[less_than]${endDateStr}`,
  });

  if (archive.length === 0) {
    notFound();
  }

  return (
    <section className="contents__main">
      <PageTitle image="/img/common/iconCircle.svg" pageCategoty="Archive">
        {year}年{month}月の記事一覧
      </PageTitle>

      <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">
        {year}年{month}月
      </Topicpath>

      <div className="contents__mainInner">
        <div className="contents__inBase">
          <div className="contents__inBase__inner">
            <div className="archiveListBox">
              <ArchiveList articles={archive} />
            </div>
            <Pagination
              totalCount={totalCount}
              current={currentPage}
              basePath={`/archive/date/${yearMonth}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
