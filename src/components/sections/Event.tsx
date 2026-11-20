"use client";

import { Parisienne } from "next/font/google";
import Image from "next/image";
import { Wedding } from "@/app/types/wedding";
import { formatDate } from "@/components/templates/formatDate";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  wedding: Wedding;
};

export default function Event({ wedding }: Props) {
  const events = [
    {
      title: "Akad Nikah",
      date: wedding.event.akadDate,
      location: wedding.event.akadLocation,
    },
    {
      title: "Resepsi",
      date: wedding.event.receptionDate,
      location: wedding.event.receptionLocation,
    },
  ];

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
      {/* FLOWER TOP LEFT */}
      <Image
        src="/assets/bunga.svg"
        alt=""
        width={300}
        height={300}
        className="
          pointer-events-none
          absolute
          -left-56
          -top-20
          z-0
          w-[430px]
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
          -right-56
          -bottom-20
          z-0
          w-[430px]
          rotate-[160deg]
          scale-x-[-1]
          opacity-25
          md:-right-72
          md:w-[540px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* HEADER */}
        <p
          className={`
            ${parisienne.className}
            text-4xl
            text-[#8b6b61]
            md:text-5xl
          `}
        >
          Wedding Events
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
          Save the date
        </p>

        <div className="mx-auto my-8 h-px w-20 bg-[#8b6b61]/50" />

        {/* EVENT CARDS */}
        <div
          className="
            mx-auto
            grid
            max-w-4xl
            grid-cols-1
            gap-8
            md:grid-cols-2
          "
        >
          {events.map((event) => (
            <div
              key={event.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#8b6b61]/30
                bg-[#fffaf3]/80
                px-8
                py-10
                shadow-[0_15px_40px_rgba(91,36,20,0.06)]
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_50px_rgba(91,36,20,0.10)]
              "
            >
              {/* CARD DECORATION */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  border
                  border-[#8b6b61]/10
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-20
                  w-20
                  rounded-full
                  border
                  border-[#8b6b61]/10
                "
              />

              {/* ICON */}
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#8b6b61]/30
                  bg-[#f7f1e7]
                "
              >
                <span className="text-2xl text-[#8b6b61]">
                  ♡
                </span>
              </div>

              {/* TITLE */}
              <h3
                className={`
                  ${parisienne.className}
                  mt-6
                  text-4xl
                  text-[#5b2414]
                `}
              >
                {event.title}
              </h3>

              {/* DATE */}
              <p
                className="
                  mt-5
                  text-sm
                  font-medium
                  tracking-[2px]
                  text-[#8b6b61]
                "
              >
                {formatDate(event.date)}
              </p>

              {/* DIVIDER */}
              <div className="mx-auto my-5 h-px w-12 bg-[#8b6b61]/40" />

              {/* LOCATION */}
              <p
                className="
                  mx-auto
                  max-w-xs
                  text-sm
                  leading-relaxed
                  text-[#5b2414]/75
                "
              >
                {event.location}
              </p>

              {/* MAP BUTTON */}
              <button
                type="button"
                className="
                  mt-7
                  rounded-lg
                  border
                  border-[#8b6b61]
                  px-6
                  py-2.5
                  text-xs
                  tracking-[2px]
                  text-[#5b2414]
                  transition-colors
                  duration-300
                  hover:bg-[#8b6b61]
                  hover:text-white
                "
              >
                VIEW MAP
              </button>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <p
          className={`
            ${parisienne.className}
            mt-16
            text-2xl
            text-[#8b6b61]
            md:text-3xl
          `}
        >
          We would love to celebrate with you
        </p>
      </div>
    </section>
  );
}