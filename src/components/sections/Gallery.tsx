"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Parisienne } from "next/font/google";
import { Wedding } from "@/app/types/wedding";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  wedding: Wedding;
};

export default function Gallery({ wedding }: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const dummyImages = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/2.jpg",
];

const images =
  wedding.gallery && wedding.gallery.length > 0
    ? wedding.gallery
    : dummyImages;

  // Disable body scroll ketika lightbox terbuka
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Tutup lightbox dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Kalau gallery kosong, jangan tampilkan section
  if (images.length === 0) {
    return null;
  }

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === 0
        ? images.length - 1
        : selectedImage - 1
    );
  };

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      selectedImage === images.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  return (
    <>
      {/* GALLERY */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#f7f1e7]
          px-6
          py-24
          text-center
        "
      >
        {/* FLOWER TOP LEFT */}
        <Image
          src="/assets/bunga.svg"
          alt=""
          width={300}
          height={300}
          className="
            pointer-events-none
            absolute
            -left-52
            top-[-50px]
            z-0
            w-[420px]
            rotate-[-20deg]
            opacity-25
            md:-left-72
            md:w-[540px]
          "
        />

        {/* FLOWER BOTTOM RIGHT */}
        <Image
          src="/assets/bunga.svg"
          alt=""
          width={300}
          height={300}
          className="
            pointer-events-none
            absolute
            -right-52
            bottom-[-80px]
            z-0
            w-[420px]
            rotate-[160deg]
            scale-x-[-1]
            opacity-25
            md:-right-72
            md:w-[540px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* HEADER */}
          <p
            className={`
              ${parisienne.className}
              text-4xl
              text-[#8b6b61]
              md:text-5xl
            `}
          >
            Our Moments
          </p>

          <p
            className="
              mt-3
              text-xs
              uppercase
              tracking-[4px]
              text-[#5b2414]
            "
          >
            A collection of beautiful memories
          </p>

          <div className="mx-auto my-8 h-px w-20 bg-[#8b6b61]/50" />

          {/* MASONRY-STYLE GALLERY */}
          <div className="flex flex-wrap justify-center gap-4">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="
                  group
                  relative
                  aspect-[4/5]
                  w-[calc(50%-0.5rem)]
                  overflow-hidden
                  rounded-2xl
                  bg-[#e8ddd0]
                  text-left
                  md:w-[220px]
                "
              >
                <Image
                  src={image}
                  alt={`Wedding memory ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-black/0
                    transition-colors
                    duration-500
                    group-hover:bg-black/20
                  "
                />

                <div
                  className="
                    absolute inset-0
                    flex items-center justify-center
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-full
                      border border-white/70
                      bg-white/20
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    <span className="text-lg">⌕</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* FOOTER */}
          <p
            className={`
              ${parisienne.className}
              mt-14
              text-2xl
              text-[#8b6b61]
              md:text-3xl
            `}
          >
            Moments we will cherish forever
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage !== null && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/90
            px-4
            py-8
            backdrop-blur-sm
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-2xl
              text-white
              transition
              hover:bg-white/20
            "
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* PREVIOUS */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="
                absolute
                left-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white/20
                md:left-8
              "
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* IMAGE */}
          <div
            className="
              relative
              h-[80vh]
              w-full
              max-w-5xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[selectedImage]}
              alt={`Wedding memory ${selectedImage + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* NEXT */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="
                absolute
                right-3
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-2xl
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white/20
                md:right-8
              "
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {/* COUNTER */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              rounded-full
              bg-white/10
              px-4
              py-2
              text-xs
              tracking-[2px]
              text-white
              backdrop-blur-sm
            "
          >
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}