type Props = {
  image: string;
  pageCategoty: string;
  children: React.ReactNode;
};

export default function PageTitle({ image, pageCategoty, children }: Props) {
  return (
    <div className="pageTitle">
      <figure>
        <img src={image} alt={pageCategoty} />
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
