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
      -left-40
      lg:-left-130
      -bottom-10
      lg:-bottom-35
      z-0
      w-200
      lg:w-500
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
      -right-40
      lg:-right-130
      -top-5
      lg:-top-30
      z-0
      w-200 lg:w-500
      scale-x-[-1]
      opacity-70
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
      lg:right-15
      top-0
      lg:-top-10
      z-0
      w-30 lg:w-120
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
      lg:left-25
      top-80
      lg:top-55
      z-0
      w-30 lg:w-110
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
    "
  >
    RSVP HERE
  </button>
</section>
  );
}