import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};

// 日付文字列を "YYYY-MM" 形式に変換
function formatGroupDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

// Content型（publishedAt必須、その他は任意）
type Content = {
  publishedAt: string;
  [key: string]: unknown; // any の代わりに unknown を使う
};

// groupBy関数
export const groupBy = (contents: Content[]): Record<string, Content[]> => {
  return contents.reduce<Record<string, Content[]>>((group, item) => {
    const yearMonth = formatGroupDate(new Date(item.publishedAt));
    if (!group[yearMonth]) {
      group[yearMonth] = [];
    }
    group[yearMonth].push(item);
    return group;
  }, {});
};
