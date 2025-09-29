import { notFound } from "next/navigation";
import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getArchiveList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    yearMonth: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const { yearMonth, current: currentStr } = params;
  const current = parseInt(currentStr, 10);

  if (Number.isNaN(current) || current < 1) notFound();

  if (!/^\d{4}-\d{2}$/.test(yearMonth)) notFound();

  const startDate = `${yearMonth}-01`;
  const endDate = `${yearMonth}-31`;

  const { contents: archive, totalCount } = await getArchiveList({
    filters: `publishedAt[greater_than_or_equal_to]${startDate},publishedAt[less_than_or_equal_to]${endDate}`,
    limit: ARCHIVE_LIST_LIMIT,
    offset: ARCHIVE_LIST_LIMIT * (current - 1),
  });

  if (archive.length === 0) notFound();

  return (
    <section className="contents__main">
      <PageTitle image="/img/common/iconCircle.svg" pageCategoty="Archive">
        {yearMonth}の記事一覧
      </PageTitle>
      <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">
        {yearMonth}の記事一覧
      </Topicpath>
      <div className="contents__mainInner">
        <div className="contents__inBase">
          <div className="contents__inBase__inner">
            <div className="archiveListBox">
              <ArchiveList articles={archive} />
            </div>
            <Pagination
              totalCount={totalCount}
              current={current}
              basePath={`/archive/date/${yearMonth}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
