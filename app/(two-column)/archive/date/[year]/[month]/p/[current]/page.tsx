import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getArchiveList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    year: string;
    month: string;
    current: string;
  }>;
};

// 指定年月の開始・終了日を計算
function getMonthRange(year: string, month: string) {
  const start = new Date(Number(year), Number(month) - 1, 1);
  const end = new Date(Number(year), Number(month), 0);
  return {
    start: start.toISOString(),
    end: new Date(end.setHours(23, 59, 59, 999)).toISOString(),
  };
}

export default async function Page({ params }: Props) {
  const { year, month, current } = await params;
  const currentPage = parseInt(current, 10);

  if (isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const { start, end } = getMonthRange(year, month);

  const { contents: archive, totalCount } = await getArchiveList({
    limit: ARCHIVE_LIST_LIMIT,
    offset: (currentPage - 1) * ARCHIVE_LIST_LIMIT,
    filters: `publishedAt[greater_than]${start}[and]publishedAt[less_than]${end}`,
  }).catch(() => ({ contents: [], totalCount: 0 }));

  return (
    <section className="contents__main">
      <PageTitle image="/img/common/iconCircle.svg" pageCategoty="Archive">
        {year}年{month}月の一覧（{currentPage}ページ目）
      </PageTitle>
      <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">
        {year}年{month}月の一覧
      </Topicpath>
      <div className="contents__mainInner">
        <div className="contents__inBase">
          <div className="contents__inBase__inner">
            <div className="archiveListBox">
              {archive.length > 0 ? (
                <ArchiveList articles={archive} />
              ) : (
                <p className="text-center py-8 text-gray-500">
                  記事がありません
                </p>
              )}
            </div>
            {totalCount > ARCHIVE_LIST_LIMIT && (
              <Pagination
                totalCount={totalCount}
                basePath={`/archive/date/${year}/${month}`}
                current={currentPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
