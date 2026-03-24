"use client";
import Hero from "./Hero";
// import Couple from "./Couple";
// import Event from "./Event";
// import Gallery from "./Gallery";
// import Countdown from "@/components/sections/Countdown";
// import MusicPlayer from "@/components/sections/MusicPlayer";

import { normalizeWedding } from "@/app/helper/normalizeWedding";
import OpeningScreen from "@/components/openingScreen";
import React, { useState, useEffect } from "react";
import { Wedding } from "@/app/types/wedding";
import {doc, onSnapshot} from "firebase/firestore";
import { db } from "@/lib/firebase";
type Props = {
  wedding: Wedding;
};
export default function RegularTemplate({ wedding }: Props) {
  const [liveWedding, setLiveWedding] = useState(wedding);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
  const unsub = onSnapshot(
    doc(db, "weddings", wedding.slug), // sekarang valid
    (snap) => {
      if (snap.exists()) {
        const data = snap.data();

        setLiveWedding((prev) => 
          normalizeWedding(
          {
          ...prev,
          ...data,
          }, snap.id));
      }
    } 
  );  

  return () => unsub();
}, [wedding.slug]);

    // 🔥 HITUNG EXPIRED DI SINI (REALTIME)
  const isExpired = liveWedding.expiredAt < new Date();

    // 🔥 PROTEKSI GLOBAL (WAJIB)
  if (liveWedding.expiredAt < new Date()) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-xl font-semibold">
          Undangan sudah kadaluarsa
        </h1>

        <button className="mt-4 px-4 py-2 bg-black text-white rounded">
          Perpanjang Undangan
        </button>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <OpeningScreen
        wedding={liveWedding}
        onOpen={() => setIsOpen(true)}
        isExpired={isExpired}
      />
    );
  }

  return (
    <main>
      {/* <MusicPlayer url={wedding.musicUrl} /> */}

      <Hero wedding={liveWedding} />

      {/* <Countdown date={wedding.eventDate} /> */}

      {/* <Couple wedding={wedding} /> */}

      {/* <Event wedding={wedding} /> */}

      {/* {wedding.gallery?.length > 0 && (
        <Gallery images={wedding.gallery} />
      )} */}
    </main>
  );
}