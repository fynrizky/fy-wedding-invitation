"use client";

import { Parisienne } from "next/font/google";
import Image from "next/image";
import { Wedding } from "@/app/types/wedding";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  wedding: Wedding;
};

export default function Couple({ wedding }: Props) {
  return (
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
      {/* FLOWER LEFT */}
      <Image
        src="/assets/bunga.svg"
        alt=""
        width={300}
        height={300}
        className="
          pointer-events-none
          absolute
          -left-52
          top-10
          z-0
          w-[430px]
          rotate-[-20deg]
          opacity-30
          md:-left-72
          md:w-[540px]
        "
      />

      {/* FLOWER RIGHT */}
      <Image
        src="/assets/bunga.svg"
        alt=""
        width={300}
        height={300}
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-0
          z-0
          w-[430px]
          rotate-[160deg]
          scale-x-[-1]
          opacity-30
          md:-right-72
          md:w-[540px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* HEADING */}
        <p
          className={`
            ${parisienne.className}
            text-4xl
            text-[#8b6b61]
            md:text-5xl
          `}
        >
          The Happy Couple
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
          Together with their beloved families
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[#8b6b61]/50" />

        {/* COUPLE */}
        <div
          className="
            mx-auto
            grid
            max-w-4xl
            grid-cols-1
            items-center
            gap-12
            md:grid-cols-[1fr_auto_1fr]
            md:gap-10
          "
        >

          {/* GROOM */}
          <div className="flex flex-col items-center">
            <div
              className="
                flex
                h-52
                w-52
                items-center
                justify-center
                rounded-full
                border
                border-[#8b6b61]/40
                bg-[#fffaf3]
                shadow-[0_15px_40px_rgba(91,36,20,0.08)]
                md:h-60
                md:w-60
              "
            >
              <span
                className={`
                  ${parisienne.className}
                  text-7xl
                  text-[#5b2414]
                  md:text-8xl
                `}
              >
                {wedding.groom.name.charAt(0)}
              </span>
            </div>

            <p
              className={`
                ${parisienne.className}
                mt-7
                text-4xl
                text-[#5b2414]
                md:text-5xl
              `}
            >
              {wedding.groom.name}
            </p>

            <div className="mt-4 max-w-xs">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#8b6b61]
                "
              >
                Putra dari
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-[#5b2414]/80
                "
              >
                {wedding.groom.parent}
              </p>
            </div>
          </div>

          {/* AMPERSAND */}
          <div
            className="
              flex
              items-center
              justify-center
              md:h-full
            "
          >
            <span
              className={`
                ${parisienne.className}
                text-6xl
                text-[#8b6b61]
                md:text-7xl
              `}
            >
              &
            </span>
          </div>

          {/* BRIDE */}
          <div className="flex flex-col items-center">
            <div
              className="
                flex
                h-52
                w-52
                items-center
                justify-center
                rounded-full
                border
                border-[#8b6b61]/40
                bg-[#fffaf3]
                shadow-[0_15px_40px_rgba(91,36,20,0.08)]
                md:h-60
                md:w-60
              "
            >
              <span
                className={`
                  ${parisienne.className}
                  text-7xl
                  text-[#5b2414]
                  md:text-8xl
                `}
              >
                {wedding.bride.name.charAt(0)}
              </span>
            </div>

            <p
              className={`
                ${parisienne.className}
                mt-7
                text-4xl
                text-[#5b2414]
                md:text-5xl
              `}
            >
              {wedding.bride.name}
            </p>

            <div className="mt-4 max-w-xs">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-[#8b6b61]
                "
              >
                Putri dari
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-[#5b2414]/80
                "
              >
                {wedding.bride.parent}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM QUOTE */}
        <p
          className={`
            ${parisienne.className}
            mx-auto
            mt-16
            max-w-xl
            text-2xl
            leading-relaxed
            text-[#8b6b61]
            md:text-3xl
          `}
        >
          Two hearts, one beautiful journey
        </p>
      </div>
    </section>
  );
}