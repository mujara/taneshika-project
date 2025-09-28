import PageTitle from "@/app/_components/PageTitle";
import Topicpath from "@/app/_components/Topicpath";
import { getCategoryDetail, getArchiveList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import ArchiveList from "@/app/_components/ArchiveList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { ARCHIVE_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: archive, totalCount } = await getArchiveList({
    limit: ARCHIVE_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <section className="contents__main">
        <PageTitle image="/img/common/iconCircle.svg" pageCategoty="Archive">
          <Category category={category} />
          の一覧
        </PageTitle>
        <Topicpath pageCategoty="Archive" pageCategotyLink="/archive">
          <Category category={category} />
          の一覧
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
    </>
  );
}
