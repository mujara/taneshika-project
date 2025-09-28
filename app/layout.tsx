import "./globals.css";
import "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="ja">{children}</html>;
}
