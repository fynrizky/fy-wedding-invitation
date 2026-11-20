"use client";

import { useEffect, useState } from "react";
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

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const target = new Date(targetDate).getTime();
  const now = Date.now();

  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function Countdown({ wedding }: Props) {
  const targetDate = wedding.event.receptionDate;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTES",
    },
    {
      value: timeLeft.seconds,
      label: "SECONDS",
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
      {/* FLOWER LEFT */}
      <Image
        src="/assets/bunga.svg"
        alt=""
        width={300}
        height={300}
        className="
          pointer-events-none
          absolute
          -left-42
          bottom-[-30px]
          z-0
          w-[420px]
          opacity-70
          sm:-left-56
          md:-left-105
          md:w-[1050px]
          
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
          -right-42
          top-[-40px]
          z-0
          w-[420px]
          scale-x-[-1]
          opacity-70
          sm:-right-56
          md:-right-105
          md:w-[1050px]
          animate-[flowerFloat_10s_ease-in-out_infinite]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* TITLE */}
        <p
          className={`
            ${parisienne.className}
            text-3xl
            text-[#8b6b61]
            md:text-4xl
          `}
        >
          Counting Down To
        </p>

        <h2
          className="
            mt-2
            text-sm
            font-medium
            uppercase
            tracking-[5px]
            text-[#5b2414]
          "
        >
          Our Special Day
        </h2>

        {/* DIVIDER */}
        <div className="mx-auto my-8 h-px w-20 bg-[#8b6b61]/50" />

        {/* COUNTDOWN */}
        <div
          className="
            mx-auto
            grid
            max-w-3xl
            grid-cols-2
            gap-5
            sm:grid-cols-4
            sm:gap-8
          "
        >
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-[#8b6b61]/30
                bg-[#fffaf3]/70
                px-4
                py-6
                shadow-[0_8px_30px_rgba(91,36,20,0.06)]
                backdrop-blur-sm
              "
            >
              <span
                className={`
                  ${parisienne.className}
                  text-5xl
                  leading-none
                  text-[#5b2414]
                  md:text-6xl
                `}
              >
                {pad(item.value)}
              </span>

              <span
                className="
                  mt-3
                  text-[10px]
                  tracking-[3px]
                  text-[#8b6b61]
                "
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <p
          className={`
            ${parisienne.className}
            mt-10
            text-2xl
            text-[#8b6b61]
          `}
        >
          Until we say "I do"
        </p>
      </div>
    </section>
  );
}