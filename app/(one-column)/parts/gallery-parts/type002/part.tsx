"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function PartType02() {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const radios = gallery.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );

    const length = radios.length;
    if (!length) return;

    let intervalId: NodeJS.Timeout | null = null;

    function nextSlide() {
      const currentIndex = Array.from(radios).findIndex(
        (radio) => radio.checked
      );
      const nextIndex = (currentIndex + 1) % length;
      radios[nextIndex].checked = true;
    }

    function start() {
      if (!intervalId) {
        intervalId = setInterval(nextSlide, 5000);
      }
    }

    function stop() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    start();

    gallery.addEventListener("mouseenter", stop);
    gallery.addEventListener("mouseleave", start);

    return () => {
      if (intervalId) clearInterval(intervalId);
      gallery.removeEventListener("mouseenter", stop);
      gallery.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <div className="sM-l w60-pc sC">
      <div
        ref={galleryRef}
        className={`${styles["imageGalleryBox--type02"]} --autoImageGallery`}
      >
        <input type="radio" id="imageGallery--type02__label001" name="imageGallery--type02__input" defaultChecked />
        <figure>
          <Link href="/parts/gallery-parts/type002">
            <img src="/img/demo/sample4x3L.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type02__label002" name="imageGallery--type02__input" />
        <figure>
          <Link href="/parts/gallery-parts/type002">
            <img src="/img/demo/sample3x2.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type02__label003" name="imageGallery--type02__input" />
        <figure>
          <Link href="/parts/gallery-parts/type002">
            <img src="/img/demo/sample3x2L.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type02__label004" name="imageGallery--type02__input" />
        <figure>
          <Link href="/parts/gallery-parts/type002">
            <img src="/img/demo/sample2x3.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type02__label005" name="imageGallery--type02__input" />
        <figure>
          <Link href="/parts/gallery-parts/type002">
            <img src="/img/demo/sample4x3L.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type02__label006" name="imageGallery--type02__input" />
        <figure>
          <Link href="/parts/gallery-parts/type002">
            <img src="/img/demo/sample3x2.jpg" alt="" />
          </Link>
        </figure>

        <div className={styles["imageGallery"]}>
          <label htmlFor="imageGallery--type02__label001"><img src="/img/demo/sample1x1L.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type02__label002"><img src="/img/demo/sample1x1.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type02__label003"><img src="/img/demo/sample1x1L.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type02__label004"><img src="/img/demo/sample1x1.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type02__label005"><img src="/img/demo/sample1x1L.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type02__label006"><img src="/img/demo/sample1x1.jpg" alt="" /></label>
        </div>
      </div>
    </div>
  );
}