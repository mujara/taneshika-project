import Image from "next/image";
type Props = {
  image: string;
  pageCategoty: string;
  children: React.ReactNode;
};

export default function PageTitle({ image, pageCategoty, children }: Props) {
  return (
    <div className="pageTitle">
      <figure>
        <Image src={image} alt={pageCategoty} fill />
      </figure>
      <div className="pageTitle__inner">
        <p>{pageCategoty}</p>
        <h1>{children}</h1>
        {/* /.pageTitle__inner */}
      </div>
      {/* /.pageTitle */}
    </div>
  );
}
