"use client";

import { Wedding } from "@/app/types/wedding";
import { on } from "events";
import React, {useState} from "react";


type Props = {
  wedding: Wedding;
  onOpen: () => void;
  isExpired?: boolean;
};


export default function OpeningScreen({ wedding, onOpen, isExpired }: Props) {


  const handleOpen = () => {
    if (isExpired) {
      alert("Undangan sudah kadaluarsa");
      return;
    }

    onOpen();
  };
 
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center">
      
      <p className="text-gray-500 mb-2">Undangan Pernikahan</p>

      <h1 className="text-4xl text-gray-800 font-bold">
        {wedding.groom.name} & {wedding.bride.name}
      </h1>
     
      <button
        onClick={handleOpen}
        className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-black transition"
      >
        Buka Undangan
      </button>

    </div>
  );
}