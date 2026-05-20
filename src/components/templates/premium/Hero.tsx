import { Parisienne } from "next/font/google";
import { formatDate } from "../formatDate";
import Image from "next/image";
type Props = {
  wedding: any;
};
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero({ wedding }: Props) {
 
  return (
    <section className="relative bg-[#f7f1e7] text-center py-17 overflow-hidden">

  {/* FLOWER LEFT */}
  <Image
    src="/assets/bunga.svg"
    alt="flower"
    width={300}
    height={300}
    className="
       absolute
      -left-45
      sm:-left-80
      md:-left-100
      lg:-left-130
      -bottom-10
      sm:-bottom-20
      md:-bottom-25
      lg:-bottom-35
      z-0
      w-4xl
      md:w-7xl
      lg:w-7xl
      opacity-70
      animate-[flowerFloat_8s_ease-in-out_infinite]
      pointer-events-none"
  />

  {/* FLOWER RIGHT */}
  <Image
    src="/assets/bunga.svg"
    alt="flower"
    width={300}
    height={300}
    className="
      absolute
      -right-45
      sm:-right-80
      md:-right-105
      lg:-right-105
      -top-5
      sm:-top-15
      md:-top-15
      lg:-top-20
      z-0
      w-4xl 
      md:w-5xl
      lg:w-5xl
      opacity-70
      scale-x-[-1]
      animate-[flowerFloat_10s_ease-in-out_infinite]
      pointer-events-none"
  />

  {/* BUTTERFLY */}
  <Image
    src="/assets/kupu2.svg"
    alt="butterfly"
    width={120}
    height={120}
    className="
      absolute
      right-10
      sm:right-25
      md:right-25
      lg:right-25
      top-0
      sm:top-0
      md:top-0
      lg:-top-5
      z-0
      w-30
      sm:w-40 
      md:w-50
      lg:w-70
      animate-[butterfly_6s_ease-in-out_infinite]
      rotate-14
      pointer-events-none
    "
  />
  <Image
    src="/assets/kupu2.svg"
    alt="butterfly"
    width={120}
    height={120}
    className="
      absolute
      left-10
      sm:left-20
      md:left-30
      lg:left-25
      top-80
      sm:top-80
      md:top-80
      lg:top-55
      z-0
      w-30
      sm:w-50
      md:w-70
      lg:w-110
      scale-x-[-1]
      animate-[butterfly_8s_ease-in-out_infinite]
      -rotate-14
      pointer-events-none
    "
  />

  <p className={`${parisienne.className} text-[#8b6b61] tracking-[1px] text-lg relative z-10`}>
    Akad and Reception
  </p>  
  <p className="text-[#8b6b61] tracking-[4px] text-sm mb-4 relative z-10">
    {formatDate(wedding.event.akadDate)} | {formatDate(wedding.event.receptionDate)}
  </p>

  <div
    className={`
      ${parisienne.className}
      text-[#5b2414]
      flex flex-col
      items-center
      leading-none
      relative z-10
    `}
  >
    <h1
      className="
        relative
        -translate-x-10
        rotate-[-5deg]
        text-7xl md:text-8xl
        drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]
      "
    >
      {wedding.groom.name}
    </h1>

    <span className="text-6xl md:text-7xl my-2 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]">
      &
    </span>

    <h1
      className="
        relative
        translate-x-10
        rotate-[-5deg]
        text-7xl md:text-8xl
        drop-shadow-[4px_4px_2px_rgba(0,0,0,0.3)]
      "
    >
      {wedding.bride.name}
    </h1>
  </div>

  <button
    className="
      relative z-10
      mt-8
      bg-[#9c8579]
      text-white
      px-8 py-3
      tracking-wide
      border border-[#8b6b61] hover:bg-[#8b6b61]
      rounded-lg
    "
  >
    RSVP HERE
  </button>
</section>
  );
}