import {
  Noto_Serif_JP,
  Alike_Angular,
  Beth_Ellen,
  Macondo,
} from "next/font/google";

export const notoSerifJP = Noto_Serif_JP({
  weight: ["200", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const alikeAngular = Alike_Angular({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alike-angular",
});

export const bethEllen = Beth_Ellen({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-beth-ellen",
});

export const macondo = Macondo({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-macondo",
});
