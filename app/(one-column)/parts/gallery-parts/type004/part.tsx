"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PartType04() {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const radios = gallery.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]',
    );

    const length = radios.length;
    if (!length) return;

    let intervalId: NodeJS.Timeout | null = null;

    function nextSlide() {
      const currentIndex = Array.from(radios).findIndex(
        (radio) => radio.checked,
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
        className={`${styles["imageGalleryBox--type04"]} --autoImageGallery`}
      >
        <input
          type="radio"
          id="imageGallery--type04__label001"
          name="imageGallery--type04__input"
          defaultChecked
        />
        <div className={styles["mainImage"]}>
          <Link href="/parts/gallery-parts/type004">
            <Image
              src="/img/demo/sample1x1L.jpg"
              alt=""
              width={380}
              height={380}
              unoptimized
            />
          </Link>
          <ul>
            <li>
              <label htmlFor="imageGallery--type04__label005"></label>
            </li>
            <li>
              <label htmlFor="imageGallery--type04__label002"></label>
            </li>
          </ul>
        </div>
        <input
          type="radio"
          id="imageGallery--type04__label002"
          name="imageGallery--type04__input"
        />
        <div className={styles["mainImage"]}>
          <Link href="/parts/gallery-parts/type004">
            <Image
              src="/img/demo/sample3x2L.jpg"
              alt=""
              width={480}
              height={320}
              unoptimized
            />
          </Link>
          <ul>
            <li>
              <label htmlFor="imageGallery--type04__label001"></label>
            </li>
            <li>
              <label htmlFor="imageGallery--type04__label003"></label>
            </li>
          </ul>
        </div>
        <input
          type="radio"
          id="imageGallery--type04__label003"
          name="imageGallery--type04__input"
        />
        <div className={styles["mainImage"]}>
          <Link href="/parts/gallery-parts/type004">
            <Image
              src="/img/demo/sample3x4.jpg"
              alt=""
              width={360}
              height={480}
              unoptimized
            />
          </Link>
          <ul>
            <li>
              <label htmlFor="imageGallery--type04__label002"></label>
            </li>
            <li>
              <label htmlFor="imageGallery--type04__label004"></label>
            </li>
          </ul>
        </div>
        <input
          type="radio"
          id="imageGallery--type04__label004"
          name="imageGallery--type04__input"
        />
        <div className={styles["mainImage"]}>
          <Link href="/parts/gallery-parts/type004">
            <Image
              src="/img/demo/sample2x3L.jpg"
              alt=""
              width={320}
              height={480}
              unoptimized
            />
          </Link>
          <ul>
            <li>
              <label htmlFor="imageGallery--type04__label003"></label>
            </li>
            <li>
              <label htmlFor="imageGallery--type04__label005"></label>
            </li>
          </ul>
        </div>
        <input
          type="radio"
          id="imageGallery--type04__label005"
          name="imageGallery--type04__input"
        />
        <div className={styles["mainImage"]}>
          <Link href="/parts/gallery-parts/type004">
            <Image
              src="/img/demo/sample4x3.jpg"
              alt=""
              width={480}
              height={320}
              unoptimized
            />
          </Link>
          <ul>
            <li>
              <label htmlFor="imageGallery--type04__label004"></label>
            </li>
            <li>
              <label htmlFor="imageGallery--type04__label001"></label>
            </li>
          </ul>
        </div>

        <div className={styles["imagePagination"]}>
          <label htmlFor="imageGallery--type04__label001"></label>
          <label htmlFor="imageGallery--type04__label002"></label>
          <label htmlFor="imageGallery--type04__label003"></label>
          <label htmlFor="imageGallery--type04__label004"></label>
          <label htmlFor="imageGallery--type04__label005"></label>
        </div>
      </div>
    </div>
  );
}
