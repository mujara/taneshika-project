import type { Tag } from "@/app/_libs/microcms";

type Props = {
  tag: Tag;
};
export default function Tag({ tag }: Props) {
  return <span>{tag.name}</span>;
}
