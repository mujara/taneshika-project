import { MetadataRoute } from 'next';
import { getCategoryList, getTagList, getArchiveAllList } from './_libs/microcms';

const buildUrl = (path?: string) => `https://taneshika.net${path ?? ''}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const archivesContents = await getArchiveAllList();
  const categoryContents = await getCategoryList();
  const tagContents = await getTagList();

  const archiveUrls: MetadataRoute.Sitemap = archivesContents.contents.map(
  (content) => ({
    url: buildUrl(`/archive/${content.id}`),
    lastModified: content.revisedAt,
  })
);

const categoryUrls: MetadataRoute.Sitemap = categoryContents.contents.map(
  (content) => ({
    url: buildUrl(`/archive/category/${content.id}`),
    lastModified: content.revisedAt,
  })
);

const tagUrls: MetadataRoute.Sitemap = tagContents.contents.map(
  (content) => ({
    url: buildUrl(`/archive/tag/${content.id}`),
    lastModified: content.revisedAt,
  })
);

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl('/parts'),
      lastModified: now,
    },
    {
      url: buildUrl('/layout'),
      lastModified: now,
    },
    {
      url: buildUrl('/image'),
      lastModified: now,
    },
    {
      url: buildUrl('/unclassifiable'),
      lastModified: now,
    },
    ...archiveUrls,
    ...categoryUrls,
    ...tagUrls,
  ];
}
