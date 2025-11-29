"use client";
import React, { useState, useEffect } from "react";
import cx from "classnames";
import HomeArchiveList from "@/app/_components/HomeArchiveList";
import ButtonLink from "@/app/_components/ButtonLink";
import type { ArchiveListResponse } from "@/app/_libs/microcms";

type Props = {
  data: ArchiveListResponse;
};

export default function HomeArchiveBox({ data }: Props) {
  const [isActive, setStatus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight / 5 < window.scrollY) {
        setStatus(true);
        window.removeEventListener("scroll", handleScroll); // 一度で解除
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cx("homeArchiveBox", isActive && "is-active")}
      id="sectionHomeArchive"
    >
      <div className="homeArchiveBox__title">
        <h2>Archive</h2>
      </div>
      <div className="breadthScrollBox">
        <div className="inBase clearfix">
          <HomeArchiveList archive={data.contents} />
        </div>
      </div>
      <div className="inBase clearfix">
        <div className="button--type01">
          <ButtonLink href="/archive">More</ButtonLink>
        </div>
      </div>
    </div>
  );
}
