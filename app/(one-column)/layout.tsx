import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import ButtonRise from "@/app/_components/ButtonRise";

type Props = {
  children: React.ReactNode;
};
export const revalidate = 60;

export default function RootLayout({ children }: Props) {
  return (
    <div id="wrapper">
      <Header />
      <div id="contents" className="clearfix">
        {children}
        {/*<!-- /#contents -->*/}
      </div>
      <Footer />
      <ButtonRise />
      {/* /#wrapper */}
    </div>
  );
}
