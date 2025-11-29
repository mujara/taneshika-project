"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";

export default function ButtonRise() {
  const [isActive, setStatus] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight / 5 < window.scrollY) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="btnRise" className={cx("btn-rise", isActive && "is-active")}>
      <a href="#wrapper">
        <figure>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/img/common/imgSpoon.png"
            />
            <img
              src="/img/common/imgSpoon_sp.png"
              alt="ページ上部に戻るスプーン"
            />
          </picture>
        </figure>
      </a>
    </div>
  );
}
