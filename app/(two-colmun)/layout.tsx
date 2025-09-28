import Header from "@/app/_components/Header";
import ContentsSub from "@/app/_components/ContentsSub";
import Footer from "@/app/_components/Footer";
import ButtonRise from "@/app/_components/ButtonRise";

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <body>
      <div id="wrapper">
        <Header />
        <div id="contents" className="clearfix">
          {children}
          <ContentsSub />
          {/*<!-- /#contents -->*/}
        </div>
        <Footer />
        <ButtonRise />
        {/* /#wrapper */}
      </div>
    </body>
  );
}
