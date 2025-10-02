import "./globals.css";
import "./font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | たねも仕掛けも",
    default: "たねも仕掛けも",
  },
  description:
    "たねも仕掛けもというブログは、Web制作・運用の備忘録として利用しています。",
  openGraph: {
    title: {
      template: "%s | たねも仕掛けも",
      default: "たねも仕掛けも",
    },
    description:
      "たねも仕掛けもというブログは、Web制作・運用の備忘録として利用しています。",
    images: "/ogp.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="ja">{children}</html>;
}
