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
      -left-130
      -bottom-40
      z-0
      w-40 md:w-500
      opacity-70
      pointer-events-none
    "
  />

  {/* FLOWER RIGHT */}
  <Image
    src="/assets/bunga.svg"
    alt="flower"
    width={300}
    height={300}
    className="
      absolute
      -right-130
      -bottom-25
      z-0
      w-40 md:w-500
      scale-x-[-1]
      opacity-70
      pointer-events-none
    "
  />

  {/* BUTTERFLY */}
  <Image
    src="/assets/kupu2.svg"
    alt="butterfly"
    width={120}
    height={120}
    className="
      absolute
      right-15
      -top-12
      z-0
      w-16 md:w-120
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
      right-180
      bottom-20
      z-0
      w-16 md:w-110
      scale-x-[-1]
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