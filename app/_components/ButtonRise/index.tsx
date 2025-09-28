"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import cx from "classnames";
export default function ButtonRise() {
  const [isActive, setStatus] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", function (): void {
      if (window.outerHeight / 5 < window.scrollY) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    });
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
