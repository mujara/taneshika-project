"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function PartType01() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const radios = gallery.querySelectorAll('input[type="radio"]');
    const length = radios.length;
    if (!length) return;

    let intervalId = null;

    function nextSlide() {
      const currentIndex = [...radios].findIndex(radio => radio.checked);
      const nextIndex = (currentIndex + 1) % length;
      radios[nextIndex].checked = true;
    }

    function start() {
      if (!intervalId) {
        intervalId = setInterval(nextSlide, 5000);
      }
    }

    function stop() {
      clearInterval(intervalId);
      intervalId = null;
    }

    start();

    gallery.addEventListener("mouseenter", stop);
    gallery.addEventListener("mouseleave", start);

    // cleanup
    return () => {
      clearInterval(intervalId);
      gallery.removeEventListener("mouseenter", stop);
      gallery.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <div className="sM-l w60-pc sC">
      <div
        ref={galleryRef}
        className={`${styles["imageGalleryBox--type01"]} --autoImageGallery`}
      >
        <input type="radio" id="imageGallery--type01__label001" name="imageGallery--type01__input" defaultChecked />
        <figure>
          <Link href="/parts/gallery-parts/type001">
            <img src="/img/demo/sample4x3L.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type01__label002" name="imageGallery--type01__input" />
        <figure>
          <Link href="/parts/gallery-parts/type001">
            <img src="/img/demo/sample3x2.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type01__label003" name="imageGallery--type01__input" />
        <figure>
          <Link href="/parts/gallery-parts/type001">
            <img src="/img/demo/sample3x2L.jpg" alt="" />
          </Link>
        </figure>

        <input type="radio" id="imageGallery--type01__label004" name="imageGallery--type01__input" />
        <figure>
          <Link href="/parts/gallery-parts/type001">
            <img src="/img/demo/sample2x3.jpg" alt="" />
          </Link>
        </figure>

        <div className={styles["imageGallery"]}>
          <label htmlFor="imageGallery--type01__label001"><img src="/img/demo/sample1x1L.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type01__label002"><img src="/img/demo/sample1x1.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type01__label003"><img src="/img/demo/sample1x1L.jpg" alt="" /></label>
          <label htmlFor="imageGallery--type01__label004"><img src="/img/demo/sample1x1.jpg" alt="" /></label>
        </div>
      </div>
    </div>
  );
}