import { ParsedUrlQuery } from "querystring";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getArchiveList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

// URL パラメータの型
interface PageParams extends ParsedUrlQuery {
  yearMonth: string;
}

// searchParams の型
interface PageSearchParams {
  page?: string;
}

// ページ関数の Props 型
interface Props {
  params: PageParams;
  searchParams?: PageSearchParams;
}

export default async function Page({ params, searchParams }: Props) {
  const { yearMonth } = params;
  const currentPage = Number(searchParams?.page ?? "1");

  // YYYY-MM を分解
  const [year, month] = yearMonth.split("-");

  // 月初と月末の ISO 文字列を作成
  const startDate = `${year}-${month}-01T00:00:00Z`;
  const endDate = new Date(Number(year), Number(month), 0); // 月末日
  const endDateStr = `${endDate.getFullYear()}-${String(
    endDate.getMonth() + 1
  ).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}T23:59:59Z`;

  // microCMS から記事取得
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
