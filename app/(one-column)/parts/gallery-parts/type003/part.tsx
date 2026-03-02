"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PartType03() {
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
        className={`${styles["imageGalleryBox--type03"]} --autoImageGallery`}
      >
        <input
          type="radio"
          id="imageGallery--type03__label001"
          name="imageGallery--type03__input"
          defaultChecked
        />
        <input
          type="radio"
          id="imageGallery--type03__label002"
          name="imageGallery--type03__input"
        />
        <input
          type="radio"
          id="imageGallery--type03__label003"
          name="imageGallery--type03__input"
        />
        <input
          type="radio"
          id="imageGallery--type03__label004"
          name="imageGallery--type03__input"
        />
        <input
          type="radio"
          id="imageGallery--type03__label005"
          name="imageGallery--type03__input"
        />

        <ul>
          <li>
            <label htmlFor="imageGallery--type03__label005"></label>
          </li>
          <li>
            <label htmlFor="imageGallery--type03__label002"></label>
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="imageGallery--type03__label001"></label>
          </li>
          <li>
            <label htmlFor="imageGallery--type03__label003"></label>
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="imageGallery--type03__label002"></label>
          </li>
          <li>
            <label htmlFor="imageGallery--type03__label004"></label>
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="imageGallery--type03__label003"></label>
          </li>
          <li>
            <label htmlFor="imageGallery--type03__label005"></label>
          </li>
        </ul>
        <ul>
          <li>
            <label htmlFor="imageGallery--type03__label004"></label>
          </li>
          <li>
            <label htmlFor="imageGallery--type03__label001"></label>
          </li>
        </ul>

        <figure>
          <Link href="/parts/gallery-parts/type003">
            <Image
              src="/img/demo/sample1x1.jpg"
              alt=""
              width={380}
              height={380}
              unoptimized
            />
          </Link>
        </figure>
        <figure>
          <Link href="/parts/gallery-parts/type003">
            <Image
              src="/img/demo/sample3x2.jpg"
              alt=""
              width={480}
              height={320}
              unoptimized
            />
          </Link>
        </figure>
        <figure>
          <Link href="/parts/gallery-parts/type003">
            <Image
              src="/img/demo/sample3x4.jpg"
              alt=""
              width={360}
              height={480}
              unoptimized
            />
          </Link>
        </figure>
        <figure>
          <Link href="/parts/gallery-parts/type003">
            <Image
              src="/img/demo/sample2x3.jpg"
              alt=""
              width={320}
              height={480}
              unoptimized
            />
          </Link>
        </figure>
        <figure>
          <Link href="/parts/gallery-parts/type003">
            <Image
              src="/img/demo/sample4x3.jpg"
              alt=""
              width={480}
              height={320}
              unoptimized
            />
          </Link>
        </figure>

        <div className={styles["imagePagination"]}>
          <label htmlFor="imageGallery--type03__label001"></label>
          <label htmlFor="imageGallery--type03__label002"></label>
          <label htmlFor="imageGallery--type03__label003"></label>
          <label htmlFor="imageGallery--type03__label004"></label>
          <label htmlFor="imageGallery--type03__label005"></label>
        </div>
      </div>
    </div>
  );
}
