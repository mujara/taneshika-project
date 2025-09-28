import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSQueries,
  MicroCMSListContent,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Tag = {
  name: string;
} & MicroCMSListContent;

export type Archive = {
  id: string;
  title: string;
  publishedAt: string;
  category: Category;
  tag?: Tag[];
  content: string;
  description: string;
  mokuji: string;
} & MicroCMSListContent;

export interface ArchiveListResponse {
  contents: Archive[];
  totalCount: number;
}
export type Article = Archive & MicroCMSContentId & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// トップページで記事一覧を取得
export const getHomeArchiveList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Archive>({
    endpoint: "archive",
    queries,
  });
  return listData;
};

// アーカイブページで記事一覧を取得
export const getArchiveList = async (
  queries?: MicroCMSQueries
): Promise<ArchiveListResponse> => {
  const listData = await client.getList<Archive>({
    endpoint: "archive",
    queries,
  });
  return listData;
};

// アーカイブページで記事一覧を全件取得
export const getArchiveAllList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Archive>({
    endpoint: "archive",
    queries: {
      limit: 9999, // ここで全件取得（必要に応じて増やす）
      ...queries,
    },
  });
  return listData;
};

// サイドで記事一覧を取得
export const getArchiveSideList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Archive>({
    endpoint: "archive",
    queries,
  });
  return listData;
};

// 記事の詳細を取得
export const getArchiveDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Archive>({
    endpoint: "archive",
    contentId,
    queries,
  });
  return detailData;
};

// カテゴリーの一覧を取得
export const getCategoryList = async () => {
  const listData = await client.getList<Category>({
    endpoint: "category",
  });

  return listData;
};

// タグの一覧を取得
// export const getTagPageList = async () => {
//  const listData = await client.getAllContents<Tag>({
//    endpoint: "tag",
//   });

//   return listData;
// };

// タグの一覧を取得
export const getTagList = async () => {
  const listData = await client.getList<Tag>({
    endpoint: "tag",
  });

  return listData;
};

// アーカイブ　カテゴリーの内容を取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "category",
    contentId,
    queries,
  });

  return detailData;
};

// アーカイブ　タグの内容を取得
export const getTagDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Tag>({
    endpoint: "tag",
    contentId,
    queries,
  });

  return detailData;
};
