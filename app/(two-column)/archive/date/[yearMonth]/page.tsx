import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getArchiveList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    yearMonth: string; // e.g. "2025-09"
  };
  searchParams?: {
    page?: string;
  };
};

export default async function Page(props: Props) {
  const { params, searchParams } = await props;
  const { yearMonth } = params;
  const currentPage = Number(searchParams?.page ?? "1");

  // --- YYYY-MM を分解 ---
  const [year, month] = yearMonth.split("-");

  // --- microCMS で月別の記事を取得する ---
  const startDate = `${year}-${month}-01T00:00:00Z`;
  const endDate = new Date(Number(year), Number(month), 0); // 月末日
  const endDateStr = `${endDate.getFullYear()}-${String(
    endDate.getMonth() + 1
  ).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}T23:59:59Z`;

  const { contents: archive, totalCount } = await getArchiveList({
    limit: ARCHIVE_LIST_LIMIT,
    offset: (currentPage - 1) * ARCHIVE_LIST_LIMIT,
    filters: `publishedAt[greater_than]${startDate}[and]publishedAt[less_than]${endDateStr}`,
  });

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
