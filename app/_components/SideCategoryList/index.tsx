import Link from "next/link";
import { Category } from "@/app/_libs/microcms";

type Props = {
  categories?: Category[];
};
export default function SideCategoryList({ categories }: Props) {
  if (!categories) {
    return null;
  }
  if (categories.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <ul className="sideCategoryList">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/archive/category/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
