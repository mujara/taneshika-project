import Link from "next/link";
import { Tag } from "@/app/_libs/microcms";

type Props = {
  tags?: Tag[];
};
export default function SideTagList({ tags }: Props) {
  if (!tags) {
    return null;
  }
  if (tags.length === 0) {
    return <p>タグがありません。</p>;
  }
  return (
    <>
      <ul className="sideTagList">
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link href={`/archive/tag/${tag.id}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
